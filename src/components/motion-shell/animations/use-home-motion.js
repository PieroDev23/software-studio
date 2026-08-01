import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useEffect, useRef } from "react";

gsap.registerPlugin(useGSAP, SplitText);

export function useHomeMotion(contentRef, transitionReady, contentBlocked) {
  const heroTimelineRef = useRef(null);

  useGSAP(
    (_context, contextSafe) => {
      const root = contentRef.current;
      if (!root || !transitionReady) return;

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
              if (!entry.isIntersecting) continue;

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
      heroTimelineRef.current = heroTimeline;

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
        heroTimelineRef.current = null;
        headingObserver.disconnect();
        revealObserver.disconnect();
        splits.forEach((split) => {
          split.revert();
        });
      };
    },
    {
      scope: contentRef,
      dependencies: [transitionReady],
      revertOnUpdate: true,
    },
  );

  useEffect(() => {
    if (transitionReady && !contentBlocked) {
      heroTimelineRef.current?.play(0);
    }
  }, [contentBlocked, transitionReady]);
}
