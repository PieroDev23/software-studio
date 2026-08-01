"use client";

import { useRef } from "react";

import { useTerminalSlashAnimation } from "./animations/use-terminal-slash-animation";

function TerminalSlash() {
  const slashRef = useRef(null);

  useTerminalSlashAnimation(slashRef);

  return (
    <>
      <span
        ref={slashRef}
        className="inline-block w-[1ch] text-center"
        aria-hidden="true"
      >
        /
      </span>
      <span className="sr-only"> / </span>
    </>
  );
}

function TerminalMeta({ text }) {
  const [before, after] = text.split(" / ");

  if (!after) {
    return text;
  }

  return (
    <>
      {before} <TerminalSlash /> {after}
    </>
  );
}

export { TerminalMeta };
