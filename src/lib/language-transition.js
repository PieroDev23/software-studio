import { gsap } from "gsap";

import {
  getLoaderPanelEnterDelay,
  getLoaderPanelExitDelay,
  LOADER_COLUMN_COUNT,
  LOADER_LAYER_COUNT,
  LOADER_PANEL_DURATION,
} from "@/lib/loader-motion";

let activeTransition = null;

function finishActiveTransition() {
  const transition = activeTransition;
  if (!transition || transition.isExiting) return;

  transition.isExiting = true;
  clearTimeout(transition.safetyTimeout);

  gsap
    .timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        document.documentElement.style.overflow = transition.originalOverflow;
        transition.loader.remove();
        activeTransition = null;
        transition.onComplete?.();
      },
    })
    .to({}, { duration: 0.16 })
    .to(transition.content, {
      y: -24,
      autoAlpha: 0,
      duration: 0.35,
      ease: "power2.in",
    })
    .addLabel("reveal")
    .call(
      () => {
        window.__manyasNavigationTransitionActive = false;
        window.dispatchEvent(new CustomEvent("manyas:navigation-reveal"));
      },
      [],
      "reveal",
    )
    .to(
      transition.grid,
      { autoAlpha: 0, duration: 0.25, ease: "power2.out" },
      "reveal",
    )
    .to(
      transition.panelElements,
      {
        yPercent: -101,
        duration: LOADER_PANEL_DURATION,
        stagger: (_index, panel) => getLoaderPanelExitDelay(panel),
        ease: "power4.inOut",
      },
      "reveal",
    );
}

export function completeNavigationTransition(targetKey) {
  if (!activeTransition || activeTransition.targetKey !== targetKey) return;

  activeTransition.destinationReady = true;
  if (activeTransition.covered) finishActiveTransition();
}

export function isNavigationTransitionActive() {
  return (
    typeof window !== "undefined" &&
    window.__manyasNavigationTransitionActive === true
  );
}

export function playLanguageTransition({
  targetLocale,
  phrase,
  onCovered,
  onComplete,
}) {
  return playNavigationTransition({
    targetKey: `locale:${targetLocale}`,
    phrase,
    onCovered,
    onComplete,
  });
}

export function playNavigationTransition({
  targetKey,
  phrase,
  onCovered,
  onComplete,
}) {
  if (activeTransition) return;

  const originalOverflow = document.documentElement.style.overflow;
  const loader = document.createElement("div");
  const panels = document.createElement("div");
  const grid = document.createElement("div");
  const content = document.createElement("div");
  const text = document.createElement("p");

  loader.className =
    "fixed inset-0 z-[120] isolate block overflow-hidden bg-transparent text-foreground";
  loader.setAttribute("role", "status");
  loader.setAttribute("aria-live", "polite");

  panels.className = "absolute inset-0 grid grid-cols-3";
  panels.setAttribute("aria-hidden", "true");

  for (
    let columnIndex = 0;
    columnIndex < LOADER_COLUMN_COUNT;
    columnIndex += 1
  ) {
    const column = document.createElement("div");
    column.className = "navigation-transition-column relative";

    for (let layerIndex = 0; layerIndex < LOADER_LAYER_COUNT; layerIndex += 1) {
      const panel = document.createElement("span");
      panel.className = "navigation-transition-layer absolute -inset-1";
      panel.dataset.languagePanel = "";
      panel.dataset.column = String(columnIndex);
      panel.dataset.layer = String(layerIndex);
      column.append(panel);
    }

    panels.append(column);
  }

  grid.className = "loader-grid pointer-events-none absolute inset-0 z-[1]";
  grid.setAttribute("aria-hidden", "true");

  content.className =
    "relative z-10 flex min-h-svh items-center justify-center overflow-hidden px-5 py-8";
  text.className =
    "whitespace-pre-line text-center text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[1.12] tracking-[var(--heading-tracking)] sm:leading-[1.08]";
  text.dataset.languagePhrase = "";
  text.textContent = phrase;

  content.append(text);
  loader.append(panels, grid, content);
  document.body.append(loader);
  document.documentElement.style.overflow = "hidden";
  window.__manyasNavigationTransitionActive = true;

  const panelElements = Array.from(
    loader.querySelectorAll("[data-language-panel]"),
  ).sort(
    (first, second) =>
      Number(first.dataset.layer) - Number(second.dataset.layer) ||
      Number(first.dataset.column) - Number(second.dataset.column),
  );

  activeTransition = {
    targetKey,
    loader,
    text,
    content,
    grid,
    panelElements,
    originalOverflow,
    onComplete,
    covered: false,
    destinationReady: false,
    isExiting: false,
    safetyTimeout: null,
  };

  activeTransition.safetyTimeout = window.setTimeout(
    finishActiveTransition,
    15000,
  );

  gsap
    .timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        if (!activeTransition) return;

        activeTransition.covered = true;
        onCovered?.();

        if (activeTransition.destinationReady) {
          finishActiveTransition();
        }
      },
    })
    .fromTo(
      panelElements,
      { yPercent: 101 },
      {
        yPercent: 0,
        duration: LOADER_PANEL_DURATION,
        stagger: (_index, panel) => getLoaderPanelEnterDelay(panel),
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

  return true;
}
