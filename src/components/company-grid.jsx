import { useTranslations } from "next-intl";
import { TypographyEyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const companies = Array.from({ length: 18 }, (_, index) => ({
  name: `Client ${index + 1}`,
}));

const markStyles = {
  airy: "font-normal uppercase tracking-[0.12em]",
  compact: "font-medium uppercase tracking-[-0.04em]",
  condensed: "font-semibold uppercase tracking-[-0.055em]",
  heavy: "font-bold uppercase tracking-[-0.07em]",
  mono: "font-mono font-normal uppercase tracking-[0.12em]",
  tight: "font-medium uppercase tracking-[-0.065em]",
  wide: "font-normal uppercase tracking-[0.08em]",
};

function CompanyGrid() {
  const t = useTranslations("Companies");

  const renderMarqueeCompanies = (repeated = false) => (
    <ul
      className={cn(
        "flex shrink-0 gap-3 pr-3",
        repeated && "company-marquee-repeated",
      )}
      aria-hidden={repeated || undefined}
    >
      {companies.map((company) => (
        <li
          key={`${repeated ? "repeat" : "initial"}-${company.name}`}
          className="flex min-w-40 shrink-0 items-center justify-center border border-inverse-border px-6 py-5"
        >
          <span
            className={cn(
              "whitespace-nowrap text-xl leading-none",
              markStyles[company.mark],
            )}
          >
            {t("client", { number: company.name.replace("Client ", "") })}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="section-frame bg-inverse text-inverse-foreground"
      aria-labelledby="companies-title"
    >
      <div className="content-container">
        <div className="flex items-end justify-between gap-6 px-1">
          <TypographyEyebrow id="companies-title" tone="inverse">
            {t("eyebrow")}
          </TypographyEyebrow>
          <TypographyEyebrow
            className="hidden text-right sm:block"
            tone="inverse"
          >
            {t("selected")}
          </TypographyEyebrow>
        </div>

        <div className="company-marquee mt-7 overflow-hidden md:hidden">
          <div className="company-marquee-track flex w-max">
            {renderMarqueeCompanies()}
            {renderMarqueeCompanies(true)}
          </div>
        </div>

        <ul className="mt-8 hidden border-l border-t border-inverse-border md:grid md:grid-cols-3 lg:grid-cols-6">
          {companies.map((company) => (
            <li
              data-reveal
              key={company.name}
              className={cn(
                "group flex min-h-28 items-center justify-center border-b border-r border-inverse-border px-3 py-6 transition-colors duration-300 sm:min-h-40 sm:px-4 sm:py-8 lg:min-h-44",
                company.featured
                  ? "bg-inverse-highlight"
                  : "hover:bg-inverse-hover",
              )}
            >
              <div className="flex flex-col items-center gap-2 text-center">
                <span
                  className={cn(
                    "text-lg leading-none sm:text-2xl",
                    markStyles[company.mark],
                  )}
                >
                  {t("client", { number: company.name.replace("Client ", "") })}
                </span>
                {company.detail ? (
                  <span className="font-mono text-sm font-medium uppercase tracking-[0.12em] text-inverse-muted">
                    {company.detail}
                  </span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CompanyGrid;
