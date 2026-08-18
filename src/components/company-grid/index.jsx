import Image from "next/image";
import { useTranslations } from "next-intl";

import { TypographyEyebrow } from "@/components/ui/typography";
import { cn } from "@/lib/utils";
import axoLogo from "../../../assets/images/logos_bn_png/negro/axo-longevity_negro.png";
import bcpLogo from "../../../assets/images/logos_bn_png/negro/bcp_negro.png";
import filoLogo from "../../../assets/images/logos_bn_png/negro/filo_negro.png";
import keynuaLogo from "../../../assets/images/logos_bn_png/negro/keynua_negro.png";
import pchujoyLogo from "../../../assets/images/logos_bn_png/negro/pchujoy_negro.png";
import qempoLogo from "../../../assets/images/logos_bn_png/negro/qempo_negro.png";

const companies = [
  { name: "PCHUJOY", logo: pchujoyLogo },
  { name: "AXO Longevity", logo: axoLogo },
  { name: "Filo", logo: filoLogo },
  { name: "BCP", logo: bcpLogo },
  { name: "Keynua", logo: keynuaLogo },
  { name: "Qempo", logo: qempoLogo },
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
          className="flex h-24 min-w-52 shrink-0 items-center justify-center px-8 py-5"
        >
          <Image
            src={company.logo}
            alt={company.name}
            className="h-10 w-auto max-w-36 object-contain"
            sizes="144px"
          />
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
        <div className="px-1">
          <TypographyEyebrow id="companies-title" tone="inverse">
            {t("eyebrow")}
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
