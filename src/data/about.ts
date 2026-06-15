const U = "https://images.unsplash.com/";

export const about = {
  header: {
    eyebrow: "Derrière l'objectif",
    title: "Le regard d'ARÈS",
    intro:
      "Photographe indépendant depuis dix ans, je travaille entre la France, la Belgique et la Suisse. Mariages, portraits, mode et événements : à chaque fois, la même exigence — faire des images qui survivent au jour où elles ont été prises.",
  },
  portrait: {
    image: U + "photo-1506794778202-cad84cf45f1d",
    alt: "Portrait du photographe en lumière naturelle",
  },
  philosophy: {
    quote:
      "Une photographie réussie ne se remarque pas. Elle se ressent, des années plus tard, quand on rouvre un tirage et que tout revient d'un coup.",
    body: [
      "Je ne crois pas aux séances chronométrées ni aux poses imposées. Je crois au temps qu'on accorde aux gens pour qu'ils oublient l'appareil. C'est dans cet oubli que naissent les seules images qui comptent.",
      "Mon approche est cinématographique : je travaille la lumière, le cadre et le rythme comme un réalisateur travaille une scène. Chaque commande est unique, pensée pour vous, jamais dupliquée d'un client à l'autre.",
    ],
  },
  stats: [
    { value: "+150", label: "séances réalisées" },
    { value: "10 ans", label: "d'expérience" },
    { value: "3 pays", label: "France · Belgique · Suisse" },
    { value: "100 %", label: "sur-mesure" },
  ],
  process: {
    eyebrow: "L'expérience client",
    title: "De la première conversation au tirage final.",
    steps: [
      {
        n: "01",
        title: "Consultation",
        text: "On échange sur votre projet, vos attentes et votre histoire. Sans engagement, jusqu'à ce que tout soit clair.",
      },
      {
        n: "02",
        title: "Préparation",
        text: "Repérages, moodboard, planning précis. Le jour J, plus rien n'est laissé au hasard.",
      },
      {
        n: "03",
        title: "La séance",
        text: "Discrète, fluide, sans temps mort. Je m'efface pour laisser les vrais moments arriver.",
      },
      {
        n: "04",
        title: "Post-production",
        text: "Sélection rigoureuse et retouche maîtrisée, fidèle à la lumière d'origine. Jamais de filtre passe-partout.",
      },
      {
        n: "05",
        title: "Livraison",
        text: "Une galerie privée en ligne sous trois semaines, et des tirages d'art en option.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Ils ont fait confiance",
    items: [
      {
        name: "Camille & Antoine",
        role: "Mariage, Provence",
        rating: 5,
        message:
          "On a retrouvé notre journée exactement comme on l'a vécue. Pas posée, pas figée — vraie. Ces photos, on les regardera toute notre vie.",
      },
      {
        name: "Léa Moreau",
        role: "Portrait professionnel",
        rating: 5,
        message:
          "Je déteste être prise en photo. C'est la première fois que je me reconnais vraiment. Un vrai talent pour mettre les gens à l'aise.",
      },
      {
        name: "Maison Noir",
        role: "Campagne mode",
        rating: 5,
        message:
          "Un regard d'auteur, une rigueur de pro et une image qui a porté toute la collection. On retravaillera ensemble, sans hésiter.",
      },
    ],
  },
};
