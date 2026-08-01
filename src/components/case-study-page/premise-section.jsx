import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function PremiseSection({ study, label }) {
  return (
    <section className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground">
      <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-8">
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
            {study.premise}
          </TypographyDisplay>
          {study.premiseDescription ? (
            <p
              data-reveal
              className="mt-8 max-w-3xl text-lg leading-8 text-inverse-muted sm:mt-10 sm:text-xl sm:leading-9"
            >
              {study.premiseDescription}
            </p>
          ) : null}
        </div>
      </div>
    </section>
  );
}

export { PremiseSection };
