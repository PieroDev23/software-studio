import { gsap } from "gsap";

import {
  getPanelEnterDelay,
  getPanelExitDelay,
  PANEL_DURATION,
} from "../lib/curtain-config";

function createNavigationAnimation({
  root,
  contextSafe,
  destinationReadyRef,
  onCovered,
  setContentBlocked,
  finishTransition,
  resetScroll,
}) {
  const panels = gsap.utils.toArray(
    root.querySelectorAll("[data-curtain-panel]"),
  );
  const grid = root.querySelector("[data-curtain-grid]");
  const content = root.querySelector("[data-curtain-content]");
  const text = gsap.utils.toArray(
    content.querySelectorAll("[data-curtain-copy]"),
  );
  let exitStarted = false;

  const playExit = contextSafe(() => {
    if (exitStarted) return;
    exitStarted = true;

    gsap
      .timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: contextSafe(finishTransition),
      })
      .to(content, {
        y: -24,
        autoAlpha: 0,
        duration: 0.35,
        ease: "power2.in",
      })
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
  });

  const enterTimeline = gsap
    .timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: contextSafe(() => {
        resetScroll();
        onCovered();
        if (destinationReadyRef.current) playExit();
      }),
    })
    .fromTo(
      panels,
      { yPercent: 101 },
      {
        yPercent: 0,
        duration: PANEL_DURATION,
        stagger: getPanelEnterDelay,
      },
    )
    .fromTo(
      text,
      { yPercent: 110, autoAlpha: 0 },
      {
        yPercent: 0,
        autoAlpha: 1,
        duration: 0.5,
        ease: "power3.out",
      },
      "-=0.14",
    );

  return { enterTimeline, playExit };
}

export { createNavigationAnimation };
