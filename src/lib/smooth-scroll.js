function resolveTargetTop(target) {
  if (typeof target === "number") return target;
  if (target === "max") return document.documentElement.scrollHeight;
  if (target instanceof HTMLElement) {
    return target.getBoundingClientRect().top + window.scrollY;
  }
  return window.scrollY;
}

export function smoothScrollTo(target) {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  window.scrollTo({
    top: resolveTargetTop(target),
    behavior: reducedMotion ? "auto" : "smooth",
  });
}

export function jumpScrollTo(target = 0) {
  const top = resolveTargetTop(target);
  const root = document.documentElement;
  const body = document.body;
  const previousScrollBehavior = root.style.scrollBehavior;
  const previousOverflow = root.style.overflow;

  root.style.scrollBehavior = "auto";
  root.style.overflow = "auto";
  window.scrollTo({ top, left: 0, behavior: "auto" });
  root.scrollTop = top;
  body.scrollTop = top;
  root.style.overflow = previousOverflow;
  root.style.scrollBehavior = previousScrollBehavior;
}
