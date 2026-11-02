// ─────────────────────────────────────────────────────────────
// TESTIMONIOS
// Aparecen en el carrusel en este mismo orden.
// Para añadir uno nuevo, copia un bloque { ... }, pégalo donde
// quieras que aparezca y cambia el nombre y los textos.
//
// "tipo" puede ser:
//   "habitual" → se muestra "Alumna habitual" / "Regular student"
//   "primera"  → se muestra "Primera clase" / "First class"
// ─────────────────────────────────────────────────────────────

export type Testimonio = {
  nombre: string;
  tipo: "habitual" | "primera";
  texto: { es: string; en: string };
};

export const testimonios: Testimonio[] = [
  {
    nombre: "Celia",
    tipo: "habitual",
    texto: {
      es: "Cuando empecé no había hecho pilates en mi vida y el reformer me imponía bastante. Anita te lo explica todo con una paciencia infinita y ahora no me pierdo una clase.",
      en: "When I started I'd never done Pilates in my life and the reformer was pretty intimidating. Anita explains everything with endless patience, and now I never miss a class.",
    },
  },
  {
    nombre: "María",
    tipo: "primera",
    texto: {
      es: "Era mi primera vez y estaba un poco nerviosa, pero Anita me hizo sentir cómoda desde el minuto uno. Explica cada ejercicio con mucha calma. Repito seguro.",
      en: "It was my first time and I was a bit nervous, but Anita made me feel at ease from minute one. She explains every exercise really calmly. I'm definitely coming back.",
    },
  },
  {
    nombre: "Adriana",
    tipo: "habitual",
    texto: {
      es: "Llevo años haciendo pilates y Anita es de las profes que más se fijan en la técnica. Te corrige cuando es necesario, y siempre con muy buen rollo a pesar de la intensidad del entreno.",
      en: "I've been doing Pilates for years and Anita is one of the teachers who pays the most attention to technique. She corrects you when you need it, and always with great vibes, even when the workout gets intense.",
    },
  },
  {
    nombre: "Marta",
    tipo: "primera",
    texto: {
      es: "Primera clase y me ha encantado. Muy cercana, muy atenta a la postura y con una energía que contagia.",
      en: "First class and I loved it. Super friendly, really focused on posture, and her energy is contagious.",
    },
  },
  {
    nombre: "Marisol",
    tipo: "habitual",
    texto: {
      es: "Empecé bastante cortada con el tema del ejercicio y Anita me lo puso muy fácil desde el primer día. Se acuerda de cómo vas y de cómo estás. Se nota que le importa.",
      en: "I started out pretty self-conscious about exercising, and Anita made it really easy for me from day one. She remembers how you're progressing and how you're feeling. You can tell she cares.",
    },
  },
  {
    nombre: "Laura",
    tipo: "primera",
    texto: {
      es: "Nunca había probado el pilates y pensaba que no iba a poder seguir el ritmo. Anita adapta todo a tu nivel sin que te sientas fuera de lugar. Voy a repetir.",
      en: "I'd never tried Pilates and thought I wouldn't be able to keep up. Anita adapts everything to your level without ever making you feel out of place. I'll be back.",
    },
  },
  {
    nombre: "Carolina",
    tipo: "habitual",
    texto: {
      es: "Literal mi momento favorito de la semana. Clases muy bien pensadas, cada día distintas, y Anita es un amor. Sales nueva.",
      en: "Literally my favourite part of the week. Really well-thought-out classes, different every time, and Anita is a sweetheart. You walk out feeling brand new.",
    },
  },
  {
    nombre: "Fer",
    tipo: "primera",
    texto: {
      es: "Fui sin saber nada y salí con ganas de volver. Anita corrige con mucho detalle, pero con un trato súper cercano, que es lo que más valoro.",
      en: "I went in knowing nothing and came out wanting to go back. Anita corrects you in real detail, but she's super warm about it, which is what I value most.",
    },
  },
  {
    nombre: "Chiara",
    tipo: "habitual",
    texto: {
      es: "Lo que más me gusta es que, aunque sea una clase de grupo, te sientes atendida. Anita está pendiente de todas y te da opciones si algo no te sale.",
      en: "What I love most is that even in a group class, you feel looked after. Anita keeps an eye on everyone and gives you options if something isn't working for you.",
    },
  },
  {
    nombre: "Angela",
    tipo: "habitual",
    texto: {
      es: "He probado muchas profesoras y Anita es de las que más cuidan la técnica. Sus clases son exigentes, pero te vas a casa con la sensación de haber trabajado bien.",
      en: "I've tried lots of teachers and Anita is one of the ones who cares most about technique. Her classes are challenging, but you go home feeling like you've really put in good work.",
    },
  },
];
