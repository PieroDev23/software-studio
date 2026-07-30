"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";

import { TypographyEyebrow } from "@/components/ui/typography";

function TestimonialsCarousel() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("items");
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setDirection("previous");
    setActiveIndex((current) =>
      current === 0 ? testimonials.length - 1 : current - 1,
    );
  };

  const showNext = () => {
    setDirection("next");
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  return (
    <section
      className="section-frame section-grid section-grid-dark relative overflow-hidden bg-background text-foreground"
      aria-labelledby="testimonials-title"
    >
      <div className="content-container flex flex-col gap-10 sm:gap-16">
        <div className="flex items-center justify-between gap-6">
          <TypographyEyebrow id="testimonials-title">
            {t("eyebrow")}
          </TypographyEyebrow>
          <p className="font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground">
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>

        <div data-reveal aria-live="polite">
          <div
            key={activeIndex}
            className="testimonial-slide"
            data-direction={direction}
          >
            <blockquote className="max-w-[72rem]">
              <p className="line-clamp-3 text-balance text-[1.625rem] font-medium leading-[1.1] tracking-[-0.03em] sm:text-[clamp(1.75rem,4vw,4.25rem)] sm:leading-[1.08]">
                “{activeTestimonial.quote}”
              </p>
            </blockquote>

            <div className="mt-10 flex flex-col gap-1 font-mono text-sm leading-5 sm:mt-12">
              <p className="uppercase tracking-[0.12em] text-foreground">
                {activeTestimonial.author}, {activeTestimonial.role} at{" "}
                {activeTestimonial.company}
              </p>
              <p className="text-muted-foreground">{t("concept")}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <nav className="flex gap-2" aria-label={t("controls")}>
            <button
              type="button"
              onClick={showPrevious}
              className="inline-flex size-12 cursor-pointer items-center justify-center border border-border font-mono text-lg transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={t("previous")}
            >
              ←
            </button>
            <button
              type="button"
              onClick={showNext}
              className="inline-flex size-12 cursor-pointer items-center justify-center border border-border font-mono text-lg transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              aria-label={t("next")}
            >
              →
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
