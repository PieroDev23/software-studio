import { TerminalMeta } from "@/components/terminal-slash";
import { TypographyEyebrow } from "@/components/ui/typography";

const capabilities = [
  {
    number: "01",
    label: "Engineering",
    titleLines: ["Build for", "the real world."],
    services: [
      "Production-grade product engineering",
      "Architecture under real constraints",
      "AI that earns its place",
      "Platforms ready for what comes next",
    ],
  },
  {
    number: "02",
    label: "Design",
    titleLines: ["Make complexity", "feel obvious."],
    services: [
      "Product experience & interaction",
      "Systems that scale decisions",
      "Rapid prototyping",
      "Brand translated into behavior",
    ],
  },
  {
    number: "03",
    label: "Strategy",
    titleLines: ["Turn ambiguity", "into action."],
    services: [
      "Product direction & definition",
      "Technical and product diligence",
      "Roadmaps tied to outcomes",
      "Senior leadership in the room",
    ],
  },
];

function CapabilityMark() {
  return (
    <div className="relative size-12" aria-hidden="true">
      <span className="absolute left-0 top-0 size-5 bg-inverse-foreground" />
      <span className="absolute left-4 top-3 size-5 bg-capability-purple" />
      <span className="absolute left-0 top-7 size-5 bg-inverse-muted" />
    </div>
  );
}

function CapabilitiesGrid() {
  return (
    <div className="mt-12 grid w-full border-t border-inverse-border text-inverse-foreground sm:mt-20 lg:mt-24 lg:grid-cols-3">
      {capabilities.map((capability) => (
        <article
          data-reveal
          key={capability.number}
          className="flex flex-col border-b border-inverse-border p-5 sm:min-h-[32rem] sm:p-8 lg:border-r lg:last:border-r-0"
        >
          <TypographyEyebrow tone="inverse">
            <TerminalMeta text={`${capability.number} / ${capability.label}`} />
          </TypographyEyebrow>

          <div className="mt-6 sm:mt-10">
            <CapabilityMark />
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:mt-auto sm:gap-8 sm:pt-16">
            <h2 className="text-[1.75rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(1.875rem,3vw,3.5rem)] sm:leading-[1.04]">
              {capability.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </h2>
            <ul className="flex flex-col gap-2 text-base leading-6 text-inverse-muted">
              {capability.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CapabilitiesGrid;
