function resolveTargetTop(target) {
  if (typeof target === "number") return target;
  if (target === "max") return document.documentElement.scrollHeight;
  if (target instanceof HTMLElement) {
    return target.getBoundingClientRect().top + window.scrollY;
  }
  return window.scrollY;
}

export function smoothScrollTo(lenis, target, options) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (lenis && !reducedMotion) {
    lenis.scrollTo(target, options);
    return;
  }

  window.scrollTo({
    top: resolveTargetTop(target),
    behavior: reducedMotion ? "auto" : "smooth",
  });
}
