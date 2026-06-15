export const booking = {
  header: {
    eyebrow: "Réserver",
    title: "Réserver une séance",
    intro:
      "Premier échange gratuit de 15 minutes pour cadrer votre projet. Réponse sous 24 h. Un acompte de 30 % bloque la date.",
  },
  reassure:
    "Vous n'avez pas besoin d'avoir un brief parfait. Envoyez simplement quelques détails — la date approximative, le type de séance, ce que vous avez en tête — et je vous réponds avec une proposition claire.",
  afterSend:
    "Après l'envoi, je reviens vers vous sous 24 h pour caler un appel de 15 minutes. On affine ensemble, je vous envoie un devis, et un acompte de 30 % bloque la date. Aucun engagement avant cet échange.",
  practical: [
    { label: "Disponibilité", value: "Normandie, Paris, et partout en France sur demande" },
    { label: "Délai de livraison", value: "10 à 21 jours selon la prestation" },
    { label: "Acompte", value: "30 % à la réservation, solde après la séance" },
    { label: "Déplacement", value: "Inclus en Normandie ; frais au réel au-delà" },
    { label: "Premier échange", value: "Gratuit, 15 minutes, sans engagement" },
    { label: "Réponse", value: "Sous 24 h, du lundi au samedi" },
  ],
  packages: [
    {
      name: "Séance",
      price: "à partir de 299 €",
      tagline: "Portrait, couple ou famille.",
      features: [
        "1 h de séance, 1 lieu",
        "20 à 30 photos retouchées",
        "Galerie privée en ligne incluse",
        "Livrée sous 10 jours",
        "Fichiers haute définition",
      ],
      featured: false,
    },
    {
      name: "Demi-journée",
      price: "à partir de 599 €",
      tagline: "Événement, baptême, petit mariage.",
      features: [
        "Jusqu'à 4 h de présence",
        "80 à 120 photos retouchées",
        "Galerie privée + sélection imprimable",
        "Livrée sous 2 semaines",
        "Déplacement inclus en Normandie",
      ],
      featured: true,
    },
    {
      name: "Mariage",
      price: "à partir de 999 €",
      tagline: "Couverture complète de la journée.",
      features: [
        "Présence sur la journée entière",
        "300 à 500 photos retouchées",
        "Galerie privée + album sur demande",
        "Livrée sous 3 semaines",
        "Rendez-vous de préparation inclus",
      ],
      featured: false,
    },
  ],
  services: [
    "Mariage",
    "Portrait",
    "Couple",
    "Famille",
    "Événement",
    "Corporate",
    "Autre",
  ],
  budgets: ["Moins de 500 €", "500 € – 1 000 €", "1 000 € – 2 500 €", "2 500 € et plus"],
  faq: [
    {
      q: "Comment réserver ?",
      a: "On commence par un appel gratuit de 15 minutes. Si on est sur la même longueur d'onde, je vous envoie un devis ; un acompte de 30 % bloque la date. Le solde se règle après la séance.",
    },
    {
      q: "Vous déplacez-vous ?",
      a: "Oui. Le déplacement est inclus en Normandie. Pour Paris et le reste de la France, les frais sont précisés au réel dans le devis, sans marge cachée.",
    },
    {
      q: "Sous combien de temps je reçois mes photos ?",
      a: "Entre 10 et 21 jours selon la prestation. Pour un portrait, comptez une dizaine de jours ; pour un mariage, trois semaines. Vous recevez un premier aperçu sous 72 h.",
    },
    {
      q: "Comment les photos sont-elles livrées ?",
      a: "Dans une galerie privée en ligne, protégée par un accès personnel. Vous téléchargez les fichiers en haute définition, optimisés pour l'impression comme pour le partage.",
    },
    {
      q: "Est-ce que je peux imprimer les photos ?",
      a: "Oui, librement, pour un usage personnel. Les fichiers sont livrés en pleine résolution. Je peux aussi m'occuper de tirages et d'albums sur demande.",
    },
    {
      q: "Combien de temps à l'avance faut-il réserver ?",
      a: "Pour un mariage, idéalement 6 à 12 mois à l'avance. Pour un portrait ou une séance couple, deux à trois semaines suffisent le plus souvent.",
    },
  ],
};
