// ─────────────────────────────────────────────────────────────
// TEXTOS DE LAS PÁGINAS DE SERVICIO
//   · Sesiones privadas  (/sesiones-privadas · /en/private-sessions)
//   · Empresas y grupos  (/empresas-y-grupos · /en/companies-and-groups)
//   · Eventos            (/eventos · /en/events)
// Cada página tiene su versión en castellano (es) y en inglés (en).
// Los precios salen de tarifas.ts y el próximo evento de evento.ts.
// ─────────────────────────────────────────────────────────────

import type { Idioma } from "./textos";

/** Preguntas frecuentes de la portada que se pueden reutilizar (ver textos.ts). */
export type FaqId =
  | "experiencia"
  | "llevar"
  | "duracion"
  | "presencial"
  | "matReformer"
  | "acompanante"
  | "empresas"
  | "precio";

export type PaginaServicio = "sesiones" | "empresas" | "eventos";

type Textos = {
  seo: { titulo: string; descripcion: string };
  /** Nombre corto (para el menú y las tarjetas de "También te puede interesar") */
  nombre: string;
  /** Frase corta para las tarjetas de "También te puede interesar" */
  resumen: string;
  antetitulo: string;
  h1: string;
  /** Si está vacío, se usa el texto de la sección de la portada */
  intro: string;
  botonSecundario: string;
  datos: string[];
  incluyeTitulo: string;
  incluye: string[];
  paraQuienTitulo: string;
  paraQuien: string[];
  comoTitulo: string;
  pasos: { titulo: string; texto: string }[];
  precioTitulo: string;
  precioTexto: string;
  precioNotas: string[];
  faqExtra: { pregunta: string; respuesta: string }[];
};

type Config = {
  foto: { src: string; alt: Record<Idioma, string> };
  /** Preguntas de la portada que se muestran también aquí (van antes de las propias) */
  faqPortada: FaqId[];
  /** "todos" = todos los testimonios; lista de nombres = solo esos; [] = ninguno */
  testimonios: "todos" | string[];
} & Record<Idioma, Textos>;

export const paginas: Record<PaginaServicio, Config> = {
  // ═══════════════════════════════════════════════════════════
  // SESIONES PRIVADAS
  // ═══════════════════════════════════════════════════════════
  sesiones: {
    foto: {
      src: "/anita-detail.jpg",
      alt: {
        es: "Sala de pilates con reformers",
        en: "Pilates studio with reformers",
      },
    },
    faqPortada: [
      "experiencia",
      "llevar",
      "duracion",
      "presencial",
      "matReformer",
      "acompanante",
    ],
    // Todos menos Chiara, que habla de clases de grupo
    testimonios: ["Celia", "María", "Adriana", "Marta", "Marisol", "Laura", "Carolina", "Fer", "Angela"],
    es: {
      seo: {
        titulo:
          "Clases privadas de Pilates Reformer y Mat en Barcelona | Anita Pilates",
        descripcion:
          "Clases privadas de pilates en Barcelona, 1:1 y dúo, en Reformer o Mat. Sesiones de 50 minutos adaptadas a tu nivel con Anita, instructora certificada por Balanced Body. Escríbeme por WhatsApp.",
      },
      nombre: "Sesiones privadas",
      resumen: "Sesiones 1:1 y dúo de Reformer o Mat, adaptadas a tu nivel.",
      antetitulo: "Sesiones privadas · 1:1 y dúo",
      h1: "Clases privadas de pilates en Barcelona, en Reformer o Mat",
      intro:
        "Sesiones 1:1 o en dúo, pensadas solo para ti: trabajamos a tu ritmo, según tus objetivos y con toda mi atención en tu técnica. Tú eliges Mat o Reformer, y yo adapto cada ejercicio a tu nivel.",
      botonSecundario: "Ver tarifas",
      datos: [
        "50 minutos",
        "Reformer o Mat",
        "1:1 o dúo",
        "Les Corts · Sant Gervasi · Sarrià",
        "Castellano o inglés",
      ],
      incluyeTitulo: "Qué incluye cada sesión",
      incluye: [
        "50 minutos de pilates solo para ti (o para ti y otra persona, si es dúo).",
        "Ejercicios adaptados a tu nivel, a tus objetivos y a cómo llegas ese día.",
        "Corrección constante de alineación, respiración y precisión.",
        "Reformer con los muelles ajustados a ti, o Mat con props.",
        "Seguimiento directo de tu progreso de una sesión a otra.",
      ],
      paraQuienTitulo: "¿Para quién es?",
      paraQuien: [
        "Si empiezas de cero y quieres aprender bien la técnica desde el principio.",
        "Si ya practicas y quieres subir de nivel con atención individual.",
        "Si tienes una lesión o estás embarazada: adaptamos la práctica con antelación.",
        "Si quieres entrenar con tu pareja, una amiga o un familiar (sesión dúo).",
        "Si prefieres hacer la sesión en inglés: también es posible.",
      ],
      comoTitulo: "Cómo funciona",
      pasos: [
        {
          titulo: "Me escribes por WhatsApp",
          texto:
            "Cuéntame qué buscas, si tienes alguna lesión y si prefieres Mat o Reformer. Te respondo yo, sin reservas automáticas.",
        },
        {
          titulo: "Buscamos día y hora",
          texto:
            "Ajustamos la agenda juntas. Las sesiones son en una sala equipada con reformer y mat, en la zona de Les Corts, Sant Gervasi y Sarrià.",
        },
        {
          titulo: "Primera sesión",
          texto:
            "Solo necesitas ropa cómoda (y calcetines antideslizantes si haces reformer). A partir de ahí, ajustamos la progresión sesión a sesión.",
        },
      ],
      precioTitulo: "Tarifas",
      precioTexto: "",
      precioNotas: [
        "Sesiones de 50 minutos · presenciales en Barcelona (también online si lo necesitas).",
        "El bono de 5 sesiones tiene una validez de 3 meses.",
        "¿Necesitas cancelar o cambiar una sesión? Avísame con al menos 48 horas de antelación.",
      ],
      faqExtra: [
        {
          pregunta: "¿Dónde son las sesiones?",
          respuesta:
            "En una sala equipada con reformer y mat, en la zona de Les Corts, Sant Gervasi y Sarrià.",
        },
        {
          pregunta: "¿Cuánto dura el bono de 5 sesiones?",
          respuesta: "Tiene una validez de 3 meses.",
        },
        {
          pregunta: "¿Y si tengo que cancelar una sesión?",
          respuesta: "Avísame con al menos 48 horas de antelación.",
        },
        {
          pregunta: "¿Puedo hacer la sesión en inglés?",
          respuesta: "Sí, las sesiones pueden ser en castellano o en inglés.",
        },
      ],
    },
    en: {
      seo: {
        titulo:
          "Private Pilates Classes in Barcelona | Reformer & Mat · Anita Pilates",
        descripcion:
          "Private Pilates classes in Barcelona, 1:1 and duo, on the Reformer or Mat. 50-minute sessions in English or Spanish, tailored to your level, with Anita, a Balanced Body certified instructor.",
      },
      nombre: "Private sessions",
      resumen: "1:1 and duo Reformer or Mat sessions, tailored to your level.",
      antetitulo: "Private sessions · 1:1 and duo",
      h1: "Private Pilates classes in Barcelona, on the Reformer or Mat",
      intro:
        "1:1 or duo sessions designed just for you: we work at your pace, around your goals, with my full attention on your technique. You choose Mat or Reformer, and I adapt every exercise to your level.",
      botonSecundario: "See rates",
      datos: [
        "50 minutes",
        "Reformer or Mat",
        "1:1 or duo",
        "Les Corts · Sant Gervasi · Sarrià",
        "English or Spanish",
      ],
      incluyeTitulo: "What each session includes",
      incluye: [
        "50 minutes of Pilates just for you (or for you and one other person, if it's a duo).",
        "Exercises adapted to your level, your goals and how you're feeling that day.",
        "Constant guidance on alignment, breath and precision.",
        "Reformer with the springs set just for you, or Mat with props.",
        "Personal follow-up on your progress from one session to the next.",
      ],
      paraQuienTitulo: "Who it's for",
      paraQuien: [
        "If you're starting from scratch and want to learn the technique properly from day one.",
        "If you already practise and want to take it up a level with one-to-one attention.",
        "If you have an injury or are pregnant: we'll adapt the practice beforehand.",
        "If you'd like to train with your partner, a friend or a family member (duo session).",
        "If you'd rather have your session in English: no problem at all.",
      ],
      comoTitulo: "How it works",
      pasos: [
        {
          titulo: "Message me on WhatsApp",
          texto:
            "Tell me what you're looking for, whether you have any injuries and if you'd prefer Mat or Reformer. I reply personally, with no automated booking.",
        },
        {
          titulo: "We find a day and time",
          texto:
            "We plan the schedule together. Sessions take place in a studio equipped with a reformer and mats, in the Les Corts, Sant Gervasi and Sarrià area.",
        },
        {
          titulo: "Your first session",
          texto:
            "Just bring comfortable clothes (and grip socks if you're doing Reformer). From there, we adjust your progression session by session.",
        },
      ],
      precioTitulo: "Rates",
      precioTexto: "",
      precioNotas: [
        "50-minute sessions · in person in Barcelona (online too, if that works better for you).",
        "The 5-session pack is valid for 3 months.",
        "Need to cancel or move a session? Just let me know at least 48 hours in advance.",
      ],
      faqExtra: [
        {
          pregunta: "Where do the sessions take place?",
          respuesta:
            "In a studio equipped with a reformer and mats, in the Les Corts, Sant Gervasi and Sarrià area.",
        },
        {
          pregunta: "How long is the 5-session pack valid for?",
          respuesta: "It's valid for 3 months.",
        },
        {
          pregunta: "What if I need to cancel a session?",
          respuesta: "Just let me know at least 48 hours in advance.",
        },
        {
          pregunta: "Do you teach in English?",
          respuesta: "Yes, sessions can be in English or Spanish.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // EMPRESAS, RESIDENCIAS Y GRUPOS
  // ═══════════════════════════════════════════════════════════
  empresas: {
    foto: {
      src: "/anita-class.jpg",
      alt: {
        es: "Ejercicio de pilates sobre esterilla",
        en: "Pilates exercise on a mat",
      },
    },
    faqPortada: [],
    // PENDIENTE: no hay testimonios de empresas ni residencias todavía.
    // Cuando los haya, añádelos en testimonios.ts y pon aquí sus nombres.
    testimonios: [],
    es: {
      seo: {
        titulo:
          "Pilates para empresas, residencias y grupos en Barcelona | Anita Pilates",
        descripcion:
          "Clases de pilates para empresas, residencias de estudiantes y grupos privados en Barcelona. Voy a vuestro espacio, grupos de hasta 20 personas, clase puntual o varias sesiones. Pide tu propuesta.",
      },
      nombre: "Empresas y grupos",
      resumen:
        "Clases de pilates en vuestro espacio, para grupos de hasta 20 personas.",
      antetitulo: "Empresas · Residencias · Grupos",
      h1: "Pilates para empresas, residencias y grupos en Barcelona",
      intro: "",
      botonSecundario: "Escríbeme un email",
      datos: [
        "Hasta 20 personas",
        "En vuestro espacio",
        "Castellano o inglés",
        "Para todos los niveles",
      ],
      incluyeTitulo: "Qué podemos organizar",
      incluye: [
        "Una clase puntual: para un día de equipo, una jornada especial o para probar.",
        "Varias sesiones: una serie de clases para crear hábito en el equipo o en la residencia.",
        "Una actividad dentro de un evento: una clase de pilates como parte de vuestro programa.",
      ],
      paraQuienTitulo: "¿Para quién es?",
      paraQuien: [
        "Empresas que quieren cuidar a su equipo con una actividad diferente.",
        "Residencias de estudiantes que buscan una actividad para sus residentes.",
        "Grupos privados: amigas, familia, una celebración o un grupo que quiere entrenar junto.",
        "Equipos internacionales: la clase puede ser en castellano o en inglés.",
        "Grupos de cualquier nivel: adapto la clase para que todo el mundo pueda seguirla.",
      ],
      comoTitulo: "Cómo funciona",
      pasos: [
        {
          titulo: "Me escribes",
          texto:
            "Por WhatsApp o email: cuéntame cuántas personas sois, qué tipo de actividad buscáis y qué espacio tenéis.",
        },
        {
          titulo: "Te preparo una propuesta",
          texto: "Adaptada al espacio, al nivel del grupo y a vuestro calendario.",
        },
        {
          titulo: "Voy a vuestro espacio",
          texto:
            "Doy la clase en vuestra oficina, residencia o el espacio que elijáis. Si no tenéis material, escríbeme y buscamos una solución.",
        },
      ],
      precioTitulo: "Precio",
      precioTexto:
        "Cada propuesta es a medida: el precio depende del número de personas, del formato y de las sesiones. Escríbeme y te preparo una propuesta.",
      precioNotas: [],
      faqExtra: [
        {
          pregunta: "¿Cuántas personas pueden participar?",
          respuesta: "Hasta 20 personas por clase.",
        },
        {
          pregunta: "¿Dónde se hace la clase?",
          respuesta:
            "En vuestro espacio: la oficina, la residencia o el lugar que elijáis.",
        },
        {
          pregunta: "¿Hace falta material?",
          respuesta:
            "Sí, el material (por ejemplo, las esterillas) lo pone la empresa o el grupo. Si no lo tenéis, escríbeme y buscamos una solución.",
        },
        {
          pregunta: "¿Hace falta experiencia previa?",
          respuesta:
            "No. Adapto la clase al nivel del grupo, tanto si es la primera vez como si ya practicáis.",
        },
        {
          pregunta: "¿La clase puede ser en inglés?",
          respuesta: "Sí, puede ser en castellano o en inglés.",
        },
        {
          pregunta: "¿Cuánto cuesta?",
          respuesta:
            "Depende del número de personas y del formato. Escríbeme y te preparo una propuesta.",
        },
      ],
    },
    en: {
      seo: {
        titulo: "Corporate & Group Pilates Classes in Barcelona | Anita Pilates",
        descripcion:
          "Pilates classes for companies, student residences and private groups in Barcelona. I come to your space, groups of up to 20 people, one-off classes or a series. Ask for a proposal.",
      },
      nombre: "Companies & groups",
      resumen: "Pilates classes at your space, for groups of up to 20 people.",
      antetitulo: "Companies · Student residences · Groups",
      h1: "Pilates for companies, student residences and groups in Barcelona",
      intro: "",
      botonSecundario: "Send me an email",
      datos: [
        "Up to 20 people",
        "At your space",
        "English or Spanish",
        "All levels",
      ],
      incluyeTitulo: "What we can organise",
      incluye: [
        "A one-off class: for a team day, a special occasion or just to try it out.",
        "A series of sessions: regular classes to build the habit within your team or residence.",
        "An activity within an event: a Pilates class as part of your programme.",
      ],
      paraQuienTitulo: "Who it's for",
      paraQuien: [
        "Companies that want to look after their team with something different.",
        "Student residences looking for an activity for their residents.",
        "Private groups: friends, family, a celebration or any group that wants to train together.",
        "International teams: classes can be in English or Spanish.",
        "Groups of any level: I adapt the class so everyone can follow along.",
      ],
      comoTitulo: "How it works",
      pasos: [
        {
          titulo: "Get in touch",
          texto:
            "On WhatsApp or by email: tell me how many people you are, what kind of activity you're after and what space you have.",
        },
        {
          titulo: "I put together a proposal",
          texto: "Tailored to your space, the group's level and your schedule.",
        },
        {
          titulo: "I come to you",
          texto:
            "I teach the class at your office, residence or wherever you choose. If you don't have any equipment, message me and we'll find a solution.",
        },
      ],
      precioTitulo: "Pricing",
      precioTexto:
        "Every proposal is tailor-made: the price depends on the number of people, the format and the number of sessions. Message me and I'll put one together for you.",
      precioNotas: [],
      faqExtra: [
        {
          pregunta: "How many people can join?",
          respuesta: "Up to 20 people per class.",
        },
        {
          pregunta: "Where does the class take place?",
          respuesta: "At your space: your office, residence or wherever you choose.",
        },
        {
          pregunta: "Do we need equipment?",
          respuesta:
            "Yes, the company or group provides the equipment (mats, for example). If you don't have any, message me and we'll find a solution.",
        },
        {
          pregunta: "Do people need previous experience?",
          respuesta:
            "No. I adapt the class to the group's level, whether it's everyone's first time or you already practise.",
        },
        {
          pregunta: "Can the class be in English?",
          respuesta: "Yes, it can be in English or Spanish.",
        },
        {
          pregunta: "How much does it cost?",
          respuesta:
            "It depends on the number of people and the format. Message me and I'll put together a proposal.",
        },
      ],
    },
  },

  // ═══════════════════════════════════════════════════════════
  // EVENTOS
  // ═══════════════════════════════════════════════════════════
  eventos: {
    foto: {
      src: "/anita-event.jpg",
      alt: {
        es: "Anita practicando pilates en el reformer",
        en: "Anita practising Pilates on the reformer",
      },
    },
    faqPortada: ["matReformer"],
    testimonios: ["Chiara", "Carolina", "Marta"],
    es: {
      seo: {
        titulo: "Eventos de pilates en Barcelona | Mat y Reformer · Anita Pilates",
        descripcion:
          "Eventos de pilates Mat y Reformer en Barcelona: sesiones especiales de 50 minutos para entrenar en grupo y subir un nivel en tu práctica. Escríbeme por WhatsApp y te aviso del próximo.",
      },
      nombre: "Eventos",
      resumen: "Sesiones especiales de 50 minutos para entrenar en grupo, de Mat o Reformer.",
      antetitulo: "Eventos · Mat y Reformer",
      h1: "Eventos de pilates en Barcelona",
      intro: "",
      botonSecundario: "Ver próximo evento",
      datos: ["50 minutos", "Mat y Reformer", "En grupo", "Plazas limitadas"],
      incluyeTitulo: "Cómo son los eventos",
      incluye: [
        "50 minutos de pilates en grupo, de Mat o de Reformer.",
        "Trabajo de control, respiración, core y fuerza global.",
        "Una experiencia puntual, fuera de tu rutina, para profundizar en el método.",
        "Plazas limitadas: el número depende de cada evento.",
      ],
      paraQuienTitulo: "¿Para quién son?",
      paraQuien: [
        "Si te apetece entrenar en grupo y conocer a gente a la que también le encanta el pilates.",
        "Si buscas un plan diferente para salir de la rutina.",
        "Si ya practicas y quieres subir un nivel en tu práctica.",
      ],
      comoTitulo: "Cómo funciona",
      pasos: [
        {
          titulo: "Me escribes por WhatsApp",
          texto: "Y te aviso cuando haya fecha para el próximo evento.",
        },
        {
          titulo: "Te cuento los detalles",
          texto:
            "El lugar, el precio y las plazas dependen de cada evento: te lo cuento todo por WhatsApp.",
        },
        {
          titulo: "Reservas tu plaza",
          texto: "Y nos vemos en el evento.",
        },
      ],
      precioTitulo: "Próximo evento",
      precioTexto: "",
      precioNotas: [],
      faqExtra: [
        {
          pregunta: "¿Cuánto dura un evento?",
          respuesta: "50 minutos.",
        },
        {
          pregunta: "¿Cuánto cuesta y cuántas plazas hay?",
          respuesta:
            "Depende de cada evento. Escríbeme por WhatsApp y te cuento los detalles del próximo.",
        },
        {
          pregunta: "¿Cuándo es el próximo evento?",
          respuesta:
            "Si ya hay fecha, la tienes en esta página. Si no, escríbeme por WhatsApp y te aviso.",
        },
        {
          pregunta: "¿Puedo organizar un evento privado para mi grupo?",
          respuesta:
            "Sí. Organizo clases para empresas, residencias y grupos privados: échale un vistazo a la página de empresas y grupos.",
        },
      ],
    },
    en: {
      seo: {
        titulo: "Pilates Events in Barcelona | Mat & Reformer · Anita Pilates",
        descripcion:
          "Mat and Reformer Pilates events in Barcelona: special 50-minute group sessions to take your practice up a level. Message me on WhatsApp and I'll let you know about the next one.",
      },
      nombre: "Events",
      resumen: "Special 50-minute group sessions, on the Mat or Reformer.",
      antetitulo: "Events · Mat & Reformer",
      h1: "Pilates events in Barcelona",
      intro: "",
      botonSecundario: "See next event",
      datos: ["50 minutes", "Mat & Reformer", "Group sessions", "Limited spots"],
      incluyeTitulo: "What the events are like",
      incluye: [
        "50 minutes of group Pilates, on the Mat or Reformer.",
        "Work on control, breath, core and full-body strength.",
        "A one-off experience, outside your usual routine, to go deeper into the method.",
        "Limited spots: the number depends on each event.",
      ],
      paraQuienTitulo: "Who they're for",
      paraQuien: [
        "If you fancy training in a group and meeting people who love Pilates too.",
        "If you're looking for a different plan to break your routine.",
        "If you already practise and want to take it up a level.",
      ],
      comoTitulo: "How it works",
      pasos: [
        {
          titulo: "Message me on WhatsApp",
          texto: "And I'll let you know when the next event is on.",
        },
        {
          titulo: "I send you the details",
          texto:
            "The venue, price and number of spots depend on each event: I'll tell you everything on WhatsApp.",
        },
        {
          titulo: "You book your spot",
          texto: "And see you at the event!",
        },
      ],
      precioTitulo: "Next event",
      precioTexto: "",
      precioNotas: [],
      faqExtra: [
        {
          pregunta: "How long is an event?",
          respuesta: "50 minutes.",
        },
        {
          pregunta: "How much does it cost and how many spots are there?",
          respuesta:
            "It depends on each event. Message me on WhatsApp and I'll send you the details of the next one.",
        },
        {
          pregunta: "When is the next event?",
          respuesta:
            "If there's a date, you'll find it on this page. If not, message me on WhatsApp and I'll let you know.",
        },
        {
          pregunta: "Can I organise a private event for my group?",
          respuesta:
            "Yes. I organise classes for companies, student residences and private groups: take a look at the companies and groups page.",
        },
      ],
    },
  },
};
