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

        <div className="mt-12 grid border-t border-inverse-border sm:mt-20 lg:grid-cols-3">
          {stages.map((stage) => (
            <article
              data-reveal
              key={stage.number}
              className="flex min-h-[22rem] flex-col border-b border-inverse-border px-0 py-8 sm:min-h-[26rem] sm:p-8 lg:border-r lg:last:border-r-0"
            >
              <TypographyEyebrow tone="inverse">
                <TerminalMeta text={`${stage.number} / ${stage.label}`} />
              </TypographyEyebrow>

              <div className="mt-auto pt-16">
                <TypographyCardTitle>
                  {stage.titleLines.map((line) => (
                    <span key={line} className="block whitespace-nowrap">
                      {line}
                    </span>
                  ))}
                </TypographyCardTitle>
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
