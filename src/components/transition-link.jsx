"use client";

import { useLenis } from "lenis/react";
import { useState } from "react";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { playNavigationTransition } from "@/lib/language-transition";

function getTargetPath(href) {
  if (typeof href !== "string") return null;
  return href.split(/[?#]/, 1)[0] || "/";
}

function pickTransitionPhrase(label) {
  const phrases = label
    .split("||")
    .map((phrase) => phrase.trim())
    .filter(Boolean);

  return phrases[Math.floor(Math.random() * phrases.length)] || label;
}

function TransitionLink({
  children,
  href,
  onClick,
  transitionLabel,
  ...props
}) {
  const pathname = usePathname();
  const router = useRouter();
  const lenis = useLenis();
  const [isPending, setIsPending] = useState(false);

  const handleClick = (event) => {
    onClick?.(event);

    const targetPath = getTargetPath(href);
    const modifiedClick =
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey;

    if (
      event.defaultPrevented ||
      modifiedClick ||
      !targetPath ||
      targetPath === pathname ||
      props.target === "_blank"
    ) {
      return;
    }

    event.preventDefault();
    setIsPending(true);

    const started = playNavigationTransition({
      targetKey: `path:${targetPath}`,
      phrase: pickTransitionPhrase(transitionLabel),
      onCovered: () => {
        if (lenis) {
          lenis.scrollTo(0, { immediate: true, force: true });
        } else {
          window.scrollTo({ top: 0, behavior: "auto" });
        }

        router.push(href, { scroll: false });
      },
      onComplete: () => setIsPending(false),
    });

    if (!started) setIsPending(false);
  };

  return (
    <Link
      href={href}
      onClick={handleClick}
      aria-disabled={isPending || undefined}
      {...props}
    >
      {children}
    </Link>
  );
}

export default TransitionLink;
