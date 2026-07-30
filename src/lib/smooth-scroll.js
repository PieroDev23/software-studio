const scrollEasing = (progress) => (1 - Math.cos(Math.PI * progress)) / 2;

function resolveTargetTop(target) {
  if (typeof target === "number") return target;
  if (target === "max") return document.documentElement.scrollHeight;
  if (target instanceof HTMLElement) {
    return target.getBoundingClientRect().top + window.scrollY;
  }
  return window.scrollY;
}

function getScrollDuration(target) {
  const distance = Math.abs(resolveTargetTop(target) - window.scrollY);
  const viewportDistance = distance / Math.max(window.innerHeight, 1);
  return Math.min(3.6, Math.max(2.4, 2.2 + viewportDistance * 0.14));
}

export function smoothScrollTo(lenis, target) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  if (lenis && !reducedMotion) {
    lenis.scrollTo(target, {
      duration: getScrollDuration(target),
      easing: scrollEasing,
    });
    return;
  }

  window.scrollTo({
    top: resolveTargetTop(target),
    behavior: reducedMotion ? "auto" : "smooth",
  });
}
