import { gsap } from "gsap";

let activeTransition = null;

export function playLanguageTransition({ phrase, onCovered, onComplete }) {
  if (activeTransition) {
    return;
  }

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

  for (let index = 0; index < 3; index += 1) {
    const panel = document.createElement("span");
    panel.className = "bg-background";
    panel.dataset.languagePanel = "";
    panels.append(panel);
  }

  grid.className = "loader-grid pointer-events-none absolute inset-0 z-[1]";
  grid.setAttribute("aria-hidden", "true");

  content.className =
    "relative z-10 flex min-h-svh items-center justify-center overflow-hidden px-5 py-8";
  text.className =
    "text-center text-[clamp(2.5rem,7vw,7rem)] font-medium leading-[0.98] tracking-[-0.03em]";
  text.dataset.languagePhrase = "";
  text.textContent = phrase;

  content.append(text);
  loader.append(panels, grid, content);
  document.body.append(loader);
  document.documentElement.style.overflow = "hidden";

  const panelElements = loader.querySelectorAll("[data-language-panel]");

  const cleanup = () => {
    document.documentElement.style.overflow = originalOverflow;
    loader.remove();
    activeTransition = null;
    onComplete?.();
  };

  activeTransition = gsap
    .timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: cleanup,
    })
    .fromTo(
      panelElements,
      { yPercent: 101 },
      {
        yPercent: 0,
        duration: 0.48,
        stagger: 0.045,
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
    )
    .call(onCovered)
    .to({}, { duration: 0.42 })
    .to(text, {
      yPercent: -110,
      autoAlpha: 0,
      duration: 0.5,
      ease: "power3.in",
    })
    .to(
      panelElements,
      {
        yPercent: -101,
        duration: 0.48,
        stagger: 0.045,
      },
      "-=0.24",
    );
}
