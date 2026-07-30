"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

import PageLoader from "@/components/page-loader";

gsap.registerPlugin(useGSAP, SplitText);

function MotionShell({ children, showLoader = true }) {
  const contentRef = useRef(null);
  const [canScrollUp, setCanScrollUp] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const updateNavigation = () => {
      setCanScrollUp(window.scrollY > 24);
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateNavigation);
    };
  }, []);

  useGSAP(
    (_context, contextSafe) => {
      const root = contentRef.current;

      if (!root) {
        return;
      }

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reducedMotion) {
        gsap.set(root.querySelectorAll("[data-reveal]"), {
          clearProps: "all",
        });
        return;
      }

      const headingAnimations = new Map();
      const revealAnimations = new Map();
      const splits = [];
      const createObserver = (animations, rootMargin) =>
        new IntersectionObserver(
          contextSafe((entries, observer) => {
            for (const entry of entries) {
              if (!entry.isIntersecting) {
                continue;
              }

              animations.get(entry.target)?.();
              animations.delete(entry.target);
              observer.unobserve(entry.target);
            }
          }),
          { rootMargin, threshold: 0.01 },
        );
      const headingObserver = createObserver(
        headingAnimations,
        "0px 0px -12% 0px",
      );
      const revealObserver = createObserver(
        revealAnimations,
        "0px 0px -10% 0px",
      );

      const hero = root.querySelector("[data-hero]");
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
        splits.push(heroSplit);

        heroTimeline
          .from(heroChrome, {
            y: 14,
            autoAlpha: 0,
            duration: 0.55,
            stagger: 0.12,
            ease: "power3.out",
          })
          .from(
            heroRevealElements[0],
            { y: 20, autoAlpha: 0, duration: 0.55, ease: "power3.out" },
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

      const playHero = contextSafe(() => {
        heroTimeline.play(0);
      });

      if (showLoader) {
        window.addEventListener("manyas:loader-reveal", playHero, {
          once: true,
        });
      } else {
        playHero();
      }

      const headings = gsap.utils
        .toArray(root.querySelectorAll("h1, h2, h3, [data-motion-heading]"))
        .filter((heading) => !heading.closest("[data-hero]"));

      for (const heading of headings) {
        const split = SplitText.create(heading, {
          type: "words",
          mask: "words",
          wordsClass: "motion-word",
          aria: "auto",
        });
        splits.push(split);

        const highlights = gsap.utils.toArray(
          heading.querySelectorAll("[data-highlight], .text-impact-gradient"),
        );
        gsap.set(split.words, { yPercent: 115, autoAlpha: 0 });
        gsap.set(highlights, { "--highlight-progress": "0%" });

        headingAnimations.set(heading, () => {
          const timeline = gsap.timeline();
          timeline.to(split.words, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.045,
          });

          if (highlights.length > 0) {
            timeline.to(
              highlights,
              {
                "--highlight-progress": "100%",
                duration: 0.45,
                ease: "power3.out",
              },
              ">-=0.32",
            );
          }
        });
        headingObserver.observe(heading);
      }

      const reveals = gsap.utils
        .toArray(root.querySelectorAll("[data-reveal]"))
        .filter((element) => !element.closest("[data-hero]"));

      for (const element of reveals) {
        gsap.set(element, { y: 36, autoAlpha: 0 });
        revealAnimations.set(element, () => {
          gsap.to(element, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,visibility,opacity",
          });
        });
        revealObserver.observe(element);
      }

      return () => {
        window.removeEventListener("manyas:loader-reveal", playHero);
        headingObserver.disconnect();
        revealObserver.disconnect();
        splits.forEach((split) => {
          split.revert();
        });
      };
    },
    { scope: contentRef, dependencies: [showLoader], revertOnUpdate: true },
  );

  const scrollTo = (position) => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const target = position === 0 ? 0 : document.documentElement.scrollHeight;

    if (lenis && !reducedMotion) {
      lenis.scrollTo(target, { lerp: 0.075 });
      return;
    }

    window.scrollTo({
      top: target,
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <>
      {showLoader ? <PageLoader /> : null}
      <div ref={contentRef}>{children}</div>

      <nav
        className="fixed right-4 bottom-4 z-50 sm:right-8 sm:bottom-8"
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
