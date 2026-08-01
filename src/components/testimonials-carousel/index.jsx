"use client";

import { useTranslations } from "next-intl";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TypographyEyebrow } from "@/components/ui/typography";

import { useTestimonialsCarousel } from "./lib/use-testimonials-carousel";

function TestimonialsCarousel() {
  const t = useTranslations("Testimonials");
  const testimonials = t.raw("items");
  const { activeIndex, setCarouselApi } = useTestimonialsCarousel();

  return (
    <section
      className="section-frame section-grid section-grid-dark relative overflow-hidden bg-background py-14 text-foreground sm:py-24 lg:py-30"
      aria-labelledby="testimonials-title"
    >
      <div className="content-container">
        <div className="flex items-start justify-between gap-6">
          <TypographyEyebrow id="testimonials-title">
            {t("eyebrow")}
          </TypographyEyebrow>
          <p
            className="shrink-0 font-mono text-sm uppercase tracking-[0.16em] text-muted-foreground"
            aria-live="polite"
          >
            {String(activeIndex + 1).padStart(2, "0")} /{" "}
            {String(testimonials.length).padStart(2, "0")}
          </p>
        </div>

        <Carousel
          data-reveal
          setApi={setCarouselApi}
          opts={{ align: "start", loop: true }}
          className="mt-10 sm:mt-16"
          aria-label={t("eyebrow")}
        >
          <CarouselContent className="ml-0">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.quote} className="pl-0">
                <blockquote className="max-w-[72rem]">
                  <p className="line-clamp-3 text-pretty text-2xl leading-8 font-medium tracking-[0.030rem] sm:text-4xl sm:leading-11 lg:text-5xl lg:leading-15 xl:text-6xl xl:leading-20">
                    “{testimonial.quote}”
                  </p>
                </blockquote>

                <div className="mt-8 flex max-w-2xl flex-col gap-1 font-mono text-xs leading-5 sm:mt-12 sm:text-sm">
                  <p className="uppercase tracking-[0.12em] text-foreground">
                    {testimonial.author}, {testimonial.role} at{" "}
                    {testimonial.company}
                  </p>
                  <p className="text-muted-foreground">{t("concept")}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <nav
            className="mt-9 flex justify-end gap-2 sm:mt-12"
            aria-label={t("controls")}
          >
            <CarouselPrevious
              className="static m-0 translate-none rounded-none"
              size="icon-lg"
              aria-label={t("previous")}
            />
            <CarouselNext
              className="static m-0 translate-none rounded-none"
              size="icon-lg"
              aria-label={t("next")}
            />
          </nav>
        </Carousel>
      </div>
    </section>
  );
}

export default TestimonialsCarousel;
