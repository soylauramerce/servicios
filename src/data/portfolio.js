// ============================================================================
// portfolio.js
// Galería de portafolio. Cada objeto es una fotografía.
// Para reemplazar una imagen real: cambia "image" por la ruta del archivo
// definitivo (colócalo dentro de /public/images/portfolio/) y ajusta "alt".
// "category" debe ser una de: social, novias, quinceaneras, grados, ocasiones
// "size" controla la proporción en el grid masonry: "tall" | "wide" | "square"
// ============================================================================

export const portfolioCategories = [
  { id: "todos", label: "Todos" },
  { id: "social", label: "Social" },
  { id: "novias", label: "Novias" },
  { id: "quinceaneras", label: "Quinceañeras" },
  { id: "grados", label: "Grados" },
  { id: "ocasiones", label: "Ocasiones especiales" },
];

export const portfolioItems = [
  {
    id: "social-01",
    category: "social",
    image: "/images/portfolio/social-01.jpg",
    alt: "Maquillaje social — look editorial",
    size: "tall",
  },
  {
    id: "novias-01",
    category: "novias",
    image: "/images/portfolio/novias-01.svg",
    alt: "Maquillaje de novia — look natural luminoso",
    size: "tall",
  },
  {
    id: "quince-01",
    category: "quinceaneras",
    image: "/images/portfolio/quince-01.svg",
    alt: "Maquillaje de quinceañera",
    size: "tall",
  },
  {
    id: "social-02",
    category: "social",
    image: "/images/portfolio/social-02.svg",
    alt: "Maquillaje social — noche",
    size: "wide",
  },
  {
    id: "grado-01",
    category: "grados",
    image: "/images/portfolio/grado-01.svg",
    alt: "Maquillaje de grado",
    size: "tall",
  },
  {
    id: "ocasion-01",
    category: "ocasiones",
    image: "/images/portfolio/ocasion-01.svg",
    alt: "Maquillaje para ocasión especial",
    size: "tall",
  },
  {
    id: "novias-02",
    category: "novias",
    image: "/images/portfolio/novias-02.svg",
    alt: "Maquillaje de novia — detalle de piel",
    size: "square",
  },
  {
    id: "social-03",
    category: "social",
    image: "/images/portfolio/social-03.svg",
    alt: "Maquillaje social — look de fiesta",
    size: "tall",
  },
  {
    id: "quince-02",
    category: "quinceaneras",
    image: "/images/portfolio/quince-02.svg",
    alt: "Maquillaje de quinceañera — detalle",
    size: "square",
  },
  {
    id: "ocasion-02",
    category: "ocasiones",
    image: "/images/portfolio/ocasion-02.svg",
    alt: "Maquillaje para cena especial",
    size: "wide",
  },
  {
    id: "grado-02",
    category: "grados",
    image: "/images/portfolio/grado-02.svg",
    alt: "Maquillaje de grado — sesión de fotos",
    size: "wide",
  },
  {
    id: "novias-03",
    category: "novias",
    image: "/images/portfolio/novias-03.svg",
    alt: "Maquillaje de novia — preparación",
    size: "wide",
  },
  {
    id: "social-04",
    category: "social",
    image: "/images/portfolio/social-04.svg",
    alt: "Maquillaje social — luz natural",
    size: "square",
  },
  {
    id: "ocasion-03",
    category: "ocasiones",
    image: "/images/portfolio/ocasion-03.svg",
    alt: "Maquillaje para celebración",
    size: "square",
  },
];
