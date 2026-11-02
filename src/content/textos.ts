// ─────────────────────────────────────────────────────────────
// TEXTOS DE LA WEB EN CASTELLANO (es) Y EN INGLÉS (en)
// Cada texto aparece dos veces: primero en castellano y luego
// en inglés, en el mismo orden. Si cambias uno, revisa el otro.
// Los precios están en tarifas.ts y el próximo evento en evento.ts.
// ─────────────────────────────────────────────────────────────

export type Idioma = "es" | "en";

const es = {
  seo: {
    titulo:
      "Clases privadas de Pilates en Barcelona | Reformer y Mat · Anita Pilates",
    descripcion:
      "Sesiones privadas de Pilates Reformer y Mat en Barcelona, 1:1 y dúo, con Anita, instructora certificada por Balanced Body. Eventos de pilates y clases en estudios. Escríbeme por WhatsApp.",
  },

  nav: {
    sesiones: "Sesiones privadas",
    eventos: "Eventos",
    centros: "Centros BCN",
    horario: "Mi horario",
    faq: "FAQ",
    contacto: "Contacto",
    abrirMenu: "Abrir menú",
    idioma: "Idioma",
  },

  cabecera: {
    subtitulo: "Pilates Mat y Reformer · BCN",
  },

  portada: {
    antetitulo: "Barcelona · Pilates Reformer · Mat",
    titulo: "Pilates para crear un hábito fuerte, consciente y en equilibrio",
    intro:
      "Soy Anita, instructora de Pilates en Barcelona. Trabajo con Pilates Mat y Pilates Reformer en sesiones privadas (1:1 y dúo), eventos y clases en estudios, con un enfoque en el movimiento consciente que fortalece el cuerpo y acompaña a sentirse mejor, física y mentalmente.",
    diferenciales: [
      {
        titulo: "El método",
        texto:
          "Pilates clásico basado en control, respiración y precisión, con atención real al movimiento.",
      },
      {
        titulo: "Mat & Reformer",
        texto:
          "Pilates Mat y Pilates Reformer combinados para fortalecer el cuerpo con técnica y sin impacto.",
      },
      {
        titulo: "Progresión consciente",
        texto:
          "Clases con progresión cuidada para ganar fuerza, estabilidad y movilidad de forma natural.",
      },
      {
        titulo: "Formación certificada",
        texto: "Instructora de Mat y Reformer por Balanced Body.",
      },
    ],
    botonPrincipal: "Hablemos de tu sesión privada",
    mensajePrincipal: "Hola Anita, me gustaría saber más sobre las sesiones privadas",
    botonTarifas: "Ver sesiones y tarifas",
    botonEvento: "Próximo evento",
    etiquetas: ["Certificada Balanced Body", "Mat & Reformer"],
    nota:
      "Sin prisas ni reservas automáticas: me escribes, te respondo yo y lo organizamos juntas.",
    fotoAlt: "Anita presentándose",
    fotoLema: "Control · Fuerza · Precisión",
    fotoTitulo: "Pilates Mat y Reformer con Anita",
    fotoEtiqueta: "BCN · Online",
  },

  sesiones: {
    antetitulo: "Sesiones privadas · 1:1 y dúo",
    titulo: "Una sesión pensada solo para ti",
    intro:
      "Trabajamos a tu ritmo y según tus objetivos: ganar fuerza, mejorar la postura, coger constancia o simplemente sentirte mejor en tu cuerpo. Tú eliges Mat o Reformer, y yo adapto cada ejercicio a tu nivel, con corrección y seguimiento directo.",
    detalle:
      "Sesiones de {minutos} minutos · presenciales en Barcelona (también online si lo necesitas).",
    porSesion: "por sesión",
    bono5: "Bono de 5 sesiones",
    porPersona: "/persona",
    meInteresa: "Me interesa",
    tarjetas: {
      reformer: {
        titulo: "1:1 Reformer",
        texto: "Sesión individual en reformer, con los muelles ajustados a ti.",
        mensaje: "Hola Anita, me interesa una sesión 1:1 de Reformer",
      },
      mat: {
        titulo: "1:1 Mat",
        texto:
          "Sesión individual en mat, con props, para trabajar control y fuerza desde la base.",
        mensaje: "Hola Anita, me interesa una sesión 1:1 de Mat",
      },
      duo: {
        titulo: "Dúo (2 personas)",
        texto:
          "Para venir con tu pareja, una amiga o un familiar. La misma atención, a mejor precio por persona.",
        mensaje: "Hola Anita, me interesa una sesión dúo",
      },
    },
    dudas: "¿No sabes qué opción te va mejor? Escríbeme y lo vemos.",
    botonDudas: "Escríbeme por WhatsApp",
    mensajeDudas: "Hola Anita, me gustaría saber más sobre las sesiones privadas",
  },

  eventos: {
    antetitulo: "Eventos · Mat y Reformer",
    titulo: "Encuentros para entrenar en grupo y subir un nivel en tu práctica",
    texto:
      "Encuentros especiales para entrenar en grupo y subir un nivel más en la práctica. Trabajamos Pilates Mat y Pilates Reformer con el mismo cuidado y precisión: control, respiración, core y fuerza global. Cada evento es una experiencia puntual, pensada para profundizar en el método y compartir el movimiento.",
    proximo: "Próximo evento",
    sinFecha: "Próximo evento: escríbeme por WhatsApp y te aviso",
    plazas: "Plazas limitadas. Te cuento todos los detalles por WhatsApp.",
    botonConFecha: "Quiero apuntarme",
    mensajeConFecha: "Hola Anita, me interesa el próximo evento",
    botonSinFecha: "Avísame del próximo evento",
    mensajeSinFecha: "Hola Anita, ¿me avisas cuando haya un próximo evento?",
    fotoAlt: "Grupo pequeño practicando pilates",
  },

  sobreMi: {
    antetitulo: "Sobre mí",
    titulo: "Anita · Pilates Mat y Pilates Reformer",
    parrafos: [
      "Soy Anita, instructora de Pilates en Barcelona. Durante varios años trabajé en el mundo de la consultoría, en un entorno muy exigente, hasta que el pilates se convirtió primero en una herramienta para cuidarme y, con el tiempo, en mi verdadera pasión.",
      "Hace más de dos años decidí dar un giro profesional y formarme como instructora certificada de Pilates Mat y Pilates Reformer en el Centro Oficial de Formación Balanced Body. Hoy trabajo desde los principios del método de Joseph Pilates —control, respiración y precisión— para ayudar a las personas a ganar fuerza, mejorar su postura y crear un hábito que las haga sentirse bien en su cuerpo.",
    ],
    mensaje: "Hola Anita, me gustaría entrenar contigo",
  },

  centros: {
    antetitulo: "Clases en centros · Barcelona",
    titulo: "Encuéntrame en los siguientes centros",
    texto1:
      "Doy clases de Pilates Mat y Pilates Reformer en distintos estudios de Barcelona, espacios cuidados donde el movimiento se vive con calma, atención y buena energía. Trabajo en centros que priorizan la luz natural, el silencio y una práctica consciente.",
    texto2:
      "Los horarios varían según la temporada. Escríbeme y te confirmo disponibilidad, horarios y precios en cada estudio.",
    fotoAlt: "Práctica de pilates con Anita",
    esperarTitulo: "Qué puedes esperar",
    esperar: [
      "Bloques de fuerza y control inspirados en Joseph Pilates.",
      "Ajuste de resortes y props para escalar intensidad sin impacto.",
      "Corrección constante de alineación, respiración y precisión.",
      "Final atlético con estabilidad de core y movilidad de columna.",
    ],
    esperarNota:
      "Si tienes lesión o embarazo, adaptamos la práctica con antelación. Escríbeme para valorarlo juntas.",
  },

  horario: {
    antetitulo: "Mi horario semanal",
    titulo: "Mi horario de esta semana",
    texto: "Aquí tienes dónde doy clases esta semana en Barcelona.",
    cargando: "Cargando horario...",
    noDisponible: "Horario no disponible ahora.",
    clase: "clase",
    clases: "clases",
  },

  video: {
    antetitulo: "Último vídeo",
    titulo: "Entrena conmigo en casa",
    texto:
      "Clases de Pilates para entrenar desde casa con control, fuerza y buena técnica. Dale play o guárdalo para tu próxima práctica.",
    reto:
      "¿Quieres empezar ya? En el canal tienes el Reto 21 días: una serie gratuita de 21 sesiones guiadas, sin impacto y con progresión clara, para crear hábito.",
    nota:
      "El canal de YouTube es una puerta de entrada al método. El trabajo más profundo lo hacemos en las sesiones privadas y en las clases presenciales.",
    boton: "Ver en YouTube",
    cargando: "Cargando vídeo...",
    proximamente: "Nuevo vídeo muy pronto.",
    tituloPorDefecto: "Último vídeo de Anita",
  },

  faq: {
    antetitulo: "FAQ",
    titulo: "Preguntas frecuentes",
    preguntas: [
      {
        pregunta: "¿Necesito experiencia previa?",
        respuesta:
          "No. Adapto cada sesión a tu nivel, tanto si empiezas de cero como si ya practicas.",
      },
      {
        pregunta: "¿Qué tengo que llevar?",
        respuesta:
          "Nada, solo ropa cómoda: las sesiones son en una sala equipada con reformer y mat. Si haces reformer, trae calcetines antideslizantes.",
      },
      {
        pregunta: "¿Cuánto dura una sesión?",
        respuesta: "{minutos} minutos.",
      },
      {
        pregunta: "¿Las sesiones son presenciales u online?",
        respuesta:
          "Principalmente presenciales, en Barcelona. Si lo necesitas, también podemos hacerla online.",
      },
      {
        pregunta: "¿Mat o Reformer?",
        respuesta:
          "Puedes elegir, tanto en las sesiones como en los eventos. Si no sabes cuál te va mejor, escríbeme y lo vemos.",
      },
      {
        pregunta: "¿Puedo venir con otra persona?",
        respuesta:
          "Sí. Las sesiones dúo son para dos personas y salen más económicas por persona.",
      },
      {
        pregunta: "¿Cuánto cuesta?",
        respuesta:
          "Tienes todas las tarifas en la sección de sesiones privadas. Si tienes dudas, escríbeme por WhatsApp.",
      },
    ],
    otraPregunta: "¿Tienes otra pregunta?",
    boton: "Escríbeme",
    mensaje: "Hola Anita, tengo una pregunta",
  },

  contacto: {
    antetitulo: "Contacto",
    titulo:
      "¿Cómo quieres entrenar? Escríbeme y vemos qué opción encaja mejor contigo.",
    texto:
      "Cuéntame si te interesa una sesión privada (1:1 o dúo), un evento o las clases en centros. Te respondo yo, sin reservas automáticas: ajustamos la agenda juntas.",
    boton: "Escríbeme por WhatsApp",
    mensaje: "Hola Anita, me gustaría entrenar contigo",
    fotos: [
      "Anita en plancha sobre reformer",
      "Detalle de alineación en reformer",
      "Anita guiando a sus alumnas",
    ],
  },

  testimonios: {
    antetitulo: "Testimonios",
    titulo: "Lo que dicen mis alumnas",
    habitual: "Alumna habitual",
    primera: "Primera clase",
    anterior: "Testimonio anterior",
    siguiente: "Siguiente testimonio",
    carrusel: "Testimonios de alumnas",
  },

  whatsappFlotante: {
    etiqueta: "Escríbeme por WhatsApp",
    mensaje: "Hola Anita, me gustaría saber más sobre tus sesiones de pilates",
  },

  dias: {} as Record<string, string>,
};

export type Textos = typeof es;

const en: Textos = {
  seo: {
    titulo: "Private Pilates in Barcelona | Reformer & Mat · Anita Pilates",
    descripcion:
      "Private Reformer and Mat Pilates sessions in Barcelona, in English or Spanish, 1:1 and duo, with Anita, a Balanced Body certified instructor. Pilates events and studio classes. Message me on WhatsApp.",
  },

  nav: {
    sesiones: "Private sessions",
    eventos: "Events",
    centros: "Studios",
    horario: "Schedule",
    faq: "FAQ",
    contacto: "Contact",
    abrirMenu: "Open menu",
    idioma: "Language",
  },

  cabecera: {
    subtitulo: "Mat & Reformer Pilates · BCN",
  },

  portada: {
    antetitulo: "Barcelona · Reformer & Mat Pilates",
    titulo: "Pilates to build a strong, mindful and balanced habit",
    intro:
      "I'm Anita, a Pilates instructor based in Barcelona. I teach Mat and Reformer Pilates through private sessions (1:1 and duo), events and studio classes, with a focus on mindful movement that builds strength and helps you feel better, in body and mind.",
    diferenciales: [
      {
        titulo: "The method",
        texto:
          "Classical Pilates built on control, breath and precision, with real attention to how you move.",
      },
      {
        titulo: "Mat & Reformer",
        texto:
          "Mat and Reformer Pilates combined to build strength with good technique and no impact.",
      },
      {
        titulo: "Mindful progression",
        texto:
          "Thoughtfully progressed classes to gain strength, stability and mobility, naturally.",
      },
      {
        titulo: "Certified training",
        texto: "Mat and Reformer instructor, certified by Balanced Body.",
      },
    ],
    botonPrincipal: "Let's talk about your private session",
    mensajePrincipal: "Hi Anita, I'd love to know more about your private sessions",
    botonTarifas: "See sessions & rates",
    botonEvento: "Next event",
    etiquetas: ["Balanced Body certified", "Mat & Reformer", "English & Spanish"],
    nota:
      "No rush and no automated booking: you message me, I reply personally and we plan it together.",
    fotoAlt: "Anita introducing herself",
    fotoLema: "Control · Strength · Precision",
    fotoTitulo: "Mat & Reformer Pilates with Anita",
    fotoEtiqueta: "BCN · Online",
  },

  sesiones: {
    antetitulo: "Private sessions · 1:1 and duo",
    titulo: "A session designed just for you",
    intro:
      "We work at your pace and around your goals: getting stronger, improving your posture, staying consistent or simply feeling better in your body. You choose Mat or Reformer, and I adapt every exercise to your level, with close guidance and personal follow-up.",
    detalle:
      "{minutos}-minute sessions in English or Spanish · in person in Barcelona (online too, if that works better for you).",
    porSesion: "per session",
    bono5: "5-session pack",
    porPersona: "/person",
    meInteresa: "I'm interested",
    tarjetas: {
      reformer: {
        titulo: "1:1 Reformer",
        texto: "A one-to-one Reformer session, with the springs set just for you.",
        mensaje: "Hi Anita, I'm interested in a 1:1 Reformer session",
      },
      mat: {
        titulo: "1:1 Mat",
        texto:
          "A one-to-one Mat session with props, to build control and strength from the ground up.",
        mensaje: "Hi Anita, I'm interested in a 1:1 Mat session",
      },
      duo: {
        titulo: "Duo (2 people)",
        texto:
          "Bring your partner, a friend or a family member. The same attention, at a better price per person.",
        mensaje: "Hi Anita, I'm interested in a duo session",
      },
    },
    dudas: "Not sure which one suits you best? Message me and we'll figure it out.",
    botonDudas: "Message me on WhatsApp",
    mensajeDudas: "Hi Anita, I'd love to know more about your private sessions",
  },

  eventos: {
    antetitulo: "Events · Mat & Reformer",
    titulo: "Group sessions to train together and take your practice up a level",
    texto:
      "Special get-togethers to train as a group and take your practice one step further. We work on Mat and Reformer Pilates with the same care and precision: control, breath, core and full-body strength. Each event is a one-off experience, designed to go deeper into the method and share the joy of movement.",
    proximo: "Next event",
    sinFecha: "Next event: message me on WhatsApp and I'll let you know",
    plazas: "Limited spots. I'll send you all the details on WhatsApp.",
    botonConFecha: "I'd like to join",
    mensajeConFecha: "Hi Anita, I'm interested in the next event",
    botonSinFecha: "Let me know about the next event",
    mensajeSinFecha: "Hi Anita, could you let me know when the next event is on?",
    fotoAlt: "Small group practising Pilates",
  },

  sobreMi: {
    antetitulo: "About me",
    titulo: "Anita · Mat & Reformer Pilates",
    parrafos: [
      "I'm Anita, a Pilates instructor in Barcelona. For several years I worked in consulting, a very demanding environment, until Pilates became first a way to look after myself and, over time, my true passion.",
      "Over two years ago I decided to change careers and trained as a certified Mat and Reformer Pilates instructor at the Balanced Body Official Training Center. Today I work from the principles of Joseph Pilates' method — control, breath and precision — to help people get stronger, improve their posture and build a habit that makes them feel good in their body.",
    ],
    mensaje: "Hi Anita, I'd love to train with you",
  },

  centros: {
    antetitulo: "Studio classes · Barcelona",
    titulo: "Find me at these studios",
    texto1:
      "I teach Mat and Reformer Pilates at several studios across Barcelona: thoughtfully run spaces where movement is lived with calm, attention and good energy. I work with studios that value natural light, quiet and a mindful practice.",
    texto2:
      "Schedules change with the season. Message me and I'll confirm availability, times and prices at each studio.",
    fotoAlt: "Pilates practice with Anita",
    esperarTitulo: "What to expect",
    esperar: [
      "Strength and control blocks inspired by Joseph Pilates.",
      "Springs and props adjusted to scale the intensity, with no impact.",
      "Constant guidance on alignment, breath and precision.",
      "An athletic finish with core stability and spinal mobility.",
    ],
    esperarNota:
      "If you have an injury or are pregnant, we'll adapt the practice beforehand. Message me and we'll look at it together.",
  },

  horario: {
    antetitulo: "My weekly schedule",
    titulo: "Where I'm teaching this week",
    texto: "Here's where you can find my classes in Barcelona this week.",
    cargando: "Loading schedule...",
    noDisponible: "Schedule not available right now.",
    clase: "class",
    clases: "classes",
  },

  video: {
    antetitulo: "Latest video",
    titulo: "Train with me at home",
    texto:
      "Pilates classes to train at home with control, strength and good technique. Hit play or save it for your next practice.",
    reto:
      "Want to get started now? My channel has the 21-Day Challenge: a free series of 21 guided, low-impact sessions with a clear progression, to help you build the habit.",
    nota:
      "My YouTube channel is a way into the method. The deeper work happens in private sessions and in-person classes.",
    boton: "Watch on YouTube",
    cargando: "Loading video...",
    proximamente: "New video coming soon.",
    tituloPorDefecto: "Anita's latest video",
  },

  faq: {
    antetitulo: "FAQ",
    titulo: "Frequently asked questions",
    preguntas: [
      {
        pregunta: "Do I need any previous experience?",
        respuesta:
          "No. I adapt every session to your level, whether you're starting from scratch or already practise.",
      },
      {
        pregunta: "What should I bring?",
        respuesta:
          "Nothing, just comfortable clothes: sessions take place in a studio equipped with a reformer and mats. If you're doing Reformer, bring grip socks.",
      },
      {
        pregunta: "How long is a session?",
        respuesta: "{minutos} minutes.",
      },
      {
        pregunta: "Are sessions in person or online?",
        respuesta:
          "Mostly in person, in Barcelona. If you need to, we can also do it online.",
      },
      {
        pregunta: "Mat or Reformer?",
        respuesta:
          "It's your choice, both for sessions and events. If you're not sure which suits you best, message me and we'll figure it out.",
      },
      {
        pregunta: "Can I come with someone else?",
        respuesta:
          "Yes. Duo sessions are for two people and work out cheaper per person.",
      },
      {
        pregunta: "How much does it cost?",
        respuesta:
          "You'll find all the rates in the private sessions section. Any questions, just message me on WhatsApp.",
      },
    ],
    otraPregunta: "Got another question?",
    boton: "Message me",
    mensaje: "Hi Anita, I have a question",
  },

  contacto: {
    antetitulo: "Contact",
    titulo:
      "How would you like to train? Message me and we'll find the option that suits you best.",
    texto:
      "Tell me if you're interested in a private session (1:1 or duo), an event or studio classes. I reply personally, with no automated booking: we'll plan your schedule together.",
    boton: "Message me on WhatsApp",
    mensaje: "Hi Anita, I'd love to train with you",
    fotos: [
      "Anita holding a plank on the reformer",
      "Alignment detail on the reformer",
      "Anita guiding her students",
    ],
  },

  testimonios: {
    antetitulo: "Testimonials",
    titulo: "What my students say",
    habitual: "Regular student",
    primera: "First class",
    anterior: "Previous testimonial",
    siguiente: "Next testimonial",
    carrusel: "Student testimonials",
  },

  whatsappFlotante: {
    etiqueta: "Message me on WhatsApp",
    mensaje: "Hi Anita, I'd love to know more about your Pilates sessions",
  },

  // Traducción de los días que vienen de la hoja de horario (en castellano).
  dias: {
    lunes: "Monday",
    martes: "Tuesday",
    miercoles: "Wednesday",
    jueves: "Thursday",
    viernes: "Friday",
    sabado: "Saturday",
    domingo: "Sunday",
  },
};

export const textos: Record<Idioma, Textos> = { es, en };
