import { useTranslations } from "next-intl";
import Silk from "@/components/silk";
import { TerminalMeta } from "@/components/terminal-slash";
import TransitionLink from "@/components/transition-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function CardMeta({ client, year, service }) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-4 font-mono text-xs font-medium uppercase tracking-[0.1em] opacity-80 sm:text-sm sm:tracking-[0.12em]">
      <p>
        <TerminalMeta text={year ? `${client} / ${year}` : client} />
      </p>
      <p className="max-w-[48%] text-right leading-[1.35]">{service}</p>
    </div>
  );
}

export default function WorkGrid() {
  const t = useTranslations("Work");
  return (
    <section
      id="selected-work"
      className="section-frame bg-inverse text-inverse-foreground"
      aria-labelledby="work-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            {t("eyebrow")}
          </TypographyEyebrow>
          <TypographyDisplay
            id="work-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-6xl lg:col-span-10"
          >
            {t("title")}
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-20 lg:grid-cols-12">
          <TransitionLink
            data-reveal
            href="/work/pchujoy"
            transitionLabel={t("cards.atlas.loader")}
            transitionVariant="case-study"
            className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground lg:col-span-7 lg:row-span-2"
            aria-label={t("viewAria", { client: "PCHUJOY" })}
          >
            <article className="case-card case-card-atlas case-card-preview flex h-full min-h-[30rem] flex-col justify-between p-5 sm:min-h-[44rem] sm:p-8 lg:min-h-[54rem]">
              <div className="case-card-silk" aria-hidden="true">
                <Silk
                  speed={4}
                  scale={1}
                  color="#5227FF"
                  noiseIntensity={0.2}
                  rotation={-0.15}
                />
              </div>
              <CardMeta
                client="PCHUJOY"
                year="2025"
                service={t("cards.atlas.service")}
              />
              <div
                data-parallax-work-content
                className="case-card-preview-content relative z-10 flex min-w-0 max-w-full flex-col gap-6"
              >
                <h3 className="text-balance text-3xl leading-9 font-medium tracking-[0.030rem] sm:text-4xl sm:leading-11 lg:text-5xl lg:leading-15 xl:text-6xl xl:leading-20">
                  <span className="block sm:whitespace-nowrap">
                    {t("cards.atlas.line1")}
                  </span>
                  <span className="block sm:whitespace-nowrap">
                    {t("cards.atlas.line2")}
                  </span>
                </h3>
                <p className="line-clamp-2 max-w-xl text-base leading-6 opacity-75 sm:text-lg">
                  {t("cards.atlas.description")}
                </p>
                <span className="case-card-preview-cta inline-flex w-fit items-center gap-4 border-b border-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em]">
                  {t("view")} <span aria-hidden="true">↗</span>
                </span>
              </div>
            </article>
          </TransitionLink>

          <TransitionLink
            data-reveal
            href="/work/samay"
            transitionLabel={t("cards.northstar.loader")}
            transitionVariant="case-study"
            className="case-card case-card-northstar flex min-h-72 min-w-0 cursor-pointer flex-col justify-between p-5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground sm:min-h-96 sm:p-8 lg:col-span-5"
            aria-label={t("viewAria", { client: "SAMAY" })}
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={3}
                scale={1}
                color="#002A8D"
                noiseIntensity={0.3}
                rotation={0.25}
              />
            </div>
            <CardMeta
              client="SAMAY BCP"
              year="2025"
              service={t("cards.northstar.service")}
            />
            <div
              data-parallax-work-content
              className="relative z-10 flex min-w-0 max-w-2xl flex-col gap-5 2xl:gap-7"
            >
              <h3 className="w-full max-w-full text-3xl leading-9 font-medium tracking-[0.030rem] xl:text-5xl xl:leading-15">
                <span className="block whitespace-nowrap">
                  {t("cards.northstar.line1")}
                </span>
                <span className="block whitespace-nowrap">
                  {t("cards.northstar.line2")}
                </span>
              </h3>
              <p className="line-clamp-2 max-w-xl text-base leading-6 opacity-65 sm:text-lg sm:leading-7 2xl:text-xl 2xl:leading-8">
                {t("cards.northstar.description")}
              </p>
              <span className="inline-flex w-fit items-center gap-4 border-b border-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em] 2xl:text-base">
                {t("view")} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </TransitionLink>

          <TransitionLink
            data-reveal
            href="/work/axo-longevity"
            transitionLabel={t("cards.prism.loader")}
            transitionVariant="case-study"
            className="case-card case-card-prism flex min-h-72 cursor-pointer flex-col justify-between p-5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground sm:min-h-96 sm:p-8 lg:col-span-5"
            aria-label={t("viewAria", { client: "AXO Longevity" })}
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={4}
                scale={1}
                color="#BEEE31"
                noiseIntensity={0.25}
                rotation={-0.3}
              />
            </div>
            <CardMeta
              client="AXO Longevity"
              year="2026"
              service={t("cards.prism.service")}
            />
            <div
              data-parallax-work-content
              className="relative z-10 flex max-w-xl flex-col gap-5"
            >
              <h3 className="text-balance text-3xl leading-9 font-medium tracking-[0.030rem] xl:text-5xl xl:leading-15">
                <span className="block sm:whitespace-nowrap">
                  {t("cards.prism.line1")}
                </span>
                <span className="block sm:whitespace-nowrap">
                  {t("cards.prism.line2")}
                </span>
              </h3>
              <p className="line-clamp-2 text-base leading-6 opacity-65">
                {t("cards.prism.description")}
              </p>
              <span className="inline-flex w-fit items-center gap-4 border-b border-inverse-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em]">
                {t("view")} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </TransitionLink>

          {/* Temporarily hidden: FILO and MVLL.
          <TransitionLink
            data-reveal
            href="/work/filo"
            transitionLabel={t("cards.filo.loader")}
            transitionVariant="case-study"
            className="case-card case-card-filo flex min-h-[30rem] cursor-pointer flex-col justify-between p-5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground sm:p-8 lg:col-span-6"
            aria-label={t("viewAria", { client: "FILO" })}
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={3}
                scale={1}
                color="#777777"
                noiseIntensity={0.22}
                rotation={0.15}
              />
            </div>
            <CardMeta
              client="FILO"
              year="2025"
              service={t("cards.filo.service")}
            />
            <div
              data-parallax-work-content
              className="relative z-10 flex max-w-xl flex-col gap-5"
            >
              <h3 className="text-balance text-3xl leading-9 font-medium tracking-[0.030rem] sm:text-4xl sm:leading-11 xl:text-5xl xl:leading-15">
                {t("cards.filo.title")}
              </h3>
              <p className="line-clamp-2 max-w-lg text-base leading-7 opacity-75 sm:text-lg">
                {t("cards.filo.description")}
              </p>
              <span className="inline-flex w-fit items-center gap-4 border-b border-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em]">
                {t("view")} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </TransitionLink>

          <TransitionLink
            data-reveal
            href="/work/wo-yao"
            transitionLabel={t("cards.woyao.loader")}
            transitionVariant="case-study"
            className="case-card case-card-woyao flex min-h-[30rem] cursor-pointer flex-col justify-between p-5 text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground sm:p-8 lg:col-span-6"
            aria-label={t("viewAria", { client: "WO YAO" })}
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={2.5}
                scale={1}
                color="#6D172B"
                noiseIntensity={0.2}
                rotation={-0.2}
              />
            </div>
            <CardMeta
              client="WO YAO"
              year="2026"
              service={t("cards.woyao.service")}
            />
            <div
              data-parallax-work-content
              className="relative z-10 flex max-w-xl flex-col gap-5"
            >
              <h3 className="text-balance text-3xl leading-9 font-medium tracking-[0.030rem] sm:text-4xl sm:leading-11 xl:text-5xl xl:leading-15">
                {t("cards.woyao.title")}
              </h3>
              <p className="line-clamp-2 max-w-lg text-base leading-7 opacity-75 sm:text-lg">
                {t("cards.woyao.description")}
              </p>
              <span className="inline-flex w-fit items-center gap-4 border-b border-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em]">
                {t("view")} <span aria-hidden="true">↗</span>
              </span>
            </div>
          </TransitionLink>
          */}
        </div>
      </div>
    </section>
  );
}
