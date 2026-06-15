const U = "https://images.unsplash.com/";

export const about = {
  header: {
    eyebrow: "Le photographe",
    title: "Elias Moreau",
    intro:
      "Je suis photographe depuis douze ans. J'ai commencé par les mariages, puis le portrait et l'événement. Aujourd'hui je travaille en Normandie, à Paris et partout en France sur demande.",
  },
  portrait: {
    image: U + "photo-1507003211169-0a1dd7228f2d",
    alt: "Elias Moreau, photographe",
  },
  philosophy: {
    quote: "Un bon reportage ne se voit pas seulement. Il se reconnaît.",
    body: [
      "Je ne crois pas aux poses figées ni aux séances chronométrées à la minute. Je préfère discuter avant pour comprendre ce que vous voulez vraiment, puis vous laisser tranquille pendant la séance. Je guide quand il faut, je me fais oublier le reste du temps.",
      "Ce que j'aime photographier, ce sont les vrais moments : un regard entre deux personnes, un rire qui échappe, une main qui se pose. Le reste — la lumière, le cadre, le timing — c'est mon métier, et c'est là que je passe mon temps.",
    ],
  },
  refuses: [
    "Les poses forcées et les sourires de commande",
    "Les retouches qui changent les visages",
    "Les séances impersonnelles à la chaîne",
  ],
  promises: [
    "Des tarifs et des délais clairs, dès le départ",
    "Du calme et de la direction le jour J",
    "Une galerie privée livrée sous 10 à 21 jours",
    "Un premier échange gratuit de 15 minutes",
  ],
  watching: {
    eyebrow: "Pendant une séance",
    title: "Ce que je regarde, là où d'autres ne regardent pas.",
    intro:
      "Une bonne photo se joue dans les détails que les gens oublient. Voilà ce qui retient mon attention quand je travaille.",
    items: [
      { label: "La lumière", text: "D'où elle vient, comment elle tombe sur un visage, le moment où elle est juste." },
      { label: "Les mains", text: "Elles trahissent tout — la tension, la tendresse, l'hésitation. Je les surveille toujours." },
      { label: "Les silences", text: "Les secondes entre deux phrases, quand le masque tombe. Souvent les meilleures images." },
      { label: "Les regards", text: "Entre deux personnes, ou vers le vide. Un regard juste vaut mille poses." },
      { label: "Les détails", text: "Une alliance, un pli de robe, une larme retenue. Ce qu'on ne revoit qu'en photo." },
    ],
  },
  stats: [
    { value: "12 ans", label: "d'expérience" },
    { value: "200+", label: "séances réalisées" },
    { value: "Normandie", label: "Paris · partout en France" },
    { value: "24 h", label: "délai de réponse" },
  ],
  process: {
    eyebrow: "Comment ça se passe",
    title: "Du premier message à la livraison.",
    steps: [
      {
        n: "01",
        title: "On échange",
        text: "Un appel de 15 minutes, gratuit, pour comprendre votre projet et répondre à vos questions.",
      },
      {
        n: "02",
        title: "Devis & réservation",
        text: "Un devis clair, sans surprise. Un acompte de 30 % bloque la date.",
      },
      {
        n: "03",
        title: "La séance",
        text: "Détendue, sans temps mort. Je guide quand il faut et je m'occupe du reste.",
      },
      {
        n: "04",
        title: "Tri & retouche",
        text: "Je sélectionne, je retouche avec mesure. Jamais de filtre passe-partout.",
      },
      {
        n: "05",
        title: "Livraison",
        text: "Galerie privée en ligne sous 10 à 21 jours, optimisée pour l'impression et le partage.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Ce qu'ils en disent",
    items: [
      {
        name: "Julie & Marc",
        role: "Mariage civil, Rouen",
        rating: 5,
        message:
          "On voulait des photos qui nous ressemblent, pas un mariage de catalogue. C'est exactement ce qu'on a eu. Discret toute la journée, et livré en moins de deux semaines.",
      },
      {
        name: "Thomas R.",
        role: "Portrait professionnel, Paris",
        rating: 5,
        message:
          "Une heure, et j'avais tout ce qu'il me fallait pour mon site et LinkedIn. Des photos pro où je me reconnais vraiment. Efficace et clair du début à la fin.",
      },
      {
        name: "Léa & Sofiane",
        role: "Séance couple, Étretat",
        rating: 5,
        message:
          "On était mal à l'aise au début, et au bout de dix minutes on avait oublié l'appareil. Les photos sont naturelles, on adore. Merci pour le calme et la patience.",
      },
    ],
  },
};
