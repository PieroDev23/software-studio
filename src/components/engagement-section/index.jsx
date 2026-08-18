import { useTranslations } from "next-intl";
import {
  TypographyCardTitle,
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

export default function EngagementSection() {
  const t = useTranslations("Engagement");
  const stages = t.raw("items");
  return (
    <section
      data-engagement-section
      className="section-frame relative overflow-hidden bg-inverse text-inverse-foreground"
      aria-labelledby="engagement-title"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-80 size-180 rounded-full bg-accent/8 blur-3xl"
      />

      <div className="content-container relative z-10">
        <div
          data-parallax-engagement-header
          className="grid gap-10 lg:grid-cols-12 lg:gap-8"
        >
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>

          <div className="lg:col-span-10">
            <TypographyDisplay
              id="engagement-title"
              as="h2"
              size="statement"
              tone="inverse"
              className="max-w-6xl"
            >
              {t("title")}
            </TypographyDisplay>
            <p
              data-reveal
              className="mt-8 max-w-2xl text-lg leading-7 text-inverse-muted sm:text-xl sm:leading-8"
            >
              {t("intro")}
            </p>
          </div>
        </div>

        <ol data-engagement-timeline className="relative mt-12 sm:mt-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute top-10 bottom-10 left-6 z-10 w-px bg-inverse-border sm:top-12 sm:bottom-12 sm:left-10 lg:top-14 lg:bottom-14"
          >
            <span
              data-engagement-progress
              className="block h-full origin-top bg-accent"
            />
          </div>

          {stages.map((stage) => (
            <li
              data-reveal
              data-engagement-row
              key={stage.number}
              className="relative grid min-h-80 items-center gap-8 border-b border-inverse-border/70 py-12 pr-2 pl-14 last:border-b-0 sm:py-16 sm:pr-4 sm:pl-20 lg:grid-cols-12 lg:gap-10 lg:py-20 lg:pr-6 lg:pl-24"
            >
              <span
                data-engagement-node
                aria-hidden="true"
                className="absolute top-1/2 left-6 z-20 size-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent bg-inverse shadow-[0_0_20px_color-mix(in_oklab,var(--color-accent)_35%,transparent)] sm:left-10"
              >
                <span
                  data-engagement-pulse
                  className="absolute inset-0 rounded-full border border-accent opacity-0"
                />
                <span
                  data-engagement-dot
                  className="absolute inset-0 m-auto size-1.5 rounded-full bg-accent"
                />
              </span>

              <div
                data-engagement-number
                className="flex items-end gap-4 lg:col-span-3"
              >
                <span className="text-6xl leading-none font-light tracking-[-0.04em] text-accent sm:text-7xl lg:text-8xl">
                  {stage.number}
                </span>
                <TypographyEyebrow tone="inverse" className="pb-1 sm:pb-2">
                  {stage.label}
                </TypographyEyebrow>
              </div>

              <TypographyCardTitle
                as="h3"
                data-engagement-title
                className="max-w-xl text-4xl leading-11 sm:text-5xl sm:leading-15 lg:col-span-5"
              >
                {stage.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </TypographyCardTitle>

              <p
                data-engagement-description
                className="max-w-xl text-base leading-7 text-inverse-muted sm:text-lg sm:leading-8 lg:col-span-4"
              >
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
