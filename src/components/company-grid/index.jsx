import { useTranslations } from "next-intl";
import { TypographyEyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

const companies = [
  { name: "PCHUJOY" },
  { name: "AXO Longevity" },
  { name: "Filo" },
  { name: "BCP" },
  { name: "Keynua" },
  { name: "Qempo" },
  { name: "Vitally" },
  { name: "WoYao" },
];

export default function CompanyGrid() {
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
          className="flex min-w-40 shrink-0 items-center justify-center px-6 py-5"
        >
          <span className="whitespace-nowrap text-xl font-medium uppercase tracking-tighter">
            {company.name}
          </span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="bg-inverse py-8 text-inverse-foreground sm:py-12"
      aria-labelledby="companies-title"
    >
      <div className="content-container px-5 sm:px-8 lg:px-12">
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

        <div className="company-marquee mt-7 overflow-hidden">
          <div className="company-marquee-track flex w-max">
            {renderMarqueeCompanies()}
            {renderMarqueeCompanies(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
