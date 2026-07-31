import { useTranslations } from "next-intl";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function FaqSection() {
  const t = useTranslations("Faq");
  const questions = t.raw("items");
  return (
    <section
      className="section-frame section-grid section-grid-dark bg-accent text-foreground"
      aria-labelledby="faq-title"
    >
      <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <TypographyEyebrow>{t("eyebrow")}</TypographyEyebrow>
          <TypographyDisplay
            id="faq-title"
            as="h2"
            size="statement"
            className="mt-8 max-w-full sm:mt-12 sm:max-w-[8ch]"
          >
            {t("title")}
          </TypographyDisplay>
        </div>

        <div className="border-t border-border lg:col-span-7">
          {questions.map((item, index) => (
            <details
              data-reveal
              name="faq"
              key={item.question}
              className="group border-b border-border"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-8 py-6 marker:hidden sm:py-8 [&::-webkit-details-marker]:hidden">
                <span className="flex gap-4 sm:gap-6">
                  <span className="pt-1 font-mono text-xs tracking-[0.12em] text-muted-foreground sm:text-sm">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xl font-medium leading-[1.2] tracking-[-0.02em] sm:text-2xl">
                    {item.question}
                  </span>
                </span>
                <span
                  className="shrink-0 font-mono text-2xl leading-none transition-transform duration-300 group-open:rotate-45"
                  aria-hidden="true"
                >
                  +
                </span>
              </summary>

              <p className="max-w-2xl pb-7 pl-10 pr-8 text-base leading-7 text-muted-foreground sm:pb-9 sm:pl-14 sm:text-lg sm:leading-8">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
