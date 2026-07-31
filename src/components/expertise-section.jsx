import { useTranslations } from "next-intl";

import { CtaLink } from "@/components/ui/cta-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function ExpertiseSection() {
  const t = useTranslations("Expertise");
  const items = t.raw("items");

  return (
    <section
      className="section-frame section-grid section-grid-light bg-background text-foreground"
      aria-labelledby="expertise-title"
    >
      <div className="content-container">
        <div className="grid gap-8 lg:grid-cols-12">
          <TypographyEyebrow className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>
          <div className="lg:col-span-10">
            <TypographyDisplay
              id="expertise-title"
              as="h2"
              size="statement"
              className="max-w-6xl"
            >
              {t("title")}
            </TypographyDisplay>
            <p
              data-reveal
              className="mt-8 max-w-2xl text-lg leading-7 text-muted-foreground sm:text-xl sm:leading-8"
            >
              {t("intro")}
            </p>
          </div>
        </div>

        <div className="mt-12 grid border-l border-t border-border sm:mt-20 md:grid-cols-2">
          {items.map((item, index) => (
            <article
              key={item.title}
              data-reveal
              className="min-h-64 border-b border-r border-border p-6 sm:p-8"
            >
              <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-12 max-w-md text-3xl font-medium leading-[1.1] tracking-[-0.03em] sm:text-4xl sm:leading-[1.04]">
                {item.title}
              </h3>
              <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div data-reveal className="mt-8 flex justify-end">
          <CtaLink href="#contacto">{t("cta")}</CtaLink>
        </div>
      </div>
    </section>
  );
}

export default ExpertiseSection;
