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
    slug: "mariage-civil-rouen",
    title: "Mariage civil à Rouen",
    category: "Mariage",
    location: "Rouen",
    date: "Mai 2024",
    photos: 320,
    cover: U + "photo-1591604466107-ec97de577aff",
    coverAlt: "Mariés sortant de la mairie",
    excerpt:
      "Une cérémonie civile, une trentaine d'invités, et un déjeuner dans la foulée. Simple, et c'est exactement ce qu'ils voulaient.",
    intro:
      "Julie et Marc ne voulaient pas d'un grand mariage. Juste la mairie, leurs proches, et un bon repas ensuite. Ils m'ont demandé des photos qui ressemblent à la journée : pas figées, pas trop posées.",
    paragraphs: [
      "On s'est vus une fois avant, pour caler le déroulé : l'heure de la cérémonie, le passage à la mairie, le déjeuner. Le jour J, je suis arrivé une demi-heure avant pour repérer la lumière dans la salle et prévoir la sortie.",
      "Pendant la cérémonie, je reste discret : pas de flash, je me déplace peu. Ce sont les regards et les sourires qui font les images, pas les mises en scène. La sortie de la mairie, on l'a juste laissée se faire — c'est souvent le meilleur moment.",
      "Au déjeuner, j'ai photographié au fil de la journée sans interrompre personne. Galerie livrée douze jours plus tard : 320 photos retenues, classées par moment, prêtes à partager avec la famille.",
    ],
    images: [
      { src: U + "photo-1606800052052-a08af7148866", alt: "Les mariés en extérieur" },
      { src: U + "photo-1465495976277-4387d4b0b4c6", alt: "Les alliances" },
      { src: U + "photo-1519741497674-611481863552", alt: "Premier slow des mariés" },
    ],
  },
  {
    slug: "portraits-entrepreneur-paris",
    title: "Portraits d'entrepreneur à Paris",
    category: "Portrait",
    location: "Paris",
    date: "Mars 2024",
    photos: 35,
    cover: U + "photo-1500648767791-00dcc994a43e",
    coverAlt: "Portrait professionnel d'un entrepreneur",
    excerpt:
      "Une heure, deux décors, des images utilisables tout de suite pour un site et les réseaux.",
    intro:
      "Thomas lançait son cabinet de conseil et avait besoin de photos pro : une pour son site, quelques-unes pour LinkedIn et la presse. Objectif clair, temps limité, résultat net.",
    paragraphs: [
      "On a tout fait en une heure, dans ses bureaux et juste devant l'immeuble. Pas de studio : la lumière naturelle suffit largement quand on sait où se placer. Je donne quelques indications simples — où regarder, quoi faire des mains — et on avance vite.",
      "Le but d'un portrait pro, c'est qu'on s'y reconnaisse. Pas un visage lissé et inexpressif. J'ai gardé une retouche légère : peau naturelle, contraste maîtrisé, rien d'artificiel.",
      "Livraison sous une semaine : 35 photos, dont une sélection au format carré et vertical pour les réseaux. Thomas avait son site à jour le lendemain.",
    ],
    images: [
      { src: U + "photo-1556761175-b413da4baf72", alt: "Portrait en entreprise" },
      { src: U + "photo-1600880292203-757bb62b4baf", alt: "Au travail" },
      { src: U + "photo-1463453091185-61582044d556", alt: "Portrait en extérieur" },
    ],
  },
  {
    slug: "seance-couple-bord-de-mer",
    title: "Séance couple en bord de mer",
    category: "Couple",
    location: "Étretat",
    date: "Juillet 2024",
    photos: 80,
    cover: U + "photo-1494774157365-9e04c6720e47",
    coverAlt: "Couple en bord de mer au coucher du soleil",
    excerpt:
      "Une séance d'une heure au coucher du soleil. Pas de pose imposée, juste eux deux et la lumière.",
    intro:
      "Léa et Sofiane voulaient des photos d'eux, sans occasion particulière. Juste garder une trace de ce moment de leur vie. On a choisi Étretat, en fin de journée, pour la lumière.",
    paragraphs: [
      "Je préviens toujours : les dix premières minutes sont les plus raides, on ne sait pas quoi faire de ses mains. C'est normal. Je leur donne de petites choses à faire — marcher, se parler, se rapprocher — et au bout d'un quart d'heure ils oublient l'appareil.",
      "À partir de là, tout est plus simple. Je tourne autour, je capte les vrais moments : un rire, un regard, une main qui se pose. La lumière de fin de journée fait le reste.",
      "Une heure de séance, 80 photos livrées sous deux semaines, dans une galerie privée qu'ils ont partagée avec leurs proches.",
    ],
    images: [
      { src: U + "photo-1516589178581-6cd7833ae3b2", alt: "Couple en balade" },
      { src: U + "photo-1518621736915-f3b1c41bfd00", alt: "Couple dans la lumière du soir" },
      { src: U + "photo-1519741497674-611481863552", alt: "Couple enlacé" },
    ],
  },
  {
    slug: "bapteme-familial-lyon",
    title: "Baptême familial à Lyon",
    category: "Famille",
    location: "Lyon",
    date: "Septembre 2023",
    photos: 160,
    cover: U + "photo-1476703993599-0035a21b17a9",
    coverAlt: "Moment de famille lors d'un baptême",
    excerpt:
      "Une cérémonie en petit comité, suivie d'un déjeuner de famille. Discret, je capte sans interrompre.",
    intro:
      "Pour le baptême de leur fille, la famille voulait des photos qui restent, sans transformer la journée en séance photo. Mon rôle : être là, presque invisible.",
    paragraphs: [
      "Ce genre de journée se photographie en reportage. Je ne demande à personne de poser : je suis les moments, l'église, les regards des grands-parents, les enfants qui courent. On ne refait pas ces instants, il faut juste être au bon endroit.",
      "Au déjeuner, même approche. Quelques photos de groupe demandées par la famille, et tout le reste sur le vif. C'est ce mélange qui rend un album vivant des années plus tard.",
      "160 photos livrées en trois semaines, classées par moment, avec une sélection prête à imprimer pour les albums de famille.",
    ],
    images: [
      { src: U + "photo-1511895426328-dc8714191300", alt: "Famille réunie" },
      { src: U + "photo-1518349619113-03114f06ac3a", alt: "Portrait d'enfant" },
      { src: U + "photo-1490578474895-699cd4e2cf59", alt: "Moment de famille" },
    ],
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
