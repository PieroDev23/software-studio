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
        "flex shrink-0 gap-1.5 pr-1.5 sm:gap-3 sm:pr-3",
        repeated && "company-marquee-repeated",
      )}
      aria-hidden={repeated || undefined}
    >
      {companies.map((company) => (
        <li
          key={`${repeated ? "repeat" : "initial"}-${company.name}`}
          className="flex h-16 min-w-36 shrink-0 items-center justify-center px-4 py-3 sm:h-24 sm:min-w-52 sm:px-8 sm:py-5"
        >
          <Image
            src={company.logo}
            alt={company.name}
            className="h-7 w-auto max-w-28 object-contain sm:h-10 sm:max-w-36"
            sizes="(max-width: 639px) 112px, 144px"
          />
        </li>
      ))}
    </ul>
  );

  return (
    <section
      className="bg-inverse py-6 text-inverse-foreground sm:py-12"
      aria-labelledby="companies-title"
    >
      <div className="content-container px-5 sm:px-8 lg:px-12">
        <div className="px-1">
          <TypographyEyebrow id="companies-title" tone="inverse">
            {t("eyebrow")}
          </TypographyEyebrow>
        </div>

        <div className="company-marquee mt-4 overflow-hidden sm:mt-7">
          <div className="company-marquee-track flex w-max">
            {renderMarqueeCompanies()}
            {renderMarqueeCompanies(true)}
          </div>
        </div>
      </div>
    </section>
  );
}
