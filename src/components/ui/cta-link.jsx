"use client";

import { useLenis } from "lenis/react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const tones = {
  default: "border-border text-foreground",
  inverse: "border-inverse-border text-inverse-foreground",
};

function CtaLink({
  children,
  className,
  href,
  onClick,
  tone = "default",
  ...props
}) {
  const lenis = useLenis();
  const isPageAnchor = typeof href === "string" && href.startsWith("#");
  const Component = isPageAnchor ? "a" : Link;

  const handleClick = (event) => {
    onClick?.(event);

    if (!isPageAnchor || event.defaultPrevented) {
      return;
    }

    const target = document.querySelector(href);

    if (!target) {
      return;
    }

    event.preventDefault();

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (lenis && !reducedMotion) {
      lenis.scrollTo(target, {
        duration: 2,
        easing: (progress) => (1 - Math.cos(Math.PI * progress)) / 2,
      });
      return;
    }

    target.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <Component
      data-slot="cta-link"
      href={href}
      onClick={handleClick}
      className={cn(
        "group inline-flex items-center gap-4 border-b pb-2 font-mono text-sm font-medium uppercase tracking-[0.12em] transition-opacity hover:opacity-70",
        tones[tone],
        className,
      )}
      {...props}
    >
      {children}
      <span
        className="transition-transform duration-300 group-hover:translate-x-1"
        aria-hidden="true"
      >
        ↗
      </span>
    </Component>
  );
}

export { CtaLink };
