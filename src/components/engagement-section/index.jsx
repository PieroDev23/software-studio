import { useTranslations } from "next-intl";
import { TerminalMeta } from "@/components/terminal-slash";
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
      className="section-frame bg-inverse text-inverse-foreground"
      aria-labelledby="engagement-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>

          <TypographyDisplay
            id="engagement-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-6xl lg:col-span-10"
          >
            {t("title")}
          </TypographyDisplay>
        </div>

        <ol className="mt-12 border-t border-inverse-border sm:mt-20">
          {stages.map((stage) => (
            <li
              data-reveal
              key={stage.number}
              className="grid border-b border-inverse-border py-8 sm:py-12 lg:grid-cols-12 lg:gap-8 lg:py-16"
            >
              <TypographyEyebrow
                tone="inverse"
                className="lg:col-span-2 lg:pt-1"
              >
                <TerminalMeta text={`${stage.number} / ${stage.label}`} />
              </TypographyEyebrow>

              <TypographyCardTitle
                as="h3"
                className="mt-8 max-w-xl lg:col-span-5 lg:mt-0"
              >
                {stage.titleLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </TypographyCardTitle>

              <p className="mt-6 max-w-xl text-base leading-6 text-inverse-muted sm:text-lg sm:leading-7 lg:col-span-5 lg:mt-0 lg:pt-1">
                {stage.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
