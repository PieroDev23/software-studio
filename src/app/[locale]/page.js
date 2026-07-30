import { getTranslations } from "next-intl/server";
import Beams from "@/components/Beams";
import CompanyGrid from "@/components/company-grid";
import ContactSection from "@/components/contact-section";
import EngagementSection from "@/components/engagement-section";
import ExpertiseSection from "@/components/expertise-section";
import FaqSection from "@/components/faq-section";
import JsonLd from "@/components/json-ld";
import LanguageSwitcher from "@/components/language-switcher";
import MetricsSection from "@/components/metrics-section";
import MotionShell from "@/components/motion-shell";
import PremiseSection from "@/components/premise-section";
import TeamSection from "@/components/team-section";
import TestimonialsCarousel from "@/components/testimonials-carousel";
import { CtaLink } from "@/components/ui/cta-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
  TypographyLead,
} from "@/components/ui/typography";
import WorkGrid from "@/components/work-grid";
import { getHomeStructuredData } from "@/lib/structured-data";

export default async function Home({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Hero" });
  const seo = await getTranslations({ locale, namespace: "Seo" });
  const structuredData = getHomeStructuredData(locale, {
    description: seo("description"),
    expertise: seo.raw("expertise"),
  });

  return (
    <MotionShell>
      <JsonLd data={structuredData} />
      <main className="flex flex-1 flex-col bg-background text-foreground">
        <section
          id="top"
          data-hero
          className="relative isolate flex min-h-svh overflow-hidden"
        >
          <div className="absolute inset-0" aria-hidden="true">
            {" "}
            <Beams
              beamWidth={2.2}
              beamHeight={15}
              beamNumber={10}
              lightColor="#ffffff"
              speed={1.2}
              noiseIntensity={2.2}
              scale={0.22}
              rotation={-30}
            />
          </div>

          <div className="hero-scrim absolute inset-0" aria-hidden="true" />

          <div className="content-container relative flex min-h-svh flex-col px-5 py-5 sm:px-8 sm:py-7 lg:px-12 lg:py-10">
            <header
              data-hero-chrome
              className="flex items-start justify-between gap-3 sm:gap-6"
            >
              <a
                className="whitespace-nowrap font-mono text-xs font-medium uppercase leading-none tracking-[0.16em] text-foreground transition-opacity hover:opacity-70 sm:text-sm sm:tracking-[0.18em]"
                href="#top"
                aria-label={t("homeLabel")}
              >
                Manyas <span className="align-super text-xs">®</span>
              </a>

              <div className="flex items-start gap-4 sm:items-center sm:gap-6">
                <p className="flex max-w-40 items-start gap-2 font-mono text-xs font-normal uppercase leading-4 tracking-[0.14em] text-muted-foreground sm:max-w-none sm:items-center sm:text-sm sm:leading-none sm:tracking-[0.16em]">
                  <span
                    className="size-1.5 rounded-full bg-white"
                    aria-hidden="true"
                  />
                  {t("availability")}
                </p>
                <LanguageSwitcher className="text-muted-foreground" />
              </div>
            </header>

            <section className="flex flex-1 items-center">
              <div className="flex max-w-6xl flex-col gap-6 sm:gap-10">
                <TypographyEyebrow data-reveal>
                  {t("eyebrow")}
                </TypographyEyebrow>

                <TypographyDisplay className="flex max-w-5xl flex-col items-start">
                  <span>{t("line1")}</span>
                  <span>{t("line2")}</span>
                  <span>{t("line3")}</span>
                </TypographyDisplay>

                <div
                  data-reveal
                  className="flex max-w-4xl flex-col items-start gap-5 sm:flex-row sm:items-end sm:gap-12"
                >
                  <TypographyLead className="max-w-xl">
                    {t("lead")}
                  </TypographyLead>

                  <CtaLink
                    href="#contacto"
                    className="shrink-0 border-0 bg-foreground px-5 py-3.5 text-background shadow-lg hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground sm:px-6 sm:py-4"
                  >
                    {t("cta")}
                  </CtaLink>
                </div>
              </div>
            </section>

            <footer
              data-hero-chrome
              className="flex items-end justify-between gap-3 font-mono text-[0.6875rem] font-normal uppercase leading-none tracking-[0.08em] text-muted-foreground sm:text-sm sm:leading-normal sm:tracking-[0.12em]"
            >
              <p className="whitespace-nowrap">{t("location")}</p>
              <p className="hidden shrink-0 text-right sm:block">© 2026</p>
            </footer>
          </div>
        </section>

        <CompanyGrid />
        <PremiseSection />
        <MetricsSection />
        <WorkGrid />
        <ExpertiseSection />
        <TestimonialsCarousel />
        <TeamSection />
        <EngagementSection />
        <FaqSection />
        <ContactSection />
      </main>
    </MotionShell>
  );
}
