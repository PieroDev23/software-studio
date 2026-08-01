import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

export function useCaseStudyMotion(contentRef, transitionReady) {
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

      const observedAnimations = new Map();
      const splits = [];
      const observer = new IntersectionObserver(
        contextSafe((entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;

            observedAnimations.get(entry.target)?.();
            observedAnimations.delete(entry.target);
            observer.unobserve(entry.target);
          }
        }),
        { rootMargin: "0px 0px -10% 0px", threshold: 0.01 },
      );

      const headings = gsap.utils.toArray(
        root.querySelectorAll("h1, h2, h3, [data-motion-heading]"),
      );

      for (const heading of headings) {
        const split = SplitText.create(heading, {
          type: "words",
          mask: "words",
          wordsClass: "motion-word",
          aria: "auto",
        });
        splits.push(split);

        gsap.set(split.words, { yPercent: 115, autoAlpha: 0 });
        observedAnimations.set(heading, () => {
          gsap.to(split.words, {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.85,
            ease: "power3.out",
            stagger: 0.045,
          });
        });
        observer.observe(heading);
      }

      const revealElements = gsap.utils
        .toArray(root.querySelectorAll("[data-reveal]"))
        .filter((element) => !element.closest("h1, h2, h3"));

      for (const element of revealElements) {
        gsap.set(element, { y: 36, autoAlpha: 0 });
        observedAnimations.set(element, () => {
          gsap.to(element, {
            y: 0,
            autoAlpha: 1,
            duration: 0.8,
            ease: "power3.out",
            clearProps: "transform,visibility,opacity",
          });
        });
        observer.observe(element);
      }

      return () => {
        observer.disconnect();
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
}
