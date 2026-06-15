import type { Metadata } from "next";
import { Check, Plus } from "lucide-react";
import { booking } from "@/data/booking";
import { cn } from "@/lib/utils/cn";
import { PageHeader } from "@/components/ui/PageHeader";
import { Reveal } from "@/components/ui/Reveal";
import { BookingForm } from "@/components/booking/BookingForm";

export const metadata: Metadata = {
  title: "Réserver",
  description:
    "Réservez votre séance avec ARÈS Studio. Formules Essentiel, Signature et Prestige. Mariages, portraits, mode et événements en France, Belgique et Suisse.",
};

export default function BookingPage() {
  return (
    <main>
      <PageHeader
        eyebrow={booking.header.eyebrow}
        title={booking.header.title}
        intro={booking.header.intro}
      />

      {/* Formules */}
      <section className="mx-auto max-w-7xl px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="grid gap-6 lg:grid-cols-3">
          {booking.packages.map((pkg, i) => (
            <Reveal key={pkg.name} delay={0.06 * i}>
              <div
                className={cn(
                  "flex h-full flex-col p-8 transition-colors",
                  pkg.featured
                    ? "border border-gold/50 bg-gold/[0.04]"
                    : "border border-ivory/10",
                )}
              >
                {pkg.featured && (
                  <span className="mb-4 inline-block w-fit text-[10px] uppercase tracking-[0.22em] text-gold">
                    Le plus choisi
                  </span>
                )}
                <h3 className="font-display text-2xl text-ivory">{pkg.name}</h3>
                <p className="mt-2 text-sm text-ivory/50">{pkg.tagline}</p>
                <p className="mt-6 font-display text-4xl text-ivory">
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
          Formules indicatives — chaque projet fait l'objet d'un devis
          personnalisé. Frais de déplacement précisés au cas par cas.
        </p>
      </section>

      {/* Formulaire */}
      <section className="border-t border-ivory/10 bg-anthracite/30">
        <div className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
          <Reveal>
            <h2 className="font-display text-4xl leading-tight text-ivory lg:text-5xl">
              Parlez-moi de votre projet.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-ivory/60">
              Quelques informations suffisent pour démarrer. Plus vous m'en dites
              sur votre histoire, mieux je peux y répondre.
            </p>
          </Reveal>
          <div className="mt-14">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-24 lg:py-32">
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
      </section>
    </main>
  );
}
