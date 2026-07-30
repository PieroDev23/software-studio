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
      "The resulting system gives every participant the context they need while preserving a coherent journey for the patient—from first signal to sustained change.",
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
      "Planning became a conversation about the future—not a debate about the file.",
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
      ["Mandate", "Zero-to-one product"],
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
      "Prism gives independent teams a shared view of cash, commitments and possibility—so financial conversations can end in action rather than anxiety.",
    pullQuote:
      "Clarity arrived before the spreadsheet could become another meeting.",
    shift: {
      before: "Financial noise",
      after: "Actionable clarity",
    },
    next: "atlas-health",
  },
};

const caseStudySlugs = Object.keys(caseStudies);

function getCaseStudy(slug) {
  return caseStudies[slug];
}

export { caseStudies, caseStudySlugs, getCaseStudy };
