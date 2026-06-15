export const hero = {
  eyebrow: "Ares Studio — est. 2014",
  titleLines: ["Every frame", "tells a story."],
  intro:
    "Wedding, portrait and editorial photography, crafted with cinematic precision.",
  primary: { label: "Explore the collection", href: "/gallery" },
  secondary: { label: "Book a session", href: "/booking" },
  image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  imageAlt: "A couple embracing in soft evening light",
};

export const manifesto = {
  eyebrow: "The eye behind Ares",
  quote:
    "I don't simply capture images. I preserve atmospheres, gestures, silences and the invisible tension of a moment before it disappears.",
  body: "Every commission begins with a conversation and ends with a body of work made to outlive the day it documents. Light, restraint and patience — nothing rushed, nothing loud.",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  imageAlt: "Portrait of the photographer in available light",
  cta: { label: "Read the full story", href: "/about" },
};

export const featured = [
  {
    title: "Wedding in Provence",
    category: "Wedding",
    location: "Gordes, France",
    year: "2024",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    alt: "Bride and groom at golden hour in a Provence vineyard",
  },
  {
    title: "Editorial — Maison Noir",
    category: "Fashion",
    location: "Paris, France",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    alt: "Editorial fashion portrait in dramatic light",
  },
  {
    title: "Portrait Sessions",
    category: "Portrait",
    location: "Studio, Paris",
    year: "2023",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    alt: "Studio portrait of a woman in soft shadow",
  },
] as const;

export const closing = {
  line: "Let's create something timeless.",
  sub: "Limited commissions each season. Tell me about your story.",
  cta: { label: "Book a session", href: "/booking" },
};
