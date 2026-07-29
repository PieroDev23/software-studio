import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function PremiseSection() {
  return (
    <section
      className="section-frame section-grid section-grid-light flex items-center bg-inverse text-inverse-foreground"
      aria-labelledby="premise-title"
    >
      <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-8">
        <TypographyEyebrow tone="inverse" className="lg:col-span-2">
          The premise
        </TypographyEyebrow>

        <TypographyDisplay
          id="premise-title"
          as="h2"
          size="statement"
          tone="inverse"
          className="lg:col-span-10"
        >
          Small teams can create{" "}
          <span className="text-impact-gradient">outsized impact</span> when
          senior people stay close to the work.
        </TypographyDisplay>
      </div>
    </section>
  );
}

export default PremiseSection;
