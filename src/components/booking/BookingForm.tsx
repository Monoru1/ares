"use client";

import { useState, type ChangeEvent } from "react";
import { Check } from "lucide-react";
import { booking } from "@/data/booking";
import { cn } from "@/lib/utils/cn";

type Fields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  budget: string;
  message: string;
};

const EMPTY: Fields = {
  name: "",
  email: "",
  phone: "",
  service: "",
  date: "",
  budget: "",
  message: "",
};

const labelCls = "mb-2 block text-[11px] uppercase tracking-[0.18em] text-ivory/50";
const fieldCls =
  "w-full border-b border-ivory/20 bg-transparent py-3 text-ivory placeholder-ivory/30 outline-none transition-colors focus:border-gold";

export function BookingForm() {
  const [f, setF] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");

  const set =
    (k: keyof Fields) =>
    (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
      setF((p) => ({ ...p, [k]: e.target.value }));

  const validate = () => {
    const er: Partial<Record<keyof Fields, string>> = {};
    if (!f.name.trim()) er.name = "Votre nom est requis.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email))
      er.email = "Une adresse email valide est requise.";
    if (!f.service) er.service = "Choisissez une prestation.";
    if (!f.message.trim())
      er.message = "Dites-moi quelques mots sur votre projet.";
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async () => {
    if (!validate()) return;
    setStatus("sending");
    // Branchement Resend / Appwrite au prochain lot — succès simulé ici.
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("done");
  };

  if (status === "done") {
    return (
      <div className="flex flex-col items-center border border-gold/30 px-6 py-20 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-gold/50">
          <Check className="h-6 w-6 text-gold" strokeWidth={1.5} />
        </span>
        <h3 className="mt-8 font-display text-3xl text-ivory">
          Demande envoyée
        </h3>
        <p className="mt-4 max-w-md text-base leading-relaxed text-ivory/60">
          Merci {f.name.split(" ")[0]}. Je reviens vers vous sous 48 heures pour
          échanger sur votre projet et fixer une date.
        </p>
        <button
          type="button"
          onClick={() => {
            setF(EMPTY);
            setStatus("idle");
          }}
          className="mt-10 text-xs uppercase tracking-[0.18em] text-ivory/60 underline decoration-gold/50 underline-offset-4 transition-colors hover:text-gold"
        >
          Envoyer une autre demande
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      <div>
        <label htmlFor="name" className={labelCls}>
          Nom complet
        </label>
        <input
          id="name"
          value={f.name}
          onChange={set("name")}
          className={fieldCls}
          placeholder="Camille Durand"
          aria-invalid={!!errors.name}
        />
        {errors.name && (
          <p className="mt-2 text-xs text-gold/90">{errors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelCls}>
          Email
        </label>
        <input
          id="email"
          type="email"
          value={f.email}
          onChange={set("email")}
          className={fieldCls}
          placeholder="vous@exemple.fr"
          aria-invalid={!!errors.email}
        />
        {errors.email && (
          <p className="mt-2 text-xs text-gold/90">{errors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className={labelCls}>
          Téléphone <span className="text-ivory/30">(optionnel)</span>
        </label>
        <input
          id="phone"
          value={f.phone}
          onChange={set("phone")}
          className={fieldCls}
          placeholder="06 12 34 56 78"
        />
      </div>

      <div>
        <label htmlFor="service" className={labelCls}>
          Prestation
        </label>
        <select
          id="service"
          value={f.service}
          onChange={set("service")}
          className={cn(fieldCls, "cursor-pointer")}
          aria-invalid={!!errors.service}
        >
          <option value="" disabled className="bg-void">
            Sélectionnez…
          </option>
          {booking.services.map((s) => (
            <option key={s} value={s} className="bg-void">
              {s}
            </option>
          ))}
        </select>
        {errors.service && (
          <p className="mt-2 text-xs text-gold/90">{errors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor="date" className={labelCls}>
          Date souhaitée <span className="text-ivory/30">(optionnel)</span>
        </label>
        <input
          id="date"
          type="date"
          value={f.date}
          onChange={set("date")}
          className={cn(fieldCls, "cursor-pointer")}
        />
      </div>

      <div>
        <label htmlFor="budget" className={labelCls}>
          Budget <span className="text-ivory/30">(optionnel)</span>
        </label>
        <select
          id="budget"
          value={f.budget}
          onChange={set("budget")}
          className={cn(fieldCls, "cursor-pointer")}
        >
          <option value="" disabled className="bg-void">
            Sélectionnez…
          </option>
          {booking.budgets.map((b) => (
            <option key={b} value={b} className="bg-void">
              {b}
            </option>
          ))}
        </select>
      </div>

      <div className="sm:col-span-2">
        <label htmlFor="message" className={labelCls}>
          Votre projet
        </label>
        <textarea
          id="message"
          value={f.message}
          onChange={set("message")}
          rows={4}
          className={cn(fieldCls, "resize-none")}
          placeholder="Parlez-moi de votre histoire, du lieu, de l'ambiance recherchée…"
          aria-invalid={!!errors.message}
        />
        {errors.message && (
          <p className="mt-2 text-xs text-gold/90">{errors.message}</p>
        )}
      </div>

      <div className="sm:col-span-2">
        <button
          type="button"
          onClick={submit}
          disabled={status === "sending"}
          className="group relative inline-flex w-full items-center justify-center overflow-hidden border border-gold/60 px-8 py-4 text-sm uppercase tracking-[0.18em] text-ivory transition-colors duration-500 hover:text-void focus-visible:text-void disabled:opacity-60 sm:w-auto"
        >
          <span className="relative z-10">
            {status === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}
          </span>
          <span className="absolute inset-0 z-0 origin-bottom scale-y-0 bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 group-focus-visible:scale-y-100" />
        </button>
        <p className="mt-4 text-xs leading-relaxed text-ivory/40">
          Réponse sous 48 h. Aucun engagement avant notre premier échange.
        </p>
      </div>
    </div>
  );
}
