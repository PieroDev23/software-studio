"use client";

import { useLenis } from "lenis/react";
import Link from "next/link";

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

    if (lenis) {
      lenis.scrollTo(target, { duration: 0.85 });
      return;
    }

    target.scrollIntoView({ behavior: "smooth", block: "start" });
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
