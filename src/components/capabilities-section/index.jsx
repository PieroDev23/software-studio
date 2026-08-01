import { useTranslations } from "next-intl";
import { TerminalMeta } from "@/components/terminal-slash";
import {
  TypographyCardTitle,
  TypographyEyebrow,
} from "@/components/ui/typography";

function CapabilityMark() {
  return (
    <div className="relative size-12" aria-hidden="true">
      <span className="absolute left-0 top-0 size-5 bg-inverse-foreground" />
      <span className="absolute left-4 top-3 size-5 bg-capability-purple" />
      <span className="absolute left-0 top-7 size-5 bg-inverse-muted" />
    </div>
  );
}

export default function CapabilitiesGrid() {
  const t = useTranslations("Capabilities");
  const capabilities = t.raw("items");
  return (
    <div className="mt-12 grid w-full border-t border-inverse-border text-inverse-foreground sm:mt-20 lg:mt-24 lg:grid-cols-3">
      {capabilities.map((capability) => (
        <article
          data-reveal
          key={capability.number}
          className="flex flex-col border-b border-inverse-border px-0 py-8 sm:min-h-[32rem] sm:p-8 lg:border-r lg:last:border-r-0"
        >
          <TypographyEyebrow tone="inverse">
            <TerminalMeta text={`${capability.number} / ${capability.label}`} />
          </TypographyEyebrow>

          <div className="mt-6 sm:mt-10">
            <CapabilityMark />
          </div>

          <div className="mt-10 flex flex-col gap-5 sm:mt-auto sm:gap-8 sm:pt-16">
            <TypographyCardTitle as="h2">
              {capability.titleLines.map((line) => (
                <span key={line} className="block whitespace-nowrap">
                  {line}
                </span>
              ))}
            </TypographyCardTitle>
            <ul className="flex flex-col gap-2 text-base leading-6 text-inverse-muted">
              {capability.services.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}
    </div>
  );
}
