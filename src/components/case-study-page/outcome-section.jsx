import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function OutcomeSection({ study, label }) {
  return (
    <section className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground">
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
        <TypographyEyebrow tone="inverse" className="lg:col-span-2">
          {label}
        </TypographyEyebrow>
        <div className="lg:col-span-10">
          <TypographyDisplay
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-6xl"
          >
            {study.outcomeTitle}
          </TypographyDisplay>
          <p className="mt-10 max-w-3xl border-t border-inverse-border pt-8 text-lg leading-8 text-inverse-muted sm:mt-16 sm:pt-10 sm:text-xl sm:leading-9">
            {study.outcome}
          </p>
        </div>
      </div>
    </section>
  );
}

export { OutcomeSection };
