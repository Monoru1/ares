import { NextResponse } from "next/server";
import { Resend } from "resend";

type BookingPayload = {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  date?: string;
  budget?: string;
  message?: string;
  website?: string;
};

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  let body: BookingPayload;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "La demande est illisible. Réessayez dans un instant." },
      { status: 400 },
    );
  }

  if (clean(body.website)) {
    return NextResponse.json({ ok: true, demo: true });
  }

  const payload = {
    name: clean(body.name),
    email: clean(body.email),
    phone: clean(body.phone),
    service: clean(body.service),
    date: clean(body.date),
    budget: clean(body.budget),
    message: clean(body.message),
  };

  const errors: Partial<Record<keyof typeof payload, string>> = {};

  if (payload.name.length < 2) errors.name = "Votre nom est requis.";
  if (!emailRegex.test(payload.email)) errors.email = "Une adresse email valide est requise.";
  if (!payload.service) errors.service = "Choisissez une prestation.";
  if (payload.message.length < 12) errors.message = "Ajoutez quelques détails sur votre projet.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json(
      { ok: false, message: "Certaines informations sont à corriger.", errors },
      { status: 422 },
    );
  }

  const resendKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.BOOKING_TO_EMAIL || from;

  if (!resendKey || !from || !to) {
    return NextResponse.json({
      ok: true,
      demo: true,
      message: "Demande reçue en mode démo. Configurez Resend pour recevoir les emails.",
    });
  }

  const resend = new Resend(resendKey);
  const safe = Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, escapeHtml(value)]),
  ) as typeof payload;

  try {
    await resend.emails.send({
      from,
      to,
      replyTo: payload.email,
      subject: `Nouvelle demande ARÈS — ${payload.service}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#111">
          <h1>Nouvelle demande de séance</h1>
          <p><strong>Nom :</strong> ${safe.name}</p>
          <p><strong>Email :</strong> ${safe.email}</p>
          <p><strong>Téléphone :</strong> ${safe.phone || "Non renseigné"}</p>
          <p><strong>Prestation :</strong> ${safe.service}</p>
          <p><strong>Date souhaitée :</strong> ${safe.date || "Non renseignée"}</p>
          <p><strong>Budget :</strong> ${safe.budget || "Non renseigné"}</p>
          <hr />
          <p><strong>Message :</strong></p>
          <p>${safe.message.replace(/\n/g, "<br />")}</p>
        </div>
      `,
      text: [
        "Nouvelle demande de séance",
        `Nom : ${payload.name}`,
        `Email : ${payload.email}`,
        `Téléphone : ${payload.phone || "Non renseigné"}`,
        `Prestation : ${payload.service}`,
        `Date souhaitée : ${payload.date || "Non renseignée"}`,
        `Budget : ${payload.budget || "Non renseigné"}`,
        "",
        payload.message,
      ].join("\n"),
    });

    return NextResponse.json({
      ok: true,
      message: "Demande envoyée. Je reviens vers vous sous 48 heures.",
    });
  } catch {
    return NextResponse.json(
      { ok: false, message: "L'email n'a pas pu partir. Réessayez ou contactez-moi directement." },
      { status: 500 },
    );
  }
}
