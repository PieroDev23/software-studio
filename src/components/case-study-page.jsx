import { useTranslations } from "next-intl";
import LanguageSwitcher from "@/components/language-switcher";
import Silk from "@/components/Silk";
import { TerminalMeta } from "@/components/terminal-slash";
import { CtaLink } from "@/components/ui/cta-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLead,
} from "@/components/ui/typography";
import { Link } from "@/i18n/navigation";
import { getCaseStudy } from "@/lib/case-studies";

function CaseStudyPage({ study, locale }) {
  const t = useTranslations("CaseStudy");
  const nextStudy = getCaseStudy(study.next, locale);

  return (
    <main className="bg-background text-foreground">
      <article>
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
              <Link href="/" className="transition-opacity hover:opacity-60">
                Manyas <span className="align-super text-xs">®</span>
              </Link>
              <div className="flex items-center gap-5">
                <LanguageSwitcher />
                <Link
                  href="/#selected-work"
                  className="text-right transition-opacity hover:opacity-60"
                >
                  ← {t("selected")}
                </Link>
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
                  <dd className="mt-2 text-base font-medium sm:text-lg">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </header>

        <section className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground">
          <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-8">
            <TypographyEyebrow tone="inverse" className="lg:col-span-2">
              {t("premise")}
            </TypographyEyebrow>
            <TypographyDisplay
              as="h2"
              size="statement"
              tone="inverse"
              className="max-w-6xl lg:col-span-10"
            >
              {study.premise}
            </TypographyDisplay>
          </div>
        </section>

        <section className="section-frame bg-inverse text-inverse-foreground">
          <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
            <TypographyEyebrow tone="inverse" className="lg:col-span-2">
              {t("challenge")}
            </TypographyEyebrow>
            <div className="lg:col-span-9 lg:col-start-4">
              <h2 className="max-w-[15ch] text-[2.5rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[clamp(3.25rem,5vw,5.75rem)] sm:leading-[1.04]">
                {study.challengeTitle}
              </h2>
              <div className="mt-10 grid gap-8 border-t border-inverse-border pt-8 text-lg leading-8 text-inverse-muted sm:mt-16 sm:grid-cols-2 sm:pt-10 sm:text-xl sm:leading-9">
                {study.challenge.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section
          className={`relative min-h-[52svh] overflow-hidden ${study.theme}`}
        >
          <div className="absolute inset-0 opacity-55" aria-hidden="true">
            <Silk {...study.silk} scale={study.silk.scale * 1.25} />
          </div>
          <div className="content-container relative flex min-h-[52svh] flex-col justify-between gap-20 px-5 py-10 sm:px-8 sm:py-14 lg:px-12 lg:py-16">
            <div className="flex items-center justify-between gap-6">
              <TypographyEyebrow className="text-current opacity-65">
                {t("shift")}
              </TypographyEyebrow>
              <TypographyEyebrow className="text-current opacity-65">
                02 / 04
              </TypographyEyebrow>
            </div>

            <div className="grid items-end gap-12 lg:grid-cols-12 lg:gap-8">
              <p
                data-motion-heading
                className="max-w-[18ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-[clamp(3rem,5vw,5.5rem)] sm:leading-[1.04] lg:col-span-9"
              >
                “{study.pullQuote}”
              </p>

              <dl
                data-reveal
                className="grid border-t border-current/25 pt-5 font-mono text-sm uppercase leading-5 tracking-[0.1em] lg:col-span-3"
              >
                <div className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-current/20 py-4">
                  <dt className="opacity-50">{t("before")}</dt>
                  <dd>{study.shift.before}</dd>
                </div>
                <div className="grid grid-cols-[4.5rem_1fr] gap-4 py-4">
                  <dt className="opacity-50">{t("after")}</dt>
                  <dd>{study.shift.after}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="section-frame bg-background text-foreground">
          <div className="content-container">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
              <TypographyEyebrow className="lg:col-span-2">
                {t("changed")}
              </TypographyEyebrow>
              <TypographyDisplay
                as="h2"
                size="statement"
                className="max-w-5xl lg:col-span-10"
              >
                {t("moves")}
              </TypographyDisplay>
            </div>

            <div className="mt-12 grid border-t border-border sm:mt-20 lg:grid-cols-3">
              {study.moves.map((move) => (
                <section
                  key={move.number}
                  className="flex min-h-[22rem] flex-col border-b border-border p-5 sm:min-h-[28rem] sm:p-8 lg:border-r lg:last:border-r-0"
                >
                  <TypographyEyebrow>{move.number}</TypographyEyebrow>
                  <div className="mt-auto pt-16">
                    <h3 className="max-w-[12ch] text-[2rem] font-medium leading-[1.08] tracking-[-0.03em] sm:text-4xl">
                      {move.title}
                    </h3>
                    <p className="mt-6 max-w-sm text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                      {move.body}
                    </p>
                  </div>
                </section>
              ))}
            </div>
          </div>
        </section>

        <section className="section-frame section-grid section-grid-light bg-inverse text-inverse-foreground">
          <div className="content-container grid gap-12 lg:grid-cols-12 lg:gap-8">
            <TypographyEyebrow tone="inverse" className="lg:col-span-2">
              {t("outcome")}
            </TypographyEyebrow>
            <div className="lg:col-span-10">
              <TypographyDisplay
                as="h2"
                size="statement"
                tone="inverse"
                className="max-w-6xl"
              >
                {study.outcomeTitle}
              </TypographyDisplay>
              <p className="mt-10 max-w-3xl border-t border-inverse-border pt-8 text-lg leading-8 text-inverse-muted sm:mt-16 sm:pt-10 sm:text-xl sm:leading-9">
                {study.outcome}
              </p>
            </div>
          </div>
        </section>
      </article>

      <footer className="section-frame bg-background text-foreground">
        <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow className="lg:col-span-2">
            {t("next")}
          </TypographyEyebrow>
          <div className="lg:col-span-10">
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group block border-t border-border pt-8 sm:pt-12"
            >
              <span className="font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground">
                {nextStudy.client} / {nextStudy.year}
              </span>
              <span className="mt-6 flex items-end justify-between gap-6 text-[2.5rem] font-medium leading-[1.02] tracking-[-0.03em] sm:text-[clamp(3.5rem,7vw,7rem)]">
                <span className="max-w-[12ch]">{nextStudy.title}</span>
                <span
                  className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </Link>

            <CtaLink href="/#contacto" className="mt-16 sm:mt-24">
              {t("cta")}
            </CtaLink>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default CaseStudyPage;
