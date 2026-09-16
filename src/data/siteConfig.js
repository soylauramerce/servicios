// ============================================================================
// siteConfig.js
// Configuración general del sitio: textos de marca, contacto y ubicación.
// Edita este archivo para actualizar WhatsApp, Instagram, dirección, etc.
// No requiere conocimientos técnicos: solo cambia los valores entre comillas.
// ============================================================================

export const siteConfig = {
  brand: {
    name: "Merce",
    tagline: "Maquilladora profesional",
    location: "Armenia, Quindío",
    locationDetail: "Zona norte",
  },

  whatsappNumber: "573219523939",

  instagramHandle: "makeup.merce04",

  whatsappMessages: {
    general:
      "Hola Merce 💕 Quiero reservar una cita de maquillaje. Vi tus servicios en la web y quisiera consultar disponibilidad.",
    novias:
      "Hola Merce 💕 Estoy interesada en tu servicio de maquillaje para novia. Quisiera conocer disponibilidad y cotización para mi fecha.",
    automaquillaje:
      "Hola Merce 💕 Estoy interesada en el Taller de Automaquillaje 1:1 y quisiera conocer disponibilidad.",
    quince:
      "Hola Merce 💕 Quiero consultar disponibilidad para maquillaje de quinceañera.",
    grados:
      "Hola Merce 💕 Quiero reservar mi maquillaje de grado. ¿Me cuentas disponibilidad?",
  },

  seo: {
    title: "Merce | Maquilladora Profesional en Armenia, Quindío",
    description:
      "Maquillaje profesional en Armenia, Quindío. Maquillaje social, novias, quinceañeras, grados y talleres de automaquillaje 1:1.",
  },
};

export function buildWhatsappUrl(message) {
  const base = "https://wa.me/";
  const number = siteConfig.whatsappNumber;
  const text = encodeURIComponent(message);
  return `${base}${number}?text=${text}`;
}
