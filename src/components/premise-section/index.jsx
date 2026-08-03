import { useTranslations } from "next-intl";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

export default function PremiseSection() {
  const t = useTranslations("Premise");
  return (
    <section
      className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground"
      aria-labelledby="premise-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>

          <TypographyDisplay
            id="premise-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="lg:col-span-10"
          >
            {t("before")}{" "}
            <span className="text-impact-gradient">{t("highlight")}</span>
          </TypographyDisplay>
        </div>
      </div>
    </section>
  );
}
