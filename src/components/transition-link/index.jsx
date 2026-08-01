"use client";

import { useState } from "react";

import { useCurtainTransition } from "@/components/curtain-transition";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

import {
  getTargetPath,
  pickTransitionPhrase,
} from "./lib/transition-link-utils";

function TransitionLink({
  children,
  href,
  onClick,
  transitionLabel,
  ...props
}) {
  const pathname = usePathname();
  const router = useRouter();
  const { startTransition } = useCurtainTransition();
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

    const started = startTransition({
      targetKey: `path:${targetPath}`,
      phrase: pickTransitionPhrase(transitionLabel),
      onCovered: () => {
        router.push(href);
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
