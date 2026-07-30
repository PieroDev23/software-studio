"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, useState } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

function PageLoader({ onComplete }) {
  const loaderRef = useRef(null);
  const wordRef = useRef(null);
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

      const swapWord = contextSafe((word, withRegisteredMark = false) => {
        const wordElement = wordRef.current;

        if (!wordElement) {
          return;
        }

        wordElement.classList.remove("loader-think-highlight");
        wordElement.classList.toggle("loader-brand-word", withRegisteredMark);
        wordElement.textContent = word;

        if (withRegisteredMark) {
          const registeredMark = document.createElement("span");
          registeredMark.className = "loader-registered-mark";
          registeredMark.textContent = "®";
          wordElement.append(" ", registeredMark);
        }

        gsap.set(wordElement, { backgroundPosition: "100% 50%" });
      });

      const revealWord = contextSafe(
        (withTracking = false, isBrandWord = false) => {
          const finalLetterSpacing = isBrandWord ? "0.16em" : "-0.03em";

          gsap.fromTo(
            wordRef.current,
            {
              autoAlpha: 0,
              scale: 1.015,
              letterSpacing: withTracking ? "0.02em" : finalLetterSpacing,
            },
            {
              autoAlpha: 1,
              scale: 1,
              letterSpacing: finalLetterSpacing,
              duration: 0.45,
              ease: "power3.out",
            },
          );
        },
      );

      const finish = contextSafe(() => {
        document.documentElement.style.overflow = originalOverflow;
        setVisible(false);
        onComplete?.();
        ScrollTrigger.refresh();
      });

      const sweepSpectrum = contextSafe(() => {
        gsap.fromTo(
          wordRef.current,
          { backgroundPosition: "100% 50%" },
          {
            backgroundPosition: "0% 50%",
            duration: 0.9,
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
          duration: 0.4,
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
            duration: 0.8,
            ease: "power3.out",
          },
          0.12,
        )
        .fromTo(
          wordRef.current,
          { "--highlight-progress": "0%" },
          {
            "--highlight-progress": "100%",
            duration: 0.65,
            ease: "power3.out",
          },
          0.3,
        )
        .addLabel("hold")
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "hold+=0.55",
        )
        .addLabel("design", "hold+=0.85")
        .call(
          () => {
            swapWord("Design deliberately.");
            revealWord();
          },
          [],
          "design",
        )
        .call(sweepSpectrum, [], "design+=0.3")
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "design+=1.25",
        )
        .addLabel("build", "design+=1.55")
        .call(
          () => {
            swapWord("Build properly.");
            revealWord(true);
          },
          [],
          "build",
        )
        .to(
          wordRef.current,
          {
            autoAlpha: 0,
            scale: 0.975,
            duration: 0.3,
            ease: "power2.inOut",
          },
          "build+=1",
        )
        .addLabel("signature", "build+=1.3")
        .call(
          () => {
            swapWord("Manyas", true);
            revealWord(false, true);
          },
          [],
          "signature",
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
            duration: 0.35,
          },
          "signature+=0.2",
        )
        .to(
          "[data-loader-content]",
          {
            y: -24,
            autoAlpha: 0,
            duration: 0.35,
            ease: "power2.in",
          },
          "signature+=1.1",
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
          { autoAlpha: 0, duration: 0.25, ease: "power2.out" },
          "reveal",
        )
        .to(
          "[data-loader-panel]",
          {
            yPercent: -101,
            duration: 0.65,
            stagger: 0.05,
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
          <p data-loader-meta>
            Manyas <span className="align-super text-xs">®</span>
          </p>
          <p data-loader-meta>Lima / Worldwide</p>
        </div>

        <div className="flex flex-col items-center overflow-visible py-[0.16em]">
          <p
            data-loader-phrase
            className="flex items-center justify-center text-center text-[clamp(2.75rem,8.5vw,8rem)] font-medium leading-[0.95] tracking-[-0.03em]"
          >
            <span className="inline-block min-w-0 shrink-0 overflow-visible px-[0.08em] pb-[0.12em] text-center">
              <span
                ref={wordRef}
                data-loader-word
                className="loader-spectrum loader-think-highlight -mb-[0.18em] inline-block whitespace-nowrap px-[0.06em] pb-[0.18em]"
              >
                Think clearly.
              </span>
            </span>
          </p>
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
