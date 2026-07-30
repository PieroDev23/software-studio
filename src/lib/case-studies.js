const caseStudies = {
  "atlas-health": {
    slug: "atlas-health",
    client: "Atlas Health",
    year: "2026",
    service: "Product + Engineering",
    title: "One operating system for preventive care.",
    description:
      "A unified patient experience connecting diagnostics, coaching, clinical workflows and longitudinal health data.",
    theme: "bg-accent text-foreground",
    silk: {
      color: "#5227FF",
      speed: 4,
      scale: 1,
      noiseIntensity: 0.22,
      rotation: -0.15,
    },
    facts: [
      ["Mandate", "Product system"],
      ["Focus", "Preventive care"],
      ["Contribution", "Strategy / Design / Engineering"],
    ],
    premise:
      "Preventive care breaks when every participant sees a different version of the patient.",
    challengeTitle: "Care was connected in theory. Fragmented in practice.",
    challenge: [
      "Diagnostics lived in one workflow, coaching in another and clinical decisions somewhere else. Patients repeated context while care teams reconstructed the story by hand.",
      "The challenge was not another dashboard. It was creating one operating model that could hold every decision without flattening the nuance of care.",
    ],
    moves: [
      {
        number: "01",
        title: "One patient model.",
        body: "We organized the product around a longitudinal health record shared by patients, coaches and clinicians.",
      },
      {
        number: "02",
        title: "Decisions, not data dumps.",
        body: "Every surface prioritizes the next meaningful action instead of exposing another layer of raw information.",
      },
      {
        number: "03",
        title: "A system built to evolve.",
        body: "Modular workflows let new programs and clinical protocols enter without rebuilding the product around them.",
      },
    ],
    outcomeTitle: "One connected experience. Fewer gaps in care.",
    outcome:
      "The resulting system gives every participant the context they need while preserving a coherent journey for the patient, from first signal to sustained change.",
    pullQuote:
      "The product stopped documenting care and started moving it forward.",
    shift: {
      before: "Fragmented workflows",
      after: "One care model",
    },
    next: "northstar",
  },
  northstar: {
    slug: "northstar",
    client: "Northstar",
    year: "2025",
    service: "Strategy + Design",
    title: "Enterprise planning, made immediate.",
    description:
      "Critical planning moved from scattered tools into one decisive workspace.",
    theme: "bg-primary text-primary-foreground",
    silk: {
      color: "#242429",
      speed: 3,
      scale: 1,
      noiseIntensity: 0.3,
      rotation: 0.25,
    },
    facts: [
      ["Mandate", "Product direction"],
      ["Focus", "Enterprise planning"],
      ["Contribution", "Strategy / Research / Design"],
    ],
    premise:
      "A planning tool only creates value when a team can see the consequence of a decision immediately.",
    challengeTitle: "The plan was everywhere. Confidence was nowhere.",
    challenge: [
      "Planning happened across spreadsheets, presentations and disconnected specialist tools. Every review began by reconciling information before anyone could discuss the decision itself.",
      "Northstar needed a product language that could make complex dependencies legible without turning expert work into a rigid workflow.",
    ],
    moves: [
      {
        number: "01",
        title: "Start with the decision.",
        body: "We reframed the information architecture around the questions leaders actually ask during planning.",
      },
      {
        number: "02",
        title: "Make consequence visible.",
        body: "Scenarios reveal tradeoffs and downstream effects while a decision is still being shaped.",
      },
      {
        number: "03",
        title: "Design for the room.",
        body: "The interface works as both an individual planning environment and a shared surface for decisive conversations.",
      },
    ],
    outcomeTitle: "From fragmented planning to shared conviction.",
    outcome:
      "Northstar became one focused environment where teams can frame options, understand consequence and leave the room with a decision everyone recognizes.",
    pullQuote:
      "Planning became a conversation about the future instead of a debate about the file.",
    shift: {
      before: "Scattered planning",
      after: "Shared conviction",
    },
    next: "prism",
  },
  prism: {
    slug: "prism",
    client: "Prism",
    year: "2026",
    service: "0→1 Product",
    title: "Financial clarity for independent teams.",
    description:
      "Cash, commitments and runway turned into decisions teams can trust.",
    theme: "bg-inverse text-inverse-foreground",
    silk: {
      color: "#FFFFFF",
      speed: 4,
      scale: 1,
      noiseIntensity: 0.25,
      rotation: -0.3,
    },
    facts: [
      ["Mandate", "New product creation"],
      ["Focus", "Financial clarity"],
      ["Contribution", "Definition / Design / Prototype"],
    ],
    premise:
      "Small teams do not need more financial reporting. They need to know what is safe to do next.",
    challengeTitle: "The numbers were available. The answer was not.",
    challenge: [
      "Independent teams could see balances and transactions but still struggled to understand commitments, true runway and the consequence of a new hire or investment.",
      "Prism had to translate financial complexity into confidence without pretending uncertainty did not exist.",
    ],
    moves: [
      {
        number: "01",
        title: "Model real commitments.",
        body: "We moved beyond account balances to show the obligations and assumptions that shape available cash.",
      },
      {
        number: "02",
        title: "Answer the next question.",
        body: "The product turns financial signals into direct, contextual guidance for everyday operating decisions.",
      },
      {
        number: "03",
        title: "Calm by design.",
        body: "A quiet visual system makes risk visible without making every fluctuation feel like an emergency.",
      },
    ],
    outcomeTitle: "A calmer way to understand what comes next.",
    outcome:
      "Prism gives independent teams a shared view of cash, commitments and possibility, so financial conversations can end in action rather than anxiety.",
    pullQuote:
      "Clarity arrived before the spreadsheet could become another meeting.",
    shift: {
      before: "Financial noise",
      after: "Actionable clarity",
    },
    next: "atlas-health",
  },
};

const caseStudiesEs = {
  "atlas-health": {
    service: "Producto + Ingeniería",
    title: "Prevención en un solo sistema.",
    description:
      "Una experiencia unificada que conecta diagnósticos, acompañamiento, flujos clínicos y datos longitudinales de salud.",
    facts: [
      ["Mandato", "Sistema de producto"],
      ["Enfoque", "Atención preventiva"],
      ["Contribución", "Estrategia / Diseño / Ingeniería"],
    ],
    premise:
      "La atención preventiva se rompe cuando cada participante ve una versión distinta del paciente.",
    challengeTitle:
      "La atención estaba conectada en teoría. Fragmentada en la práctica.",
    challenge: [
      "Los diagnósticos vivían en un flujo, el acompañamiento en otro y las decisiones clínicas en algún lugar más. Los pacientes repetían el contexto mientras los equipos reconstruían la historia a mano.",
      "El reto no era crear otro dashboard. Era construir un modelo operativo capaz de sostener cada decisión sin simplificar los matices de la atención.",
    ],
    moves: [
      {
        number: "01",
        title: "Un modelo de paciente.",
        body: "Organizamos el producto alrededor de un historial longitudinal compartido por pacientes, coaches y especialistas.",
      },
      {
        number: "02",
        title: "Decisiones, no volcados de datos.",
        body: "Cada superficie prioriza la siguiente acción significativa en lugar de exponer otra capa de información cruda.",
      },
      {
        number: "03",
        title: "Un sistema que puede evolucionar.",
        body: "Los flujos modulares permiten sumar programas y protocolos clínicos sin reconstruir el producto.",
      },
    ],
    outcomeTitle: "Una experiencia conectada. Menos vacíos en la atención.",
    outcome:
      "El sistema resultante entrega a cada participante el contexto que necesita y conserva un recorrido coherente para el paciente, desde la primera señal hasta un cambio sostenido.",
    pullQuote:
      "El producto dejó de documentar la atención y empezó a impulsarla.",
    shift: { before: "Flujos fragmentados", after: "Un modelo de atención" },
  },
  northstar: {
    service: "Estrategia + Diseño",
    title: "Planificación clara. Decisiones rápidas.",
    description:
      "La planificación crítica pasó de herramientas dispersas a un espacio de trabajo decisivo.",
    facts: [
      ["Mandato", "Dirección de producto"],
      ["Enfoque", "Planificación empresarial"],
      ["Contribución", "Estrategia / Investigación / Diseño"],
    ],
    premise:
      "Una herramienta de planificación solo crea valor cuando el equipo puede ver inmediatamente la consecuencia de una decisión.",
    challengeTitle: "El plan estaba en todas partes. La confianza, en ninguna.",
    challenge: [
      "La planificación ocurría entre hojas de cálculo, presentaciones y herramientas especializadas desconectadas. Cada revisión comenzaba conciliando información antes de poder discutir la decisión.",
      "Northstar necesitaba un lenguaje de producto que hiciera legibles dependencias complejas sin convertir el trabajo experto en un flujo rígido.",
    ],
    moves: [
      {
        number: "01",
        title: "Empezar por la decisión.",
        body: "Replanteamos la arquitectura de información alrededor de las preguntas que los líderes hacen al planificar.",
      },
      {
        number: "02",
        title: "Hacer visible la consecuencia.",
        body: "Los escenarios revelan decisiones difíciles y efectos posteriores mientras la decisión todavía está tomando forma.",
      },
      {
        number: "03",
        title: "Diseñar para la conversación.",
        body: "La interfaz funciona como entorno individual y como superficie compartida para conversaciones decisivas.",
      },
    ],
    outcomeTitle: "De planificación fragmentada a convicción compartida.",
    outcome:
      "Northstar se convirtió en un entorno enfocado donde los equipos pueden formular opciones, entender consecuencias y salir de la reunión con una decisión reconocible para todos.",
    pullQuote:
      "Planificar se volvió una conversación sobre el futuro, no un debate sobre el archivo.",
    shift: { before: "Planificación dispersa", after: "Convicción compartida" },
  },
  prism: {
    service: "Producto 0→1",
    title: "Finanzas claras. Decisiones firmes.",
    description:
      "Caja, compromisos y runway convertidos en decisiones confiables.",
    facts: [
      ["Mandato", "Producto desde cero"],
      ["Enfoque", "Claridad financiera"],
      ["Contribución", "Definición / Diseño / Prototipo"],
    ],
    premise:
      "Los equipos pequeños no necesitan más reportes financieros. Necesitan saber qué pueden hacer a continuación con seguridad.",
    challengeTitle: "Los números estaban disponibles. La respuesta no.",
    challenge: [
      "Los equipos podían ver saldos y transacciones, pero aún les costaba entender compromisos, runway real y la consecuencia de una nueva contratación o inversión.",
      "Prism debía traducir complejidad financiera en confianza sin fingir que la incertidumbre no existía.",
    ],
    moves: [
      {
        number: "01",
        title: "Modelar compromisos reales.",
        body: "Fuimos más allá de los saldos para mostrar las obligaciones y supuestos que determinan la caja disponible.",
      },
      {
        number: "02",
        title: "Responder la siguiente pregunta.",
        body: "El producto convierte señales financieras en orientación directa y contextual para decisiones operativas cotidianas.",
      },
      {
        number: "03",
        title: "Calma desde el diseño.",
        body: "Un sistema visual sereno hace visible el riesgo sin convertir cada fluctuación en una emergencia.",
      },
    ],
    outcomeTitle: "Una forma más serena de entender lo que sigue.",
    outcome:
      "Prism ofrece una vista compartida de caja, compromisos y posibilidades para que las conversaciones financieras terminen en acción, no en ansiedad.",
    pullQuote:
      "La claridad llegó antes de que la hoja de cálculo se convirtiera en otra reunión.",
    shift: { before: "Ruido financiero", after: "Claridad accionable" },
  },
};

const caseStudySlugs = Object.keys(caseStudies);

function getCaseStudy(slug, locale = "en") {
  const study = caseStudies[slug];
  if (!study || locale !== "es") return study;
  return { ...study, ...caseStudiesEs[slug] };
}

export { caseStudies, caseStudySlugs, getCaseStudy };
