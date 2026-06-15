import type { Metadata } from "next";
import { Check, Plus } from "lucide-react";
import { booking } from "@/data/booking";
import { experience } from "@/data/home";
import { cn } from "@/lib/utils/cn";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Réserver",
  description:
    "Réservez une séance avec Elias Moreau — Arès Studio. Mariage, portrait, couple, famille, événement et corporate. Premier échange gratuit, réponse sous 24 h.",
};

export default function BookingPage() {
  return (
    <main>
      <PageHeader
        eyebrow={booking.header.eyebrow}
        title={booking.header.title}
        intro={booking.header.intro}
      />

      {/* Infos pratiques */}
      <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10 lg:pb-24">
        <div className="grid gap-x-10 gap-y-8 border border-ivory/10 bg-anthracite/20 p-8 sm:grid-cols-2 lg:grid-cols-3 lg:p-10">
          {booking.practical.map((item, i) => (
            <Reveal key={item.label} delay={0.03 * i}>
              <div>
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold/80">
                  {item.label}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">
                  {item.value}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formules */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <Reveal>
          <h2 className="mb-12 font-display text-3xl text-ivory lg:text-4xl">
            Formules
          </h2>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {booking.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={0.06 * i}>
              <div
                className={cn(
                  "flex h-full flex-col p-8",
                  pkg.featured
                    ? "border border-gold/50 bg-gold/[0.04]"
                    : "border border-ivory/10",
                )}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-block w-fit text-[10px] uppercase tracking-[0.22em] text-gold">
                    Le plus demandé
                  </span>
                )}
                <h3 className="font-display text-2xl text-ivory">{pkg.name}</h3>
                <p className="mt-2 text-sm text-ivory/50">{pkg.tagline}</p>
                <p className="mt-6 font-display text-2xl text-ivory">
                  {pkg.price}
                </p>
                <ul className="mt-8 space-y-3">
                  {pkg.features.map((feat) => (
                    <li
                      key={feat}
                      className="flex items-start gap-3 text-sm text-ivory/70"
                    >
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        strokeWidth={1.5}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-xs leading-relaxed text-ivory/40">
          Tarifs de départ — chaque projet fait l'objet d'un devis personnalisé
          après notre premier échange.
        </p>
      </section>

      {/* Comment ça se passe */}
      <section className="border-t border-ivory/10 bg-anthracite/20">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10 lg:py-28">
          <Reveal>
            <h2 className="mb-12 font-display text-3xl text-ivory lg:text-4xl">
              {experience.title}
            </h2>
          </Reveal>
          <div className="grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {experience.steps.map((step, i) => (
              <Reveal key={step.n} delay={0.05 * i}>
                <div className="border-t border-ivory/15 pt-5">
                  <span className="font-display text-2xl text-gold/80">
                    {step.n}
                  </span>
                  <h3 className="mt-3 text-base text-ivory">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ivory/55">
                    {step.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Avant de réserver */}
      <section className="border-t border-ivory/10">
        <div className="mx-auto max-w-3xl px-6 py-20 lg:py-24">
          <Reveal>
            <p className="mb-6 text-[11px] uppercase tracking-[0.3em] text-gold">
              Avant de réserver
            </p>
            <p className="font-display text-2xl leading-snug text-ivory lg:text-3xl">
              {booking.reassure}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Formulaire */}
      <section className="mx-auto max-w-3xl px-6 pb-24 lg:pb-32">
        <Reveal>
          <h2 className="font-display text-3xl text-ivory lg:text-4xl">
            Parlez-moi de votre projet
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/60">
            Quelques informations suffisent pour démarrer. Je reviens vers vous
            sous 24 h pour caler un premier échange.
          </p>
        </Reveal>
        <div className="mt-14">
          <BookingForm />
        </div>
        <Reveal>
          <div className="mt-10 border-l-2 border-gold/40 pl-5">
            <p className="text-sm leading-relaxed text-ivory/50">
              <span className="text-ivory/80">Et après ?</span> {booking.afterSend}
            </p>
          </div>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="border-t border-ivory/10">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:py-28">
          <Reveal>
            <p className="mb-12 text-[11px] uppercase tracking-[0.3em] text-gold">
              Questions fréquentes
            </p>
          </Reveal>
          <div>
            {booking.faq.map((item, i) => (
              <Reveal key={item.q} delay={0.03 * i}>
                <details className="group border-b border-ivory/10 py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-ivory [&::-webkit-details-marker]:hidden">
                    <span className="font-display text-lg">{item.q}</span>
                    <Plus
                      className="h-5 w-5 shrink-0 text-gold transition-transform duration-300 group-open:rotate-45"
                      strokeWidth={1.25}
                    />
                  </summary>
                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ivory/60">
                    {item.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
