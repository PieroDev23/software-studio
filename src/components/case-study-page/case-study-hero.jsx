import LanguageSwitcher from "@/components/language-switcher";
import Silk from "@/components/silk";
import { TerminalMeta } from "@/components/terminal-slash";
import TransitionLink from "@/components/transition-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLead,
} from "@/components/ui/typography";

function CaseStudyHero({ study, translate }) {
  return (
    <header
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
        <nav className="flex items-start justify-between gap-6 font-mono text-xs font-medium uppercase tracking-[0.16em] sm:text-sm">
          <TransitionLink
            href="/"
            transitionLabel={translate("returnHome")}
            className="transition-opacity hover:opacity-60"
          >
            Manyas <span className="align-super text-xs">®</span>
          </TransitionLink>
          <div className="flex items-center gap-5">
            <LanguageSwitcher />
            <TransitionLink
              href="/#selected-work"
              transitionLabel={translate("returnWork")}
              className="text-right transition-opacity hover:opacity-60"
            >
              ← {translate("selected")}
            </TransitionLink>
          </div>
        </nav>

        <div className="flex flex-1 flex-col justify-end pb-12 pt-28 sm:pb-16 lg:pb-20">
          <TypographyEyebrow className="text-current opacity-70">
            <TerminalMeta
              text={`${study.client} / ${study.year} / ${study.service}`}
            />
          </TypographyEyebrow>
          <TypographyDisplay className="mt-8 max-w-[11ch] text-current sm:mt-12">
            {study.title}
          </TypographyDisplay>
          <TypographyLead className="mt-8 max-w-2xl text-current opacity-75">
            {study.description}
          </TypographyLead>
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
