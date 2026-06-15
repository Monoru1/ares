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

export const showcase = {
  line: "Quelques images récentes.",
  cta: { label: "Voir toute la galerie", href: "/gallery" },
  big: {
    image: U + "photo-1606800052052-a08af7148866",
    alt: "Mariés lors d'une cérémonie en extérieur",
    caption: "Cérémonie en extérieur — Honfleur",
  },
  tall: [
    {
      image: U + "photo-1500648767791-00dcc994a43e",
      alt: "Portrait d'entrepreneur en lumière naturelle",
      caption: "Portrait — Paris",
    },
    {
      image: U + "photo-1494774157365-9e04c6720e47",
      alt: "Couple en bord de mer",
      caption: "Séance couple — Étretat",
    },
  ],
};

export const whatYouSee = {
  eyebrow: "Ce que vous voyez ici",
  title: "Des gens, pas des poses.",
  intro:
    "Des mariages, des portraits, des familles et des événements. Des images prises sans forcer personne — juste la bonne lumière et le bon moment.",
  items: [
    "Mariages & cérémonies",
    "Portraits & entrepreneurs",
    "Couples",
    "Familles & baptêmes",
    "Événements & soirées",
    "Corporate & équipes",
  ],
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

export const fullBleed = {
  image: U + "photo-1519741497674-611481863552",
  alt: "Un instant de mariage capté en lumière naturelle",
  line: "Prenez le temps de regarder. Une bonne image ne crie pas toujours.",
};

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
