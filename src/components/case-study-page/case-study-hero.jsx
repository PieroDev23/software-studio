import { ArrowLeft } from "lucide-react";
import Image from "next/image";

import LanguageSwitcher from "@/components/language-switcher";
import Silk from "@/components/silk";
import TransitionLink from "@/components/transition-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLead,
} from "@/components/ui/typography";
import bcpLogo from "../../../assets/images/logos_bn_png/blanco/bcp_blanco.png";
import filoLogo from "../../../assets/images/logos_bn_png/blanco/filo_blanco.png";
import pchujoyLogo from "../../../assets/images/logos_bn_png/blanco/pchujoy_blanco.png";
import ultimateLogo from "../../../assets/images/logos_bn_png/blanco/ultimate_agencia_white.png";
import axoLogo from "../../../assets/images/logos_bn_png/negro/axo-longevity_negro.png";

const caseStudyLogos = {
  "axo-longevity": { src: axoLogo, className: "h-8 sm:h-10" },
  filo: { src: filoLogo, className: "h-12 sm:h-14" },
  pchujoy: { src: pchujoyLogo, className: "h-9 sm:h-11" },
  "samay-bcp": { src: bcpLogo, className: "h-8 sm:h-10" },
  "ultimate-agencia": { src: ultimateLogo, className: "h-8 sm:h-10" },
};

function CaseStudyHero({ study, translate }) {
  const clientLogo = caseStudyLogos[study.slug];

  return (
    <header
      data-case-study-hero
      className={`relative isolate flex min-h-svh overflow-hidden ${study.theme}`}
    >
      <div className="absolute inset-0 opacity-45" aria-hidden="true">
        <Silk {...study.silk} />
      </div>
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/40"
        aria-hidden="true"
      />

      <div className="content-container relative flex min-h-svh flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-10">
        <nav className="flex items-center justify-between gap-6 font-mono text-xs font-medium uppercase tracking-[0.16em] sm:text-sm">
          <TransitionLink
            href="/"
            transitionLabel="MANYAS"
            className="transition-opacity hover:opacity-60"
          >
            Manyas
            <span className="relative -top-[0.35em] ml-1 text-[0.65em] leading-none">
              ®
            </span>
          </TransitionLink>
          <div className="flex items-center gap-5">
            <LanguageSwitcher />
          </div>
        </nav>

        <div
          data-parallax-case-content
          className="flex flex-1 flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20"
        >
          <div className="flex max-w-6xl flex-col items-start gap-6 sm:gap-10">
            {clientLogo ? (
              <Image
                src={clientLogo.src}
                alt={study.client}
                className={`${clientLogo.className} w-auto max-w-56 object-contain`}
                sizes="224px"
              />
            ) : null}
            <TypographyEyebrow className="text-current opacity-70">
              {study.service}
            </TypographyEyebrow>
            <TypographyDisplay className="max-w-[20ch] text-current">
              {study.title}
            </TypographyDisplay>
            <TypographyLead className="max-w-2xl text-current opacity-75">
              {study.description}
            </TypographyLead>
          </div>

          <TransitionLink
            href="/#selected-work"
            transitionLabel="MANYAS"
            className="mt-8 flex w-fit items-center gap-2 text-right transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={20} strokeWidth={1.5} />
            {translate("back")}
          </TransitionLink>
        </div>

        <dl className="grid border-t border-current/20 sm:grid-cols-3">
          {study.facts.map(([label, value]) => (
            <div
              key={label}
              className="border-b border-current/20 py-5 sm:border-b-0 sm:border-r sm:px-6 sm:first:pl-0 sm:last:border-r-0"
            >
              <dt className="font-mono text-xs uppercase tracking-[0.14em] opacity-55">
                {label}
              </dt>
              <dd className="mt-2 text-base font-medium sm:text-lg">{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

export { CaseStudyHero };
