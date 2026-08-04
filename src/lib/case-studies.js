import phillipPhoto from "../../assets/images/phillip.webp";

const caseStudies = {
  pchujoy: {
    slug: "pchujoy",
    client: "PCHUJOY",
    loaderCopy: "PCHUJOY\nFrom creator to platform.",
    year: "2025",
    service: "Creator Platform",
    title: "From one creator to an entire platform.",
    description:
      "We designed and engineered a subscription platform capable of supporting a repeatable business model beyond a single creator.",
    theme: "bg-accent text-foreground",
    silk: {
      color: "#5227FF",
      speed: 4,
      scale: 1,
      noiseIntensity: 0.22,
      rotation: -0.15,
    },
    facts: [
      ["Year", "2025"],
      ["Focus", "Creator Economy"],
      ["Contribution", "Strategy / Product / Design / Engineering"],
    ],
    premise: "Great creators should not depend on manual operations.",
    premiseDescription:
      "Growing audiences require products that scale beyond spreadsheets, forms and repetitive workflows.",
    challengeTitle:
      "Phillip Chu Joy had more than an audience. He had a business opportunity.",
    challenge: [
      "The challenge was not creating another giveaway platform. It was designing infrastructure capable of supporting subscriptions, recurring campaigns and future creators within the same ecosystem.",
    ],
    media: {
      challenge: {
        src: phillipPhoto,
        alt: "Phillip Chu Joy holding a video game in front of stacked PlayStation 5 consoles.",
        caption: "Phillip Chu Joy",
        className: "object-[58%_center]",
      },
    },
    moves: [
      {
        number: "01",
        title: "Subscription-first architecture.",
        body: "Every interaction was designed around recurring memberships rather than isolated campaigns.",
      },
      {
        number: "02",
        title: "Multi-creator scalability.",
        body: "The platform could support new creators without redesigning the product.",
      },
      {
        number: "03",
        title: "Operational automation.",
        body: "Campaigns, subscriptions and participant management became repeatable instead of manual.",
      },
    ],
    outcomeTitle:
      "A product that transformed a creator business into a scalable digital platform.",
    outcome:
      "What started as Phillip Chu Joy's subscription platform became a scalable product capable of supporting a much larger creator ecosystem.",
    pullQuote:
      "The product stopped revolving around one creator. It became a platform.",
    shift: { before: "One creator", after: "A scalable platform" },
    next: "samay",
  },
  samay: {
    slug: "samay-bcp",
    client: "SAMAY BCP",
    loaderCopy: "SAMAY\nAn experience worth remembering.",
    year: "2026",
    service: "Digital Experience",
    title: "Engagement should not feel like marketing.",
    description:
      "An interactive experience that transformed participation into something people could enjoy and remember.",
    theme: "case-study-samay-theme text-foreground",
    silk: {
      color: "#002A8D",
      speed: 3,
      scale: 1,
      noiseIntensity: 0.3,
      rotation: 0.25,
    },
    facts: [
      ["Mandate", "Interactive experience"],
      ["Focus", "Participation and engagement"],
      ["Contribution", "Strategy / Product / Design / Engineering"],
    ],
    premise: "People remember experiences, not campaigns.",
    challengeTitle: "Traditional activations create attention for a day.",
    challenge: [
      "We wanted people to stay, participate and enjoy. The decision was to make interaction the product rather than add it around a campaign.",
    ],
    moves: [
      {
        number: "01",
        title: "Real-time interaction.",
        body: "Every response shaped the experience immediately, keeping participation visible and alive.",
      },
      {
        number: "02",
        title: "Gameplay around participation.",
        body: "Simple mechanics turned passive attention into an experience people wanted to continue.",
      },
      {
        number: "03",
        title: "Seamless multi-device experience.",
        body: "The interaction remained coherent across screens, contexts and moments of participation.",
      },
    ],
    outcomeTitle: "A digital experience where engagement became the product.",
    outcome:
      "SAMAY replaced short-lived attention with participation people could feel, understand and remember.",
    pullQuote: "The campaign became an experience.",
    shift: { before: "A campaign", after: "An experience" },
    next: "axo-longevity",
  },
  "axo-longevity": {
    slug: "axo-longevity",
    client: "AXO Longevity",
    loaderCopy: "AXO LONGEVITY\nIntelligence for better clinical decisions.",
    year: "2026",
    service: "Preventive Health Platform",
    title: "AI is only useful when it fits into real clinical workflows.",
    description:
      "Biomarkers, laboratories, medical workflows and operations connected in one intelligent platform.",
    theme: "case-study-axo-theme text-inverse-foreground",
    silk: {
      color: "#BEEE31",
      speed: 4,
      scale: 1,
      noiseIntensity: 0.25,
      rotation: -0.3,
    },
    facts: [
      ["Mandate", "Integrated health platform"],
      ["Focus", "Preventive healthcare"],
      ["Contribution", "Strategy / Product / Design / Engineering"],
    ],
    premise: "Preventive healthcare depends on information, not intuition.",
    challengeTitle: "Clinical information lived across disconnected systems.",
    challenge: [
      "The challenge was not adding AI. It was making it useful across biomarkers, laboratory integrations, medical decisions and operational workflows.",
    ],
    moves: [
      {
        number: "01",
        title: "Unified clinical data.",
        body: "Biomarkers, laboratory results and patient context became one coherent source of truth.",
      },
      {
        number: "02",
        title: "Operational automation.",
        body: "Repeated coordination moved into reliable workflows that reduced friction for care teams.",
      },
      {
        number: "03",
        title: "Context-aware AI.",
        body: "Intelligence appeared inside the clinical context where it could support judgment instead of creating another task.",
      },
    ],
    outcomeTitle:
      "A platform where AI helps healthcare professionals instead of creating more operational friction.",
    outcome:
      "AXO turns fragmented preventive care into a connected system where information reaches the right professional in the right context.",
    pullQuote: "AI became part of the workflow instead of another feature.",
    shift: { before: "Disconnected systems", after: "One clinical workflow" },
    next: "filo",
  },
  filo: {
    slug: "filo",
    client: "FILO",
    loaderCopy: "FILO\nThe public made the decision.",
    year: "2025",
    service: "Live Voting Experience",
    title: "The audience became the jury.",
    description:
      "We designed and built the live voting system for Foodies Food Festival, connecting four creators, four restaurants and the public in one mobile experience.",
    theme: "case-study-filo-theme text-foreground",
    ogImage: "og-cover.jpg",
    silk: {
      color: "#777777",
      speed: 3,
      scale: 1,
      noiseIntensity: 0.22,
      rotation: 0.15,
    },
    facts: [
      ["Year", "2025"],
      ["Event", "Foodies Food Festival"],
      ["Contribution", "Product / Design / Engineering"],
    ],
    premise: "A live competition only works when the audience can take part.",
    premiseDescription:
      "Filo Foodies paired four creators with four restaurants and invited attendees to choose the winning duo during the festival.",
    challengeTitle:
      "Voting had to feel effortless in the middle of a live festival.",
    challenge: [
      "Attendees needed to understand the four competing duos, choose one and submit a vote from their phones without stepping away from the event.",
      "The experience needed to keep every option clear while giving the organizers one consistent way to collect the audience decision.",
    ],
    moves: [
      {
        number: "01",
        title: "Four duos. One clear choice.",
        body: "Laura Spoya with Siete Sopas, Phillip Chu Joy with Bao, El Cholo Mena with Fumanchú and Vicente Visla with Flama Pizzería appeared in one comparable voting flow.",
      },
      {
        number: "02",
        title: "A mobile-first event flow.",
        body: "The path from opening the experience to confirming a vote stayed short, direct and easy to use during the festival.",
      },
      {
        number: "03",
        title: "One source for the audience decision.",
        body: "The voting system gave Filo a structured way to collect the public choice and determine the winning team.",
      },
    ],
    outcomeTitle: "A voting system that turned attendance into participation.",
    outcome:
      "The public did more than watch the Foodies competition: it chose the winner. Laura Spoya's team received the audience vote at the festival.",
    pullQuote: "The public did not only watch the competition. It decided it.",
    shift: { before: "An audience", after: "The jury" },
    next: "ultimate-agencia",
  },
  "ultimate-agencia": {
    slug: "ultimate-agencia",
    client: "ULTIMATE AGENCIA",
    loaderCopy: "ULTIMATE AGENCIA\nA community took the stage.",
    year: "2023",
    service: "Awards Experience",
    title: "Peru's streaming community got an awards show of its own.",
    description:
      "We partnered with Ultimate Agencia to create the digital experience for the inaugural Luminy Awards, bringing creators, categories and community participation into one coherent platform.",
    theme: "case-study-ultimate-theme text-foreground",
    ogImage: "og-cover.jpg",
    silk: {
      color: "#635BFF",
      speed: 3.5,
      scale: 1,
      noiseIntensity: 0.28,
      rotation: -0.25,
    },
    facts: [
      ["Year", "2023"],
      ["Event", "Luminy Awards"],
      ["Contribution", "Product / Design / Engineering"],
    ],
    premise:
      "Digital communities deserve institutions built in their language.",
    premiseDescription:
      "Luminy Awards emerged from Ultimate Agencia, ElZeein and Peru's Twitch community to recognize the creators shaping the local streaming scene.",
    challengeTitle:
      "Turning a fast-moving online community into a credible awards experience.",
    challenge: [
      "The first edition needed to make creators and categories easy to discover while moving the community from recognition to participation.",
      "The digital experience had to support a live event, carry the energy of streaming culture and keep the awards clear at every step.",
    ],
    moves: [
      {
        number: "01",
        title: "A system for creators and categories.",
        body: "Nominees, disciplines and award categories became one structure the community could quickly navigate and understand.",
      },
      {
        number: "02",
        title: "Participation designed for the community.",
        body: "The experience made it simple to move from discovering the nominees to taking part from any device.",
      },
      {
        number: "03",
        title: "A digital layer for the live show.",
        body: "The product connected the energy before the ceremony with the moment more than 130 members of the community gathered in person.",
      },
    ],
    outcomeTitle:
      "An inaugural awards experience that gave Peru's streaming community a stage of its own.",
    outcome:
      "Luminy Awards brought together more than 130 streamers, vtubers, gamers and community members around 15 categories in its first edition.",
    pullQuote: "A digital community became a live institution.",
    shift: { before: "A growing community", after: "Its own awards show" },
    next: "pchujoy",
  },
};

const caseStudiesEs = {
  pchujoy: {
    loaderCopy: "PCHUJOY\nDe creador a plataforma.",
    service: "Plataforma para creadores",
    title: "De un creador a una plataforma completa.",
    description:
      "Diseñamos y construimos una plataforma de suscripción capaz de sostener un modelo de negocio repetible más allá de un solo creador.",
    facts: [
      ["Año", "2025"],
      ["Enfoque", "Economía de creadores"],
      ["Contribución", "Estrategia / Producto / Diseño / Ingeniería"],
    ],
    premise:
      "Los grandes creadores no deberían depender de operaciones manuales.",
    premiseDescription:
      "Las audiencias que crecen necesitan productos capaces de superar hojas de cálculo, formularios y flujos repetitivos.",
    challengeTitle:
      "Phillip Chu Joy tenía más que una audiencia. Tenía una oportunidad de negocio.",
    challenge: [
      "El reto no era crear otra plataforma de sorteos. Era diseñar una infraestructura capaz de sostener suscripciones, campañas recurrentes y futuros creadores dentro del mismo ecosistema.",
    ],
    media: {
      challenge: {
        src: phillipPhoto,
        alt: "Phillip Chu Joy sosteniendo un videojuego frente a varias consolas PlayStation 5.",
        caption: "Phillip Chu Joy",
        className: "object-[58%_center]",
      },
    },
    moves: [
      {
        number: "01",
        title: "Arquitectura centrada en suscripciones.",
        body: "Cada interacción fue diseñada alrededor de membresías recurrentes, no de campañas aisladas.",
      },
      {
        number: "02",
        title: "Escala para múltiples creadores.",
        body: "La plataforma podía incorporar nuevos creadores sin tener que rediseñar el producto.",
      },
      {
        number: "03",
        title: "Automatización operativa.",
        body: "Las campañas, suscripciones y gestión de participantes se volvieron repetibles en lugar de manuales.",
      },
    ],
    outcomeTitle:
      "Un producto que convirtió el negocio de un creador en una plataforma digital escalable.",
    outcome:
      "Lo que comenzó como la plataforma de suscripción de Phillip Chu Joy se convirtió en un producto escalable capaz de sostener un ecosistema de creadores mucho mayor.",
    pullQuote:
      "El producto dejó de girar alrededor de un creador. Se convirtió en una plataforma.",
    shift: {
      before: "Un creador",
      after: "Una plataforma escalable",
    },
  },
  samay: {
    loaderCopy: "SAMAY\nUna experiencia para recordar.",
    service: "Experiencia digital",
    title: "El engagement no debería sentirse como marketing.",
    description:
      "Una experiencia interactiva que convirtió la participación en algo que las personas podían disfrutar y recordar.",
    facts: [
      ["Mandato", "Experiencia interactiva"],
      ["Enfoque", "Participación y engagement"],
      ["Contribución", "Estrategia / Producto / Diseño / Ingeniería"],
    ],
    premise: "Las personas recuerdan experiencias, no campañas.",
    challengeTitle:
      "Las activaciones tradicionales generan atención por un día.",
    challenge: [
      "Queríamos que las personas permanecieran, participaran y disfrutaran. La decisión fue convertir la interacción en el producto, no colocarla alrededor de una campaña.",
    ],
    moves: [
      {
        number: "01",
        title: "Interacción en tiempo real.",
        body: "Cada respuesta transformaba la experiencia de inmediato y mantenía la participación visible y activa.",
      },
      {
        number: "02",
        title: "Juego alrededor de la participación.",
        body: "Mecánicas simples convirtieron la atención pasiva en una experiencia que las personas querían continuar.",
      },
      {
        number: "03",
        title: "Experiencia multidispositivo fluida.",
        body: "La interacción se mantuvo coherente entre pantallas, contextos y momentos de participación.",
      },
    ],
    outcomeTitle:
      "Una experiencia digital donde el engagement se convirtió en el producto.",
    outcome:
      "SAMAY reemplazó la atención pasajera por una participación que las personas podían sentir, comprender y recordar.",
    pullQuote: "La campaña se convirtió en una experiencia.",
    shift: { before: "Una campaña", after: "Una experiencia" },
  },
  "axo-longevity": {
    loaderCopy: "AXO LONGEVITY\nInteligencia para mejores decisiones clínicas.",
    service: "Plataforma de salud preventiva",
    title: "La IA solo es útil cuando encaja en flujos clínicos reales.",
    description:
      "Biomarcadores, laboratorios, flujos médicos y operaciones conectados en una plataforma inteligente.",
    facts: [
      ["Mandato", "Plataforma de salud integrada"],
      ["Enfoque", "Salud preventiva"],
      ["Contribución", "Estrategia / Producto / Diseño / Ingeniería"],
    ],
    premise: "La salud preventiva depende de información, no de intuición.",
    challengeTitle: "La información clínica vivía en sistemas desconectados.",
    challenge: [
      "El reto no era agregar IA. Era volverla útil entre biomarcadores, integraciones de laboratorio, decisiones médicas y flujos operativos.",
    ],
    moves: [
      {
        number: "01",
        title: "Datos clínicos unificados.",
        body: "Biomarcadores, resultados de laboratorio y contexto del paciente se convirtieron en una fuente de verdad coherente.",
      },
      {
        number: "02",
        title: "Automatización operativa.",
        body: "La coordinación repetitiva pasó a flujos confiables que redujeron fricción para los equipos de atención.",
      },
      {
        number: "03",
        title: "IA consciente del contexto.",
        body: "La inteligencia apareció dentro del contexto clínico donde podía apoyar el criterio en lugar de crear otra tarea.",
      },
    ],
    outcomeTitle:
      "Una plataforma donde la IA ayuda a los profesionales de salud en lugar de generar más fricción operativa.",
    outcome:
      "AXO convierte la atención preventiva fragmentada en un sistema conectado donde la información llega al profesional correcto dentro del contexto correcto.",
    pullQuote:
      "La IA se convirtió en parte del flujo, no en otra funcionalidad.",
    shift: { before: "Sistemas desconectados", after: "Un flujo clínico" },
  },
  filo: {
    loaderCopy: "FILO\nEl público tomó la decisión.",
    service: "Experiencia de votación en vivo",
    title: "El público se convirtió en el jurado.",
    description:
      "Diseñamos y construimos el sistema de votación en vivo para Foodies Food Festival, conectando a cuatro creadores, cuatro restaurantes y el público en una experiencia móvil.",
    facts: [
      ["Año", "2025"],
      ["Evento", "Foodies Food Festival"],
      ["Contribución", "Producto / Diseño / Ingeniería"],
    ],
    premise:
      "Una competencia en vivo solo funciona cuando el público puede participar.",
    premiseDescription:
      "Filo Foodies reunió a cuatro creadores con cuatro restaurantes e invitó a los asistentes a elegir la dupla ganadora durante el festival.",
    challengeTitle:
      "Votar tenía que sentirse natural en medio de un festival en vivo.",
    challenge: [
      "Los asistentes debían comprender las cuatro duplas, elegir una y enviar su voto desde el celular sin desconectarse del evento.",
      "La experiencia debía mantener cada opción clara y ofrecer a los organizadores una forma consistente de recoger la decisión del público.",
    ],
    moves: [
      {
        number: "01",
        title: "Cuatro duplas. Una elección clara.",
        body: "Laura Spoya con Siete Sopas, Phillip Chu Joy con Bao, El Cholo Mena con Fumanchú y Vicente Visla con Flama Pizzería aparecían en un mismo flujo comparable.",
      },
      {
        number: "02",
        title: "Un flujo pensado para el celular.",
        body: "El recorrido desde abrir la experiencia hasta confirmar el voto se mantuvo corto, directo y fácil de usar durante el festival.",
      },
      {
        number: "03",
        title: "Una fuente para la decisión del público.",
        body: "El sistema dio a Filo una forma estructurada de recoger la elección de los asistentes y determinar al equipo ganador.",
      },
    ],
    outcomeTitle:
      "Un sistema de votación que convirtió asistencia en participación.",
    outcome:
      "El público hizo más que observar la competencia Foodies: eligió al ganador. El equipo de Laura Spoya recibió el voto de los asistentes durante el festival.",
    pullQuote: "El público no solo vio la competencia. La decidió.",
    shift: { before: "Una audiencia", after: "El jurado" },
  },
  "ultimate-agencia": {
    loaderCopy: "ULTIMATE AGENCIA\nUna comunidad subió al escenario.",
    service: "Experiencia de premiación",
    title: "La comunidad peruana de streaming tuvo su propia premiación.",
    description:
      "Trabajamos con Ultimate Agencia para crear la experiencia digital de la primera edición de Luminy Awards, reuniendo creadores, categorías y participación de la comunidad en una plataforma coherente.",
    facts: [
      ["Año", "2023"],
      ["Evento", "Luminy Awards"],
      ["Contribución", "Producto / Diseño / Ingeniería"],
    ],
    premise:
      "Las comunidades digitales merecen instituciones construidas en su lenguaje.",
    premiseDescription:
      "Luminy Awards nació de Ultimate Agencia, ElZeein y la comunidad de Twitch Perú para reconocer a los creadores que daban forma a la escena local de streaming.",
    challengeTitle:
      "Convertir una comunidad digital en movimiento en una experiencia de premiación creíble.",
    challenge: [
      "La primera edición debía facilitar el descubrimiento de creadores y categorías mientras llevaba a la comunidad del reconocimiento a la participación.",
      "La experiencia digital tenía que acompañar un evento en vivo, transmitir la energía de la cultura del streaming y mantener la premiación clara en cada paso.",
    ],
    moves: [
      {
        number: "01",
        title: "Un sistema para creadores y categorías.",
        body: "Nominados, disciplinas y categorías se convirtieron en una estructura que la comunidad podía recorrer y comprender rápidamente.",
      },
      {
        number: "02",
        title: "Participación diseñada para la comunidad.",
        body: "La experiencia simplificó el paso de descubrir a los nominados a formar parte desde cualquier dispositivo.",
      },
      {
        number: "03",
        title: "Una capa digital para el show en vivo.",
        body: "El producto conectó la expectativa previa con el momento en que más de 130 integrantes de la comunidad se reunieron presencialmente.",
      },
    ],
    outcomeTitle:
      "Una primera edición que le dio a la comunidad peruana de streaming un escenario propio.",
    outcome:
      "Luminy Awards reunió a más de 130 streamers, vtubers, gamers y miembros de la comunidad alrededor de 15 categorías en su primera edición.",
    pullQuote: "Una comunidad digital se convirtió en una institución en vivo.",
    shift: {
      before: "Una comunidad en crecimiento",
      after: "Su propia premiación",
    },
  },
};

const caseStudySlugs = Object.keys(caseStudies);

function getCaseStudy(slug, locale = "en") {
  const study = caseStudies[slug];
  if (!study || locale !== "es") return study;
  return { ...study, ...caseStudiesEs[slug] };
}

export { caseStudySlugs, getCaseStudy };
