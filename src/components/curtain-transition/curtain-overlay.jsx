import { useEffect, useRef } from "react";

import { useCurtainAnimation } from "./animations/use-curtain-animation";
import { CURTAIN_COLUMNS, CURTAIN_LAYERS } from "./lib/curtain-config";

function CurtainOverlay({
  transition,
  copy,
  destinationReady,
  onCovered,
  setContentBlocked,
  finishTransition,
}) {
  const curtainRef = useRef(null);
  const wordRef = useRef(null);
  const exitRef = useRef(null);

  useCurtainAnimation({
    curtainRef,
    wordRef,
    exitRef,
    transition,
    copy,
    destinationReady,
    onCovered,
    setContentBlocked,
    finishTransition,
  });

  useEffect(() => {
    if (destinationReady) exitRef.current?.();
  }, [destinationReady]);

  const isIntro = transition.type === "intro";
  const isCaseStudy = transition.variant === "case-study";
  const [caseStudyClient, ...caseStudyCopyLines] = isCaseStudy
    ? transition.phrase.split("\n")
    : [];
  const caseStudyCopy = caseStudyCopyLines.join("\n");

  return (
    <output
      ref={curtainRef}
      className="curtain-transition fixed inset-0 z-[120] isolate block overflow-hidden text-foreground"
      aria-live="polite"
      aria-label={isIntro ? copy.loading : transition.phrase}
    >
      <div className="absolute inset-0 grid grid-cols-3" aria-hidden="true">
        {CURTAIN_COLUMNS.map((column, columnIndex) => (
          <div key={column} className="relative">
            {CURTAIN_LAYERS.map((layer, layerIndex) => (
              <span
                key={layer}
                data-curtain-panel
                data-column={columnIndex}
                data-layer={layerIndex}
                className="curtain-panel absolute -inset-1"
              />
            ))}
          </div>
        ))}
      </div>

      <div
        data-curtain-grid
        className="curtain-grid pointer-events-none absolute inset-0 z-[1]"
        aria-hidden="true"
      />

      {isIntro ? (
        <div
          data-curtain-content
          className="relative z-10 flex min-h-svh flex-col justify-between p-5 sm:p-8 lg:p-12"
        >
          <div className="flex items-start justify-between gap-6 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm">
            <p data-curtain-meta>
              Manyas
              <span className="relative -top-[0.35em] ml-1 text-[0.65em] leading-none">
                ®
              </span>
            </p>
            <p data-curtain-meta>{copy.location}</p>
          </div>

          <div className="flex flex-col items-center overflow-visible py-[0.16em]">
            <p
              data-curtain-phrase
              className="flex w-full items-center justify-center text-center text-4xl font-medium tracking-[0.030rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
            >
              <span className="inline-block min-w-0 max-w-full overflow-visible px-[0.08em] pb-[0.12em] text-center">
                <span
                  ref={wordRef}
                  data-curtain-word
                  className="curtain-spectrum curtain-think-highlight -mb-[0.18em] inline-block max-w-full whitespace-normal px-[0.06em] pb-[0.18em] sm:whitespace-nowrap"
                >
                  <span data-curtain-word-text>{copy.think}</span>
                  <span
                    data-curtain-registered-mark
                    className="curtain-registered-mark"
                    hidden
                  >
                    ®
                  </span>
                </span>
              </span>
            </p>
            <p
              data-curtain-signoff
              className="mt-5 font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground sm:text-sm"
            >
              {copy.studio}
            </p>
          </div>

          <p
            data-curtain-meta
            className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground"
          >
            {copy.disciplines}
          </p>
        </div>
      ) : (
        <div
          data-curtain-content
          className="relative z-10 flex min-h-svh items-center justify-center overflow-hidden px-5 py-8"
        >
          {isCaseStudy ? (
            <div className="flex max-w-6xl flex-col items-center text-center">
              <p
                data-curtain-copy
                className="font-mono text-base font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-lg"
              >
                {caseStudyClient}
              </p>
              <p
                data-curtain-copy
                className="mt-6 whitespace-pre-line text-4xl font-medium tracking-[0.030rem] sm:mt-8 sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                {caseStudyCopy}
              </p>
            </div>
          ) : (
            <p
              data-curtain-copy
              className="whitespace-pre-line text-center text-4xl font-medium tracking-[0.030rem] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
            >
              {transition.phrase}
            </p>
          )}
        </div>
      )}
    </output>
  );
}

export { CurtainOverlay };
