"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const wordRef = useRef(null);
  const wordWrapperRef = useRef(null);
  const [visible, setVisible] = useState(true);

  useGSAP(
    (_context, contextSafe) => {
      const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (reduceMotion) {
        setVisible(false);
        onComplete?.();
        return;
      }

      const originalOverflow = document.documentElement.style.overflow;
      document.documentElement.style.overflow = "hidden";

      const swapWord = contextSafe((word) => {
        const wordElement = wordRef.current;
        const wrapperElement = wordWrapperRef.current;

        if (!wordElement || !wrapperElement) {
          return;
        }

        const currentWidth = wrapperElement.getBoundingClientRect().width;
        wordElement.textContent = word;

        gsap.set(wrapperElement, { width: "auto" });
        const targetWidth = wrapperElement.getBoundingClientRect().width;
        gsap.set(wrapperElement, { width: currentWidth });

        gsap.to(wrapperElement, {
          width: targetWidth,
          duration: 0.65,
          ease: "power3.inOut",
          overwrite: true,
        });
      });

      const revealWord = contextSafe((withTracking = false) => {
        gsap.fromTo(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 1.015,
            letterSpacing: withTracking ? "0.02em" : "-0.055em",
          },
          {
            autoAlpha: 1,
            scale: 1,
            letterSpacing: "-0.055em",
            duration: 0.55,
            ease: "power3.out",
          },
        );
      });

      const finish = contextSafe(() => {
        document.documentElement.style.overflow = originalOverflow;
        setVisible(false);
        onComplete?.();
        ScrollTrigger.refresh();
      });

      const sweepWord = contextSafe(() => {
        gsap.fromTo(
          wordRef.current,
          { backgroundPosition: "100% 50%" },
          {
            backgroundPosition: "0% 50%",
            duration: 0.85,
            ease: "power1.inOut",
          },
        );
      });

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
        onComplete: finish,
      });

      timeline
        .from("[data-loader-meta]", {
          y: 18,
          autoAlpha: 0,
          duration: 0.55,
          stagger: 0.08,
        })
        .fromTo(
          "[data-loader-phrase]",
          {
            yPercent: 110,
            autoAlpha: 0,
          },
          {
            yPercent: 0,
            autoAlpha: 1,
            duration: 0.75,
            ease: "power3.out",
          },
          0.12,
        )
        .addLabel("hold")
        .fromTo(
          "[data-loader-rule]",
          { scaleX: 0, autoAlpha: 0 },
          {
            scaleX: 1,
            autoAlpha: 1,
            duration: 0.55,
            transformOrigin: "left center",
          },
          "hold+=0.05",
        )
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "hold+=0.65",
        )
        .to(
          "[data-loader-rule]",
          { scaleX: 0, autoAlpha: 0, duration: 0.3 },
          "hold+=0.65",
        )
        .call(
          () => {
            swapWord("Design deliberately.");
            revealWord();
          },
          [],
          "hold+=0.95",
        )
        .call(sweepWord, [], "hold+=1.55")
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "hold+=2.45",
        )
        .call(
          () => {
            swapWord("Build properly.");
            revealWord(true);
          },
          [],
          "hold+=2.75",
        )
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.4,
            ease: "power2.inOut",
          },
          "hold+=3.55",
        )
        .call(
          () => {
            swapWord("Manyas®");
            revealWord();
          },
          [],
          "hold+=3.85",
        )
        .fromTo(
          "[data-loader-signoff]",
          {
            autoAlpha: 0,
            y: 10,
          },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
          },
          "hold+=4.05",
        )
        .to(
          "[data-loader-content]",
          {
            y: -24,
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "hold+=4.75",
        )
        .addLabel("reveal")
        .call(
          () => {
            window.dispatchEvent(new Event("manyas:loader-reveal"));
          },
          [],
          "reveal",
        )
        .to(
          "[data-loader-grid]",
          { autoAlpha: 0, duration: 0.3, ease: "power2.out" },
          "reveal",
        )
        .to(
          "[data-loader-panel]",
          {
            yPercent: -101,
            duration: 0.8,
            stagger: 0.075,
            ease: "power4.inOut",
          },
          "reveal",
        );

      return () => {
        document.documentElement.style.overflow = originalOverflow;
        timeline.kill();
      };
    },
    { scope: loaderRef },
  );

  if (!visible) {
    return null;
  }

  return (
    <output
      ref={loaderRef}
      className="page-loader fixed inset-0 z-[100] isolate block overflow-hidden text-foreground"
      aria-live="polite"
      aria-label="Loading Manyas"
    >
      <div className="absolute inset-0 grid grid-cols-3" aria-hidden="true">
        <span data-loader-panel className="bg-background" />
        <span data-loader-panel className="bg-background" />
        <span data-loader-panel className="bg-background" />
      </div>

      <div
        data-loader-grid
        className="loader-grid pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      <div
        data-loader-content
        className="relative z-10 flex min-h-svh flex-col justify-between p-5 sm:p-8 lg:p-12"
      >
        <div className="flex items-start justify-between gap-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
          <p data-loader-meta>Manyas®</p>
          <p data-loader-meta>Lima / Worldwide</p>
        </div>

        <div className="flex flex-col items-center overflow-visible py-[0.16em]">
          <p
            data-loader-phrase
            className="flex items-center justify-center text-center text-[clamp(2.75rem,8.5vw,8rem)] font-medium leading-[0.95] tracking-[-0.055em]"
          >
            <span
              ref={wordWrapperRef}
              className="inline-block min-w-0 shrink-0 overflow-visible px-[0.08em] pb-[0.12em] text-center"
            >
              <span
                ref={wordRef}
                data-loader-word
                className="loader-spectrum -mb-[0.18em] inline-block whitespace-nowrap px-[0.06em] pb-[0.18em]"
              >
                Think clearly.
              </span>
            </span>
          </p>
          <span
            data-loader-rule
            className="mt-5 h-px w-20 bg-foreground sm:mt-7 sm:w-28"
            aria-hidden="true"
          />
          <p
            data-loader-signoff
            className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm"
          >
            Senior product studio.
          </p>
        </div>

        <p
          data-loader-meta
          className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
        >
          Strategy / Design / Engineering
        </p>
      </div>
    </output>
  );
}

export default PageLoader;
