import Link from "next/link";

import CapabilitiesGrid from "@/components/capabilities-section";
import Silk from "@/components/Silk";
import { TerminalMeta } from "@/components/terminal-slash";
import { CtaLink } from "@/components/ui/cta-link";
import {
  TypographyDisplay,
  TypographyEyebrow,
} from "@/components/ui/typography";

function CardMeta({ client, year, service }) {
  return (
    <div className="relative z-10 flex items-start justify-between gap-4 font-mono text-xs font-medium uppercase tracking-[0.1em] opacity-80 sm:text-sm sm:tracking-[0.12em]">
      <p>
        <TerminalMeta text={`${client} / ${year}`} />
      </p>
      <p className="text-right">{service}</p>
    </div>
  );
}

function WorkGrid() {
  return (
    <section
      className="section-frame bg-inverse text-inverse-foreground"
      aria-labelledby="work-title"
    >
      <div className="content-container">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <TypographyEyebrow tone="inverse" className="lg:col-span-2">
            Selected work / concept cases
          </TypographyEyebrow>
          <TypographyDisplay
            id="work-title"
            as="h2"
            size="statement"
            tone="inverse"
            className="max-w-6xl lg:col-span-10"
          >
            Complex products, made legible.
          </TypographyDisplay>
        </div>

        <div className="mt-12 grid gap-4 sm:mt-20 lg:grid-cols-12 lg:grid-rows-2">
          <Link
            data-reveal
            href="/work/atlas-health"
            className="block cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-inverse-foreground lg:col-span-7 lg:row-span-2"
            aria-label="View Atlas Health case study"
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
                client="Atlas Health"
                year="2026"
                service="Product + Engineering"
              />
              <div className="case-card-preview-content relative z-10 flex max-w-3xl flex-col gap-6">
                <h3 className="text-balance text-[2rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(2.5rem,4vw,4.75rem)] sm:leading-[1.02]">
                  <span className="block sm:whitespace-nowrap">
                    One operating system
                  </span>
                  <span className="block sm:whitespace-nowrap">
                    for preventive care.
                  </span>
                </h3>
                <p className="max-w-xl text-base leading-6 opacity-75 sm:text-lg">
                  A unified patient experience connecting diagnostics, coaching,
                  clinical workflows and longitudinal health data.
                </p>
                <span className="case-card-preview-cta inline-flex w-fit items-center gap-4 border-b border-border pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em]">
                  View case study <span aria-hidden="true">↗</span>
                </span>
              </div>
            </article>
          </Link>

          <article
            data-reveal
            className="case-card case-card-northstar flex min-h-72 flex-col justify-between p-5 text-foreground sm:min-h-96 sm:p-8 lg:col-span-5"
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={3}
                scale={1}
                color="#242429"
                noiseIntensity={0.3}
                rotation={0.25}
              />
            </div>
            <CardMeta
              client="Northstar"
              year="2025"
              service="Strategy + Design"
            />
            <div className="relative z-10 flex max-w-xl flex-col gap-5">
              <h3 className="text-balance text-[1.75rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(2rem,3vw,3.25rem)] sm:leading-[1.02]">
                <span className="block sm:whitespace-nowrap">
                  Enterprise planning,
                </span>
                <span className="block sm:whitespace-nowrap">
                  made immediate.
                </span>
              </h3>
              <p className="text-base leading-6 opacity-65">
                From fragmented tools to one focused planning workspace.
              </p>
              <CtaLink href="/work/northstar">View case study</CtaLink>
            </div>
          </article>

          <article
            data-reveal
            className="case-card case-card-prism flex min-h-72 flex-col justify-between p-5 sm:min-h-96 sm:p-8 lg:col-span-5"
          >
            <div className="case-card-silk" aria-hidden="true">
              <Silk
                speed={4}
                scale={1}
                color="#FFFFFF"
                noiseIntensity={0.25}
                rotation={-0.3}
              />
            </div>
            <CardMeta client="Prism" year="2026" service="0→1 Product" />
            <div className="relative z-10 flex max-w-xl flex-col gap-5">
              <h3 className="text-balance text-[1.75rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(2rem,3vw,3.25rem)] sm:leading-[1.02]">
                <span className="block sm:whitespace-nowrap">
                  Financial clarity for
                </span>
                <span className="block sm:whitespace-nowrap">
                  independent teams.
                </span>
              </h3>
              <p className="text-base leading-6 opacity-65">
                A calmer way to understand cash, commitments and runway.
              </p>
              <CtaLink href="/work/prism" tone="inverse">
                View case study
              </CtaLink>
            </div>
          </article>
        </div>

        <CapabilitiesGrid />
      </div>
    </section>
  );
}

export default WorkGrid;
