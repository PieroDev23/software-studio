import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

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
        gsap.set(split.words, { yPercent: 140 });
        observedAnimations.set(heading, () => {
          gsap.to(split.words, {
            yPercent: 0,
            duration: 1.05,
            ease: "power2.out",
          });
        });
        observer.observe(heading);
      }

      const revealElements = gsap.utils
        .toArray(root.querySelectorAll("[data-reveal]"))
        .filter(
          (element) =>
            !element.closest("h1, h2, h3, [data-motion-heading]") &&
            !element.querySelector("h1, h2, h3, [data-motion-heading]"),
        );

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

      const parallaxMedia = gsap.matchMedia();

      parallaxMedia.add("(min-width: 768px)", () => {
        const hero = root.querySelector("[data-case-study-hero]");
        const content = root.querySelector("[data-parallax-case-content]");

        if (hero && content) {
          gsap.to(content, {
            y: -140,
            ease: "none",
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: "bottom top",
              scrub: 0.3,
            },
          });
        }

        const shift = root.querySelector("[data-parallax-shift]");
        const quote = root.querySelector("[data-parallax-shift-quote]");
        const meta = root.querySelector("[data-parallax-shift-meta]");

        if (shift && quote) {
          gsap.fromTo(
            quote,
            { y: 70 },
            {
              y: -70,
              ease: "none",
              scrollTrigger: {
                trigger: shift,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.45,
              },
            },
          );
        }

        if (shift && meta) {
          gsap.fromTo(
            meta,
            { y: 35 },
            {
              y: -35,
              ease: "none",
              scrollTrigger: {
                trigger: shift,
                start: "clamp(top bottom)",
                end: "clamp(bottom top)",
                scrub: 0.55,
              },
            },
          );
        }

        ScrollTrigger.refresh();
      });

      return () => {
        parallaxMedia.revert();
        observer.disconnect();
        for (const split of splits) split.revert();
      };
    },
    {
      scope: contentRef,
      dependencies: [transitionReady],
      revertOnUpdate: true,
    },
  );
}
