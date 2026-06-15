# ARÈS — Luxury Photography Experience

Premium, cinematic portfolio platform for professional photographers.
Built as a **reusable commercial asset** : one codebase, re-skinnable per
photographer (photos, copy, colors) for fast delivery.

> Luxury photography for timeless stories.

---

## Stack

| Domain      | Tech                                            |
| ----------- | ----------------------------------------------- |
| Framework   | Next.js 16 (App Router) · React 19 · TypeScript |
| Styling     | Tailwind CSS v4 (CSS-first `@theme`)            |
| Motion      | Framer Motion · GSAP · Lenis (synced via ticker)|
| Backend     | Appwrite *(Phase 2)*                            |
| Media       | Cloudinary *(optional, Unsplash fallback)*      |
| Email       | Resend *(optional, demo fallback)*              |
| 3D          | React Three Fiber *(Phase 3, reserved)*         |

---

## Roadmap (phased — sell-first discipline)

**Phase 1 — Sellable (current).** Home · About · Gallery · Stories · Booking ·
responsive · premium animations · deployment. Goal: a demo impressive enough to
show a real photographer.

**Phase 2 — Product.** Appwrite (auth, private client galleries, admin).

**Phase 3 — Wow factor.** 3D museum (R3F). Folder `src/components/museum/`
is reserved but intentionally empty in Phase 1.

> Phase 1 is "done" only when the site is live, showable, and has been sent to
> several photographers who understand the value — not when it merely compiles.

---

## Getting started

```bash
npm install
cp .env.example .env.local   # all keys optional in Phase 1
npm run dev
```

Open http://localhost:3000

No external service is required to run Phase 1 : missing keys trigger clean
fallbacks (Unsplash images, simulated booking success).

---

## Environment variables

See `.env.example`. In Phase 1 every variable is optional. Never hardcode
secrets — environment variables only.

---

## Architecture

```txt
src/
  app/                 # routes (App Router)
  components/
    layout/            # navbar, footer
    sections/          # home sections
    gallery/           # masonry, lightbox
    booking/           # form
    ui/                # primitives
    providers/         # SmoothScroll, etc.
    museum/            # reserved — Phase 3
  lib/
    appwrite/          # Phase 2
    cloudinary/        # media helpers
    resend/            # email helpers
    utils/             # cn(), helpers
  data/                # fictional content (Phase 1)
  hooks/
  types/
  styles/
```

---

## Appwrite collections (Phase 2 — reference)

Database `ares_portfolio` :

- **bookings** — name·, email·, phone, service·, date, budget, message, status (default `new`), createdAt
- **testimonials** — name·, role, message·, rating, imageUrl
- **projects** — title·, slug·, category·, year, location, description, coverImage, featured
- **stories** — title·, slug·, location, date, coverImage, description
- **galleries** — title·, slug·, coverImage, passwordProtected, clientEmail

(· = required)

---

## Deployment

Netlify or Vercel. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
