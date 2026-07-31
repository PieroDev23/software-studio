const caseStudies = {
  pchujoy: {
    slug: "pchujoy",
    client: "PCHUJOY",
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
    slug: "samay",
    client: "SAMAY",
    year: "2025",
    service: "Digital Experience",
    title: "Engagement should not feel like marketing.",
    description:
      "An interactive experience that transformed participation into something people could enjoy and remember.",
    theme: "bg-primary text-primary-foreground",
    silk: {
      color: "#242429",
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
    year: "2026",
    service: "Preventive Health Platform",
    title: "AI is only useful when it fits into real clinical workflows.",
    description:
      "Biomarkers, laboratories, medical workflows and operations connected in one intelligent platform.",
    theme: "bg-inverse text-inverse-foreground",
    silk: {
      color: "#FFFFFF",
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
    next: "pchujoy",
  },
};

const caseStudiesEs = {
  pchujoy: {
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
};

const caseStudySlugs = Object.keys(caseStudies);

function getCaseStudy(slug, locale = "en") {
  const study = caseStudies[slug];
  if (!study || locale !== "es") return study;
  return { ...study, ...caseStudiesEs[slug] };
}

export { caseStudies, caseStudySlugs, getCaseStudy };
