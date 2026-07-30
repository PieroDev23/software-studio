"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { useLenis } from "lenis/react";
import { useEffect, useRef, useState } from "react";

gsap.registerPlugin(useGSAP, SplitText);

function CaseStudyMotionShell({ children }) {
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

      const observedAnimations = new Map();
      const splits = [];

      const observer = new IntersectionObserver(
        contextSafe((entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }

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
    { scope: contentRef },
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

export default CaseStudyMotionShell;
