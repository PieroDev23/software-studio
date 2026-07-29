"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useRef, useState } from "react";

import PageLoader from "@/components/page-loader";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother, SplitText);

function MotionShell({ children }) {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);

  const scrollTo = (position) => {
    const smoother = ScrollSmoother.get();
    const target = position === 0 ? 0 : document.documentElement.scrollHeight;

    if (smoother) {
      smoother.scrollTo(target, true);
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    window.scrollTo({
      top: target,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      const navigationTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          setCanScrollUp(self.scroll() > 24);
        },
        onRefresh: (self) => {
          setCanScrollUp(self.scroll() > 24);
        },
      });

      media.add(
        {
          motion: "(prefers-reduced-motion: no-preference)",
          reduced: "(prefers-reduced-motion: reduce)",
        },
        ({ conditions }) => {
          if (conditions.reduced) {
            gsap.set("[data-reveal]", { clearProps: "all" });
            return;
          }

          const smoother = ScrollSmoother.create({
            wrapper: wrapperRef.current,
            content: contentRef.current,
            smooth: 0.35,
            smoothTouch: 0,
            effects: false,
          });

          const hero = contentRef.current.querySelector("[data-hero]");
          const heroHeading = hero?.querySelector("h1");
          const heroRevealElements = hero
            ? gsap.utils.toArray(hero.querySelectorAll("[data-reveal]"))
            : [];
          const heroChrome = hero
            ? gsap.utils.toArray(hero.querySelectorAll("[data-hero-chrome]"))
            : [];

          const heroTimeline = gsap.timeline({ paused: true });

          if (heroHeading) {
            const heroSplit = SplitText.create(heroHeading, {
              type: "words",
              mask: "words",
              wordsClass: "motion-word",
              aria: "auto",
            });

            heroTimeline
              .from(
                heroChrome,
                {
                  y: 14,
                  autoAlpha: 0,
                  duration: 0.55,
                  stagger: 0.12,
                  ease: "power3.out",
                },
                0,
              )
              .from(
                heroRevealElements[0],
                {
                  y: 20,
                  autoAlpha: 0,
                  duration: 0.55,
                  ease: "power3.out",
                },
                0.08,
              )
              .from(
                heroSplit.words,
                {
                  yPercent: 115,
                  autoAlpha: 0,
                  duration: 0.85,
                  stagger: 0.045,
                  ease: "power3.out",
                },
                0.15,
              )
              .from(
                heroRevealElements.slice(1),
                {
                  y: 28,
                  autoAlpha: 0,
                  duration: 0.65,
                  stagger: 0.08,
                  ease: "power3.out",
                },
                0.42,
              );
          }

          const playHero = () => {
            heroTimeline.play(0);
          };
          window.addEventListener("manyas:loader-reveal", playHero, {
            once: true,
          });

          const headings = gsap.utils
            .toArray("h1, h2, h3")
            .filter((heading) => !heading.closest("[data-hero]"));

          for (const heading of headings) {
            SplitText.create(heading, {
              type: "words",
              mask: "words",
              wordsClass: "motion-word",
              aria: "auto",
              autoSplit: true,
              onSplit(self) {
                return gsap.from(self.words, {
                  yPercent: 115,
                  autoAlpha: 0,
                  duration: 0.85,
                  ease: "power3.out",
                  stagger: 0.045,
                  scrollTrigger: {
                    trigger: heading,
                    start: "top 88%",
                    once: true,
                  },
                });
              },
            });
          }

          const highlightedText = gsap.utils.toArray(
            "[data-highlight], .text-impact-gradient",
          );

          for (const highlight of highlightedText) {
            gsap.fromTo(
              highlight,
              { "--highlight-progress": "0%" },
              {
                "--highlight-progress": "100%",
                duration: 1,
                delay: 0.28,
                ease: "power3.out",
                scrollTrigger: {
                  trigger: highlight,
                  start: "top 88%",
                  once: true,
                },
              },
            );
          }

          const revealElements = gsap.utils
            .toArray("[data-reveal]")
            .filter((element) => !element.closest("[data-hero]"));
          gsap.set(revealElements, { y: 36, autoAlpha: 0 });

          const revealTriggers = ScrollTrigger.batch(revealElements, {
            start: "top 90%",
            once: true,
            interval: 0.08,
            batchMax: 6,
            onEnter: (elements) => {
              gsap.to(elements, {
                y: 0,
                autoAlpha: 1,
                duration: 0.8,
                ease: "power3.out",
                stagger: 0.08,
                overwrite: true,
                clearProps: "transform,visibility,opacity",
              });
            },
          });

          let active = true;
          document.fonts.ready.then(() => {
            if (active) {
              ScrollTrigger.refresh();
            }
          });

          return () => {
            active = false;
            window.removeEventListener("manyas:loader-reveal", playHero);
            revealTriggers.forEach((trigger) => {
              trigger.kill();
            });
            smoother.kill();
          };
        },
      );

      return () => {
        navigationTrigger.kill();
        media.revert();
      };
    },
    { scope: contentRef },
  );

  return (
    <>
      <PageLoader />

      <div id="smooth-wrapper" ref={wrapperRef}>
        <div id="smooth-content" ref={contentRef}>
          {children}
        </div>
      </div>

      <nav
        className="fixed bottom-4 right-4 z-50 sm:bottom-8 sm:right-8"
        aria-label="Page navigation"
      >
        <button
          type="button"
          onClick={() => scrollTo(canScrollUp ? 0 : "max")}
          className="inline-flex size-10 cursor-pointer items-center justify-center border border-border bg-background/90 font-mono text-base text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:size-12 sm:text-lg"
          aria-label={canScrollUp ? "Back to top" : "Go to page end"}
          title={canScrollUp ? "Back to top" : "Go to page end"}
        >
          <span key={canScrollUp ? "up" : "down"} aria-hidden="true">
            {canScrollUp ? "↑" : "↓"}
          </span>
        </button>
      </nav>
    </>
  );
}

export default MotionShell;
