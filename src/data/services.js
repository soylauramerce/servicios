// ============================================================================
// services.js
// Servicios, precios y textos. Edita precios y descripciones aquí.
// "price" acepta texto libre: usa "Cotización personalizada" cuando no haya
// tarifa fija. Los montos van en pesos colombianos con formato "$150.000 COP".
// ============================================================================

export const services = [
  {
    id: "social",
    eyebrow: "01 · Para brillar sin dejar de ser tú",
    name: "Maquillaje Social",
    description:
      "Para esas ocasiones en las que quieres sentirte increíble sin dejar de sentirte tú: cenas, fiestas, cumpleaños, sesiones de fotos o esa invitación que ya tienes marcada en el calendario.",
    price: "$150.000 COP",
    priceNote: null,
    image: "/images/services/social.svg",
    imageAlt: "Maquillaje social realizado por Merce",
    cta: "Quiero reservar",
    whatsappKey: "general",
  },
  {
    id: "quinceanera",
    eyebrow: "02 · Un recuerdo que dura para siempre",
    name: "Quinceañeras",
    description:
      "Tu quinceañera pasa una vez. Tu maquillaje tiene que estar a la altura de ese recuerdo: natural, luminoso y perfecto en cada fotografía.",
    price: "Con prueba — $600.000 COP",
    priceNote: "Sin prueba — $480.000 COP",
    image: "/images/services/quinceanera.svg",
    imageAlt: "Maquillaje de quinceañera realizado por Merce",
    cta: "Quiero reservar",
    whatsappKey: "quince",
  },
  {
    id: "novias",
    eyebrow: "03 · El día que no se repite",
    name: "Novias",
    description:
      "El día que soñaste merece una experiencia diseñada alrededor de ti. Porque tu maquillaje de novia no debería sentirse como un maquillaje más.",
    price: "Cotización personalizada",
    priceNote: null,
    image: "/images/services/novias.svg",
    imageAlt: "Maquillaje de novia realizado por Merce",
    cta: "Quiero cotizar mi maquillaje de novia",
    whatsappKey: "novias",
    featured: true,
  },
  {
    id: "grados",
    eyebrow: "04 · Un capítulo que merece celebrarse",
    name: "Grados",
    description:
      "Un capítulo termina. Uno nuevo comienza. Celebra cómo te ves y, sobre todo, cómo te sientes: en el escenario, en las fotos y en cada abrazo después.",
    price: "Cotiza tu fecha",
    priceNote: null,
    image: "/images/services/grados.svg",
    imageAlt: "Maquillaje de grado realizado por Merce",
    cta: "Cotizar mi fecha",
    whatsappKey: "grados",
  },
  {
    id: "ocasiones",
    eyebrow: "05 · Porque hoy también cuenta",
    name: "Ocasiones especiales",
    description:
      "Porque no necesitas una razón enorme para sentirte espectacular. Cumpleaños, cenas, sesiones de fotos, celebraciones o simplemente un día para ti.",
    price: "Cotiza tu fecha",
    priceNote: null,
    image: "/images/services/ocasiones.svg",
    imageAlt: "Maquillaje para ocasión especial realizado por Merce",
    cta: "Quiero reservar",
    whatsappKey: "general",
  },
];

export const selfMakeupWorkshop = {
  name: "Taller de Automaquillaje 1:1",
  headline: "Aprende a maquillarte para ti.",
  description:
    "Un espacio personalizado, uno a uno, diseñado para que aprendas a resaltar tu belleza con las técnicas correctas para tu piel, tus rasgos y tu estilo de vida. No es una clase genérica: es una asesoría hecha a tu medida.",
  learnings: [
    "Preparación correcta de la piel antes de maquillar",
    "Aplicación de producto según tu tipo de piel y rasgos",
    "Técnicas para un maquillaje natural de uso diario",
    "Técnicas para un maquillaje más elaborado en ocasiones especiales",
    "Cómo usar correctamente los productos que ya tienes",
    "Cómo potenciar tus propios rasgos, sin esconderlos",
  ],
  audience: [
    "Compras productos y no sabes cómo usarlos.",
    "Sientes que nunca logras el acabado que quieres.",
    "Quieres aprender a maquillarte para el día a día.",
    "Quieres sentirte más segura maquillándote sola.",
    "Quieres conocer qué funciona realmente para tus rasgos.",
  ],
  price: "$300.000 COP",
  priceWithShopping: "$380.000 COP",
  priceWithShoppingNote:
    "Incluye acompañamiento y asesoría para elegir los productos correctos para ti.",
  cta: "Quiero aprender",
  whatsappKey: "automaquillaje",
  image: "/images/selfmakeup/selfmakeup-01.svg",
  imageAlt: "Taller de automaquillaje 1:1 con Merce",
  imageDetail: "/images/selfmakeup/selfmakeup-02.svg",
  imageDetailAlt: "Detalle del taller de automaquillaje 1:1",
};
