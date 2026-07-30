import { TerminalMeta } from "@/components/terminal-slash";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

const stages = [
  {
    number: "01",
    label: "Decide",
    titleLines: ["Find the decision", "that matters."],
    description:
      "We isolate the real constraint, align the room and define what must be true.",
  },
  {
    number: "02",
    label: "Shape",
    titleLines: ["Turn conviction", "into a system."],
    description:
      "Strategy, product and technology become one direction the team can act on.",
  },
  {
    number: "03",
    label: "Deliver",
    titleLines: ["Stay until it works", "in the real world."],
    description:
      "Senior partners remain close through the hard tradeoffs, build and release.",
  },
];

function EngagementSection() {
  return (
    <section
      className="section-frame bg-inverse text-inverse-foreground"
      aria-labelledby="engagement-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            How we engage
          </TypographyEyebrow>

          <TypographyDisplay
            id="engagement-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-6xl lg:col-span-10"
          >
            From hard decision to shipped product.
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid border-t border-inverse-border sm:mt-20 lg:grid-cols-3">
          {stages.map((stage) => (
            <article
              data-reveal
              key={stage.number}
              className="flex min-h-[22rem] flex-col border-b border-inverse-border p-5 sm:min-h-[26rem] sm:p-8 lg:border-r lg:last:border-r-0"
            >
              <TypographyEyebrow tone="inverse">
                <TerminalMeta text={`${stage.number} / ${stage.label}`} />
              </TypographyEyebrow>

              <div className="mt-auto pt-16">
                <h3 className="max-w-[13ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[clamp(2.25rem,3vw,3.5rem)] sm:leading-[1.04]">
                  {stage.titleLines.map((line) => (
                    <span key={line} className="block sm:whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </h3>
                <p className="mt-6 max-w-sm text-base leading-6 text-inverse-muted sm:text-lg sm:leading-7">
                  {stage.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default EngagementSection;
