import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-ivory/10 bg-void">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-sm">
            <p className="font-display text-2xl tracking-[0.2em] text-ivory">
              {site.wordmark}
              <span className="text-gold">.</span>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ivory/50">
              {site.signature}
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-gold/80">
                Explore
              </p>
              <ul className="space-y-2">
                {site.nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-ivory/60 transition-colors hover:text-ivory"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-gold/80">
                Contact
              </p>
              <ul className="space-y-2 text-sm text-ivory/60">
                <li>
                  <a
                    href={`mailto:${site.email}`}
                    className="transition-colors hover:text-ivory"
                  >
                    {site.email}
                  </a>
                </li>
                <li>{site.location}</li>
                <li className="flex gap-4 pt-2">
                  {site.social.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-ivory"
                    >
                      {s.label}
                    </a>
                  ))}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-ivory/10 pt-6 text-xs text-ivory/40 sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Tous droits réservés.
          </p>
          <p>Conçu avec retenue à Paris.</p>
        </div>
      </div>
    </footer>
  );
}
