const U = "https://images.unsplash.com/";

export type Story = {
  slug: string;
  title: string;
  category: string;
  location: string;
  date: string;
  photos: number;
  cover: string;
  coverAlt: string;
  excerpt: string;
  intro: string;
  paragraphs: string[];
  images: { src: string; alt: string }[];
};

export const stories: Story[] = [
  {
    slug: "mariage-en-provence",
    title: "Un mariage en Provence",
    category: "Mariage",
    location: "Gordes, Provence",
    date: "Juin 2024",
    photos: 640,
    cover: U + "photo-1606800052052-a08af7148866",
    coverAlt: "Mariés dans un vignoble de Provence au coucher du soleil",
    excerpt:
      "Deux jours, une bastide de pierre, et la lumière du Sud qui fait tout le travail.",
    intro:
      "Camille et Antoine ne voulaient pas d'un mariage qui ressemble à un autre. Ils voulaient une journée vraie, sans chorégraphie, où les photographies seraient le seul témoin de ce qui s'est réellement passé.",
    paragraphs: [
      "Nous avons commencé bien avant la cérémonie, dans le calme des préparatifs. C'est souvent là que tout se joue : les mains qui tremblent un peu, les regards échangés, le silence avant le grand saut. Rien de tout cela ne se rejoue. Il faut être là, exactement au bon moment, sans jamais s'imposer.",
      "La lumière de Provence en juin est un cadeau et un piège : magnifique en fin de journée, écrasante à midi. Toute la séance a été pensée autour d'elle, pour que chaque image porte cette chaleur dorée sans jamais perdre les visages.",
      "Au final, plus de six cents images, dont une centaine retenues. Pas une mise en scène : un récit. Celui d'une journée que Camille et Antoine pourront rouvrir dans trente ans, intacte.",
    ],
    images: [
      { src: U + "photo-1519741497674-611481863552", alt: "Couple enlacé dans la lumière dorée" },
      { src: U + "photo-1465495976277-4387d4b0b4c6", alt: "Détail des alliances" },
      { src: U + "photo-1591604466107-ec97de577aff", alt: "Mariés marchant côte à côte" },
    ],
  },
  {
    slug: "portraits-en-lumiere-naturelle",
    title: "Portraits en lumière naturelle",
    category: "Portrait",
    location: "Paris",
    date: "Mars 2024",
    photos: 120,
    cover: U + "photo-1524504388940-b1c1722653e1",
    coverAlt: "Portrait d'une femme dans une ombre douce",
    excerpt:
      "Une série de portraits sans artifice, où seule compte la présence de la personne.",
    intro:
      "Pas de studio, pas de flash, pas de décor. Juste une fenêtre, une heure de la journée, et le temps de laisser quelqu'un redevenir lui-même devant l'objectif.",
    paragraphs: [
      "La plupart des gens détestent être pris en photo. Non par timidité, mais parce qu'ils ne se reconnaissent pas. Mon travail consiste à attendre le moment où le masque tombe — généralement après vingt minutes, quand on a cessé de penser à l'appareil.",
      "La lumière naturelle impose une discipline : on ne la contrôle pas, on s'y adapte. Cette contrainte est exactement ce qui donne aux images leur vérité. Aucune ne pourrait être reproduite à l'identique.",
    ],
    images: [
      { src: U + "photo-1500648767791-00dcc994a43e", alt: "Portrait d'un homme en lumière naturelle" },
      { src: U + "photo-1463453091185-61582044d556", alt: "Portrait de profil contrasté" },
      { src: U + "photo-1521119989659-a83eee488004", alt: "Portrait introspectif" },
    ],
  },
  {
    slug: "maison-noir-editorial",
    title: "Maison Noir — éditorial",
    category: "Mode",
    location: "Paris",
    date: "Septembre 2023",
    photos: 80,
    cover: U + "photo-1492691527719-9d1e07e534b4",
    coverAlt: "Portrait de mode éditorial en lumière contrastée",
    excerpt:
      "Une commande de mode pensée comme un court-métrage : une atmosphère, un personnage, une tension.",
    intro:
      "Pour la collection Maison Noir, la marque ne voulait pas de catalogue. Elle voulait une image qui raconte une intention. Nous avons construit la série comme une scène de cinéma, autour d'une seule idée : l'élégance qui retient.",
    paragraphs: [
      "Tout part du contraste. Le noir profond de la collection appelait une lumière sculptée, presque théâtrale, où chaque pli du tissu devient une ligne de force. Nous avons travaillé en lumière dure, assumée, à contre-courant de la mode du flou et de la douceur.",
      "Quatre-vingts images, huit retenues. Une campagne n'a pas besoin de quantité : elle a besoin d'une image dont on se souvient. C'est tout l'enjeu d'un éditorial — viser juste, une seule fois.",
    ],
    images: [
      { src: U + "photo-1469334031218-e382a71b716b", alt: "Silhouette de mode en mouvement" },
      { src: U + "photo-1485968579580-b6d095142e6e", alt: "Image éditoriale de mode" },
      { src: U + "photo-1483985988355-763728e1935b", alt: "Détail de mode contrasté" },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
