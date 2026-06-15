export const hero = {
  eyebrow: "ARÈS Studio — depuis 2014",
  titleLines: ["Chaque image garde", "ce que le temps", "essaie d'effacer."],
  intro:
    "ARÈS Studio capture les mariages, les portraits et les instants rares avec une approche cinématographique, discrète et profondément humaine.",
  primary: { label: "Explorer la galerie", href: "/gallery" },
  secondary: { label: "Réserver une séance", href: "/booking" },
  image: "https://images.unsplash.com/photo-1519741497674-611481863552",
  imageAlt: "Un couple enlacé dans la lumière douce du soir",
};

export const manifesto = {
  eyebrow: "Derrière l'objectif",
  quote:
    "Je ne me contente pas de prendre des photos. Je préserve des atmosphères, des gestes, des silences — la tension invisible d'un instant juste avant qu'il disparaisse.",
  body: "Chaque commande commence par une conversation et se termine par un ensemble d'images pensées pour survivre au jour qu'elles racontent. De la lumière, de la retenue, de la patience. Rien de pressé, rien de bruyant.",
  image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
  imageAlt: "Portrait du photographe en lumière naturelle",
  cta: { label: "Découvrir l'histoire", href: "/about" },
};

export const featuredSection = {
  eyebrow: "Sélection",
  title: "Quelques histoires extraites de la collection.",
  cta: { label: "Voir toute la galerie", href: "/gallery" },
};

export const featured = [
  {
    title: "Mariage en Provence",
    category: "Mariage",
    location: "Gordes, France",
    year: "2024",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866",
    alt: "Mariés au coucher du soleil dans un vignoble de Provence",
  },
  {
    title: "Éditorial — Maison Noir",
    category: "Mode",
    location: "Paris, France",
    year: "2024",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4",
    alt: "Portrait de mode éditorial en lumière contrastée",
  },
  {
    title: "Séances portrait",
    category: "Portrait",
    location: "Studio, Paris",
    year: "2023",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1",
    alt: "Portrait studio d'une femme dans une ombre douce",
  },
] as const;

export const closing = {
  line: "Créons quelque chose qui traverse le temps.",
  sub: "Quelques séances seulement par saison. Parlez-moi de votre histoire.",
  cta: { label: "Réserver une séance", href: "/booking" },
};
