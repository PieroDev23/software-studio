import TransitionLink from "@/components/transition-link";
import { CtaLink } from "@/components/ui/cta-link";
import { TypographyEyebrow } from "@/components/ui/typography";

function CaseStudyFooter({ nextStudy, translate }) {
  return (
    <footer className="section-frame bg-background text-foreground">
      <div className="content-container grid gap-10 lg:grid-cols-12 lg:gap-8">
        <TypographyEyebrow className="lg:col-span-2">
          {translate("next")}
        </TypographyEyebrow>
        <div className="lg:col-span-10">
          <TransitionLink
            href={`/work/${nextStudy.slug}`}
            transitionLabel={nextStudy.loaderCopy}
            transitionVariant="case-study"
            className="group block border-t border-border pt-8 sm:pt-12"
          >
            <span className="font-mono text-sm uppercase tracking-[0.14em] text-muted-foreground">
              {nextStudy.client} / {nextStudy.year}
            </span>
            <span className="mt-6 flex items-end justify-between gap-6 text-4xl leading-11 font-medium tracking-[0.030rem] sm:text-5xl md:text-6xl md:leading-18 lg:text-7xl lg:leading-25 xl:text-8xl">
              <span className="max-w-[20ch]">{nextStudy.title}</span>
              <span
                className="shrink-0 transition-transform duration-300 group-hover:translate-x-2"
                aria-hidden="true"
              >
                →
              </span>
            </span>
          </TransitionLink>

          <CtaLink href="/#contacto" className="mt-16 sm:mt-24">
            {translate("cta")}
          </CtaLink>
        </div>
      </div>
    </footer>
  );
}

export { CaseStudyFooter };
