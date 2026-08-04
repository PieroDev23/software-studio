import { gsap } from "gsap";

import { getPanelExitDelay, PANEL_DURATION } from "../lib/curtain-config";

function createIntroTimeline({
  root,
  wordElement,
  copy,
  contextSafe,
  setContentBlocked,
  finishTransition,
  resetScroll,
}) {
  const panels = gsap.utils.toArray(
    root.querySelectorAll("[data-curtain-panel]"),
  );
  const grid = root.querySelector("[data-curtain-grid]");
  const content = root.querySelector("[data-curtain-content]");
  const wordText = wordElement.querySelector("[data-curtain-word-text]");

  const swapWord = contextSafe((word) => {
    wordElement.classList.remove("curtain-think-highlight");
    wordText.textContent = word;

    gsap.set(wordElement, { backgroundPosition: "100% 50%" });
  });

  const revealWord = contextSafe((withTracking = false) => {
    gsap.fromTo(
      wordElement,
      {
        autoAlpha: 0,
        scale: 1.015,
        letterSpacing: withTracking ? "0.02em" : "-0.03em",
      },
      {
        autoAlpha: 1,
        scale: 1,
        letterSpacing: "-0.03em",
        duration: 0.45,
        ease: "power3.out",
      },
    );
  });

  const sweepSpectrum = contextSafe(() => {
    gsap.fromTo(
      wordElement,
      { backgroundPosition: "100% 50%" },
      {
        backgroundPosition: "0% 50%",
        duration: 0.9,
        ease: "power1.inOut",
      },
    );
  });

  return gsap
    .timeline({
      defaults: { ease: "power3.out" },
      onComplete: contextSafe(finishTransition),
    })
    .from("[data-curtain-meta]", {
      y: 18,
      autoAlpha: 0,
      duration: 0.4,
      stagger: 0.08,
    })
    .fromTo(
      "[data-curtain-phrase]",
      { yPercent: 110, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.8,
        ease: "power3.out",
      },
      0.12,
    )
    .fromTo(
      wordElement,
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
      wordElement,
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
        swapWord(copy.design);
        revealWord();
      },
      [],
      "design",
    )
    .call(sweepSpectrum, [], "design+=0.3")
    .to(
      wordElement,
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
        swapWord(copy.build);
        revealWord(true);
      },
      [],
      "build",
    )
    .to(
      wordElement,
      {
        autoAlpha: 0,
        scale: 0.975,
        duration: 0.3,
        ease: "power2.inOut",
      },
      "build+=1",
    )
    .addLabel("signoff", "build+=1.3")
    .call(
      () => {
        swapWord(copy.signoff);
        revealWord();
      },
      [],
      "signoff",
    )
    .addLabel("reveal", "signoff+=1.2")
    .call(resetScroll, [], "reveal")
    .call(setContentBlocked, [false], "reveal")
    .to(
      content,
      {
        y: -24,
        autoAlpha: 0,
        duration: PANEL_DURATION,
        ease: "power3.inOut",
      },
      "reveal",
    )
    .to(grid, { autoAlpha: 0, duration: 0.25, ease: "power2.out" }, "reveal")
    .to(
      panels,
      {
        yPercent: -101,
        duration: PANEL_DURATION,
        stagger: getPanelExitDelay,
        ease: "power4.inOut",
      },
      "reveal",
    );
}

export { createIntroTimeline };
