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

export function jumpScrollTo(lenis, target = 0) {
  const top = resolveTargetTop(target);
  const root = document.documentElement;
  const previousScrollBehavior = root.style.scrollBehavior;

  root.style.scrollBehavior = "auto";
  lenis?.scrollTo(top, { immediate: true, force: true });
  window.scrollTo({ top, left: 0, behavior: "auto" });
  root.style.scrollBehavior = previousScrollBehavior;
}
