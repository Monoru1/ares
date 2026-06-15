const U = "https://images.unsplash.com/";

export const hero = {
  eyebrow: "Elias Moreau — Photographe",
  titleLines: ["Je photographie les gens", "comme ils sont."],
  intro:
    "Pas comme ils essaient de poser. Mariages, portraits et événements — en Normandie, à Paris et partout en France sur demande.",
  primary: { label: "Voir la galerie", href: "/gallery" },
  secondary: { label: "Réserver une séance", href: "/booking" },
  image: U + "photo-1519741497674-611481863552",
  imageAlt: "Un couple lors d'un mariage, en lumière naturelle",
};

export const approach = {
  eyebrow: "Ma façon de travailler",
  title: "Des images simples, fortes, livrées proprement.",
  intro:
    "Pas de mise en scène inutile. La bonne lumière, le bon moment, et une vraie attention aux détails. Avant la séance on discute, pendant je guide quand il faut, après vous recevez une galerie claire, prête à partager.",
  points: [
    {
      title: "Aucune pose forcée",
      text: "Je guide juste assez pour que vous restiez vous-même. Le reste du temps, je me fais oublier.",
    },
    {
      title: "Livré sous 10 à 21 jours",
      text: "Galerie privée en ligne, optimisée pour l'impression et le partage. Pas de mois d'attente.",
    },
    {
      title: "Un seul interlocuteur",
      text: "De la première discussion à la livraison, c'est moi du début à la fin. Jamais de sous-traitance.",
    },
  ],
};

export const featuredSection = {
  eyebrow: "Aperçu",
  title: "Quelques images récentes.",
  cta: { label: "Voir toute la galerie", href: "/gallery" },
};

export const featured = [
  {
    title: "Cérémonie en extérieur",
    category: "Mariage",
    location: "Honfleur",
    year: "2024",
    image: U + "photo-1606800052052-a08af7148866",
    alt: "Mariés lors d'une cérémonie en extérieur",
  },
  {
    title: "Portrait d'entrepreneur",
    category: "Portrait",
    location: "Paris",
    year: "2024",
    image: U + "photo-1500648767791-00dcc994a43e",
    alt: "Portrait professionnel d'un homme en lumière naturelle",
  },
  {
    title: "Séance couple",
    category: "Couple",
    location: "Étretat",
    year: "2024",
    image: U + "photo-1494774157365-9e04c6720e47",
    alt: "Couple en bord de mer en fin de journée",
  },
];

export const storiesSection = {
  eyebrow: "Reportages",
  title: "Quelques séances récentes, racontées.",
  cta: { label: "Tous les reportages", href: "/stories" },
};

export const experience = {
  eyebrow: "Comment ça se passe",
  title: "Simple, du premier message à la livraison.",
  steps: [
    { n: "01", title: "On échange", text: "15 minutes, gratuit, pour cadrer votre projet." },
    { n: "02", title: "Devis & acompte", text: "Un devis clair. 30 % pour bloquer la date." },
    { n: "03", title: "La séance", text: "Détendue, sans temps mort. Je m'occupe du reste." },
    { n: "04", title: "Livraison", text: "Galerie privée en ligne sous 10 à 21 jours." },
  ],
  cta: { label: "Voir le détail et les tarifs", href: "/booking" },
};

export const closing = {
  line: "On en parle ?",
  sub: "Premier échange gratuit de 15 minutes. Réponse sous 24 h.",
  cta: { label: "Réserver une séance", href: "/booking" },
};
