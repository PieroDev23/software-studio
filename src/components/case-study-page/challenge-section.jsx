import { TypographyEyebrow } from "@/components/ui/typography";

function ChallengeSection({ study, label }) {
  return (
    <section className="section-frame bg-inverse text-inverse-foreground">
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
        <TypographyEyebrow tone="inverse" className="lg:col-span-2">
          {label}
        </TypographyEyebrow>
        <div className="lg:col-span-9 lg:col-start-4">
          <h2 className="max-w-[20ch] text-4xl leading-11 font-medium tracking-[0.030rem] sm:text-5xl md:leading-15 lg:text-6xl lg:leading-20 xl:text-7xl">
            {study.challengeTitle}
          </h2>
          <div className="mt-10 grid gap-8 border-t border-inverse-border pt-8 text-lg leading-8 text-inverse-muted sm:mt-16 sm:grid-cols-2 sm:pt-10 sm:text-xl sm:leading-9">
            {study.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export { ChallengeSection };
