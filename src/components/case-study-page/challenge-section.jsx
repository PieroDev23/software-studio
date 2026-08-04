import { TypographyEyebrow } from "@/components/ui/typography";
import { StoryMediaFrame } from "./story-media-section";

function ChallengeSection({ study, label, translate }) {
  return (
    <section className="section-frame bg-inverse text-inverse-foreground">
      <div className="content-container grid gap-12 lg:grid-cols-[minmax(0,2fr)_minmax(18rem,1fr)] lg:gap-16 xl:gap-24">
        <div>
          <TypographyEyebrow tone="inverse">{label}</TypographyEyebrow>
          <h2 className="mt-10 max-w-[20ch] text-4xl leading-11 font-medium tracking-[0.030rem] sm:mt-12 sm:text-5xl md:leading-15 lg:text-6xl lg:leading-20 xl:text-7xl">
            {study.challengeTitle}
          </h2>
          <div className="mt-10 grid gap-8 border-t border-inverse-border pt-8 text-lg leading-8 text-inverse-muted sm:mt-16 sm:pt-10 sm:text-xl sm:leading-9">
            {study.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
        <StoryMediaFrame
          study={study}
          translate={translate}
          id="challenge"
          index={1}
          tone="inverse"
          aspect="aspect-[4/5]"
          sizes="(max-width: 1024px) 100vw, 34vw"
          className="w-full"
        />
      </div>
    </section>
  );
}

export { ChallengeSection };
