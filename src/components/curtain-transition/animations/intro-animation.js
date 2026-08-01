import { gsap } from "gsap";

import { getPanelExitDelay, PANEL_DURATION } from "../lib/curtain-config";

function createIntroTimeline({
  root,
  wordElement,
  copy,
  contextSafe,
  setContentBlocked,
  finishTransition,
}) {
  const panels = gsap.utils.toArray(
    root.querySelectorAll("[data-curtain-panel]"),
  );
  const grid = root.querySelector("[data-curtain-grid]");
  const content = root.querySelector("[data-curtain-content]");
  const wordText = wordElement.querySelector("[data-curtain-word-text]");
  const registeredMark = wordElement.querySelector(
    "[data-curtain-registered-mark]",
  );

  const swapWord = contextSafe((word, withRegisteredMark = false) => {
    wordElement.classList.remove("curtain-think-highlight");
    wordElement.classList.toggle("curtain-brand-word", withRegisteredMark);
    wordText.textContent = word;
    registeredMark.hidden = !withRegisteredMark;

    gsap.set(wordElement, { backgroundPosition: "100% 50%" });
  });

  const revealWord = contextSafe(
    (withTracking = false, isBrandWord = false) => {
      const finalLetterSpacing = isBrandWord ? "0.16em" : "-0.03em";

      gsap.fromTo(
        wordElement,
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
      "[data-curtain-signoff]",
      { autoAlpha: 0, y: 10 },
      { autoAlpha: 1, y: 0, duration: 0.35 },
      "signature+=0.2",
    )
    .to(
      content,
      {
        y: -24,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.in",
      },
      "signature+=1.1",
    )
    .addLabel("reveal")
    .call(setContentBlocked, [false], "reveal")
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
