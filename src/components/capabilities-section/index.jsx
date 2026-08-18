import Image from "next/image";
import { useTranslations } from "next-intl";

import { TerminalMeta } from "@/components/terminal-slash";
import {
  TypographyCardTitle,
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";
import designImage from "../../../assets/images/ilustraciones-home/diseno-cropped.png";
import engineeringImage from "../../../assets/images/ilustraciones-home/ingenieria-cropped.png";
import productImage from "../../../assets/images/ilustraciones-home/producto-cropped.png";

const capabilityImages = [productImage, designImage, engineeringImage];

export default function CapabilitiesSection() {
  const t = useTranslations("Capabilities");
  const capabilities = t.raw("items");
  return (
    <section
      id="capabilities"
      className="section-frame section-grid section-grid-dark bg-background text-foreground"
      aria-labelledby="capabilities-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>
          <TypographyDisplay
            id="capabilities-title"
            as="h2"
            size="statement"
            className="max-w-6xl lg:col-span-10"
          >
            {t("title")}
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid w-full border-t border-border sm:mt-20 lg:grid-cols-3">
          {capabilities.map((capability, index) => (
            <article
              data-reveal
              key={capability.number}
              className="flex min-w-0 flex-col border-b border-border px-0 py-8 sm:min-h-[28rem] sm:p-8 lg:border-r lg:last:border-r-0"
            >
              <TypographyEyebrow>
                <TerminalMeta
                  text={`${capability.number} / ${capability.label}`}
                />
              </TypographyEyebrow>

              <Image
                src={capabilityImages[index]}
                alt=""
                className="mt-6 h-64 w-full max-w-none object-contain sm:-mx-8 sm:h-80 sm:w-[calc(100%+4rem)] lg:h-72 xl:h-80"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 70vw, 100vw"
              />

              <div className="mt-6 flex flex-col gap-5 sm:gap-8">
                <TypographyCardTitle as="h3">
                  {capability.titleLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </TypographyCardTitle>
                <p className="max-w-sm text-base leading-7 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
