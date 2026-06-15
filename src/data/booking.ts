export const booking = {
  header: {
    eyebrow: "Réserver",
    title: "Réservez votre séance",
    intro:
      "Quelques séances seulement chaque saison, pour garantir le même soin à chaque projet. Parlez-moi de votre histoire — je reviens vers vous sous 48 heures.",
  },
  packages: [
    {
      name: "Essentiel",
      price: "299 €",
      tagline: "Pour une séance courte et précise.",
      features: [
        "1 heure de séance",
        "1 lieu",
        "20 photos retouchées",
        "Galerie privée en ligne",
        "Livraison sous 3 semaines",
      ],
      featured: false,
    },
    {
      name: "Signature",
      price: "599 €",
      tagline: "L'équilibre idéal pour la plupart des projets.",
      features: [
        "3 heures de séance",
        "2 lieux",
        "60 photos retouchées",
        "Galerie privée en ligne",
        "10 tirages d'art inclus",
        "Livraison sous 2 semaines",
      ],
      featured: true,
    },
    {
      name: "Prestige",
      price: "999 €",
      tagline: "L'expérience complète, sans compromis.",
      features: [
        "Journée complète",
        "Lieux illimités",
        "150 photos retouchées",
        "Galerie privée + album imprimé",
        "Tirages d'art en coffret",
        "Livraison prioritaire",
      ],
      featured: false,
    },
  ],
  services: [
    "Mariage",
    "Portrait",
    "Famille",
    "Événement",
    "Mode",
    "Corporate",
    "Autre",
  ],
  budgets: ["Moins de 500 €", "500 € – 1 000 €", "1 000 € – 2 500 €", "2 500 € et plus"],
  faq: [
    {
      q: "Combien de temps à l'avance faut-il réserver ?",
      a: "Pour un mariage, comptez 6 à 12 mois. Pour un portrait ou une séance courte, deux à trois semaines suffisent généralement.",
    },
    {
      q: "Vous déplacez-vous ?",
      a: "Oui. Je travaille dans toute la France, en Belgique et en Suisse, et je me déplace à l'étranger sur demande. Les frais de déplacement sont précisés dans le devis.",
    },
    {
      q: "Sous combien de temps je reçois ma galerie ?",
      a: "Sous trois semaines en moyenne, deux semaines pour les formules Signature et Prestige. Vous recevez un aperçu sous 72 heures.",
    },
    {
      q: "Puis-je avoir une galerie privée ?",
      a: "Oui. Chaque projet est livré dans une galerie privée en ligne, protégée par un accès personnel, que vous pouvez partager avec vos proches.",
    },
    {
      q: "Proposez-vous des formules mariage ?",
      a: "Oui, du reportage de quelques heures à la couverture complète sur deux jours. On construit la formule ensemble, selon votre journée.",
    },
    {
      q: "Comment se passe la réservation ?",
      a: "Vous remplissez le formulaire ci-dessus, on échange lors d'un premier appel, puis un acompte confirme la date. Tout est simple et sans pression.",
    },
  ],
};
