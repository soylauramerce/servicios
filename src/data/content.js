// ============================================================================
// content.js
// Textos narrativos de las secciones (storytelling, estudio, novias, sobre
// Merce, proceso de reserva). Edítalos aquí sin tocar los componentes.
// Los campos marcados con TODO son datos reales que Merce debe confirmar:
// no se inventan años de experiencia, cifras ni certificaciones.
// ============================================================================

export const hero = {
  kicker: "Beauty Studio · Armenia",
  headline: "El maquillaje no cambia quién eres.",
  headlineAccent: "Revela cómo quieres sentirte.",
  sub: "Maquillaje profesional en Armenia, Quindío.",
  services: "Social · Novias · Grados · Ocasiones especiales · Automaquillaje",
  ctaPrimary: "Reservar mi cita",
  ctaSecondary: "Ver portafolio",
};

export const storytelling = {
  label: "01 · Filosofía",
  title: "No se trata solo de maquillarte.",
  paragraphs: [
    "Hay días en los que no quieres verte diferente. Quieres verte como tú, pero en tu mejor versión.",
    "Por eso cada maquillaje comienza mucho antes de abrir una brocha: comienza entendiendo quién eres, qué quieres proyectar y cómo quieres sentirte cuando te mires al espejo.",
    "El maquillaje, bien hecho, no transforma a la persona. Potencia sus rasgos, su personalidad y su seguridad. Ese es el trabajo.",
  ],
  bigLine1: "No es solo maquillaje.",
  bigLine2: "Es cómo quieres recordarte.",
};

export const servicesIntro = {
  label: "02 · Servicios",
  title: "Elige cómo quieres sentirte.",
  sub: "Cada rostro y cada ocasión piden algo distinto. Estos son los espacios donde trabajamos juntas para llegar ahí.",
};

export const studioExperience = {
  label: "03 · El estudio",
  title: "Tu cita es más que una cita.",
  intro:
    "Creé este espacio para que puedas desconectarte, prepararte y disfrutar el momento antes de salir a celebrar. Tu experiencia comienza desde que entras al estudio.",
  addressLabel: "Estudio Merce",
  addressLine: "Armenia · Zona norte",
  note: "Un espacio pensado para ti. Todos los servicios se realizan en nuestro estudio privado en la zona norte de Armenia.",
  disclaimer: "Los servicios se realizan exclusivamente en el estudio. No se realizan domicilios.",
  benefits: [
    "Espacio preparado especialmente para maquillaje profesional",
    "Iluminación pensada para lograr el mejor acabado",
    "Ambiente tranquilo y cómodo para prepararte con calma",
    "Atención personalizada, una cita a la vez",
    "Productos y herramientas de uso profesional",
  ],
};

export const portfolioIntro = {
  label: "04 · Portafolio",
  title: "El resultado habla por sí solo.",
  sub: "Una muestra de looks reales, pensados para rostros reales.",
};

export const brides = {
  label: "05 · Novias",
  title: "Para el día que no se repite.",
  paragraphs: [
    "Tu boda no es una ocasión más. Y tu maquillaje tampoco debería sentirse así.",
    "Desde la preparación hasta el último vistazo al espejo, cada detalle está pensado para que te sientas segura, cómoda y completamente tú.",
    "Por eso el maquillaje de novia no tiene una tarifa fija: cada historia, cada vestido y cada fecha merecen una cotización pensada para ti.",
  ],
  cta: "Quiero cotizar mi maquillaje de novia",
};

export const selfMakeupIntro = {
  label: "06 · Automaquillaje",
  eyebrow: "Taller de Automaquillaje 1:1",
  title: "Aprende a maquillarte para ti.",
  before: "“Me maquillo, pero nunca siento que me queda bien.”",
  after: "“Ahora sé qué funciona para mi rostro, mi piel y mi estilo.”",
  audienceLabel: "¿Para quién es?",
};

export const about = {
  label: "07 · Sobre Merce",
  title: "El rostro cambia. La confianza también.",
  paragraphs: [
    "Para mí, maquillar no significa esconder. Significa observar.",
    "Entender los rasgos, la personalidad y la esencia de cada mujer para crear un maquillaje que tenga sentido para ella — no una máscara, sino una versión más nítida de quien ya es.",
    // TODO: Merce puede ampliar aquí su historia personal, formación o
    // filosofía de trabajo específica cuando quiera compartirla.
    "Cada rostro es distinto, y por eso cada maquillaje también lo es. Ese es el punto de partida de todo lo que hago en el estudio.",
  ],
  // TODO: agregar años de experiencia, formación o certificaciones cuando
  // Merce los confirme. Mientras tanto, se deja fuera para no inventar datos.
  signatureLine: "Merce",
  signatureRole: "Maquilladora profesional · Armenia, Quindío",
};

export const bookingProcess = {
  label: "08 · Reserva",
  title: "Así comienza tu experiencia.",
  steps: [
    {
      number: "01",
      title: "Elige tu servicio",
      description: "Social, novia, quinceañera, grado, ocasión especial o el taller de automaquillaje.",
    },
    {
      number: "02",
      title: "Escríbeme por WhatsApp",
      description: "Cuéntame la fecha y el tipo de servicio para consultar disponibilidad.",
    },
    {
      number: "03",
      title: "Reservamos tu fecha",
      description: "Confirmamos los detalles y dejamos tu cita agendada en el estudio.",
    },
    {
      number: "04",
      title: "Vienes al estudio",
      description: "Tú disfrutas el momento. Del maquillaje nos encargamos nosotras.",
    },
  ],
};

export const location = {
  label: "09 · Ubicación",
  title: "Encuéntrame en Armenia.",
  region: "Armenia · Quindío",
  zone: "Zona norte",
  disclaimer: "Los servicios se realizan exclusivamente en el estudio. No se realizan domicilios.",
};

export const finalCta = {
  title: "¿Lista para verte como te quieres sentir?",
  sub: "Ahora solo falta elegir la fecha.",
  ctaPrimary: "Reservar mi cita",
  ctaSecondary: "Escribir por WhatsApp",
};
