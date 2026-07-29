"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const frames = ["/", "—", "\\", "|"];

function TerminalSlash() {
  const slashRef = useRef(null);

  useGSAP(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let frame = 0;
    const ticker = gsap.to(
      {},
      {
        duration: 0.16,
        repeat: -1,
        repeatDelay: 0.08,
        paused: true,
        onRepeat: () => {
          frame = (frame + 1) % frames.length;
          if (slashRef.current) {
            slashRef.current.textContent = frames[frame];
          }
        },
      },
    );

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ticker.play();
      } else {
        ticker.pause();
      }
    });

    observer.observe(slashRef.current);

    return () => {
      observer.disconnect();
      ticker.kill();
    };
  });

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

export { TerminalMeta, TerminalSlash };
