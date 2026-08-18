import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";

import { jumpScrollTo } from "@/lib/smooth-scroll";
import axoLogo from "../../../assets/images/logos_bn_png/blanco/axo-longevity_blanco.png";
import bcpLogo from "../../../assets/images/logos_bn_png/blanco/bcp_blanco.png";
import filoLogo from "../../../assets/images/logos_bn_png/blanco/filo_blanco.png";
import pchujoyLogo from "../../../assets/images/logos_bn_png/blanco/pchujoy_blanco.png";
import ultimateLogo from "../../../assets/images/logos_bn_png/blanco/ultimate_agencia_white.png";

import { useCurtainAnimation } from "./animations/use-curtain-animation";
import { CURTAIN_COLUMNS, CURTAIN_LAYERS } from "./lib/curtain-config";

const caseStudyLogos = {
  "AXO LONGEVITY": { src: axoLogo, className: "h-8 sm:h-10" },
  FILO: { src: filoLogo, className: "h-12 sm:h-14" },
  PCHUJOY: { src: pchujoyLogo, className: "h-9 sm:h-11" },
  SAMAY: { src: bcpLogo, className: "h-8 sm:h-10" },
  "ULTIMATE AGENCIA": { src: ultimateLogo, className: "h-8 sm:h-10" },
};

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
  const resetScroll = useCallback(() => {
    jumpScrollTo(0);
  }, []);

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
    resetScroll,
  });

  useEffect(() => {
    if (!destinationReady) return;

    exitRef.current?.();
  }, [destinationReady]);

  const isIntro = transition.type === "intro";
  const isCaseStudy = transition.variant === "case-study";
  const [caseStudyClient, ...caseStudyCopyLines] = isCaseStudy
    ? transition.phrase.split("\n")
    : [];
  const caseStudyCopy = caseStudyCopyLines.join("\n");
  const caseStudyLogo = caseStudyLogos[caseStudyClient];

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

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-5 sm:px-8 lg:px-12">
            <div className="flex w-full flex-col items-center overflow-visible py-[0.16em]">
              <p
                data-curtain-phrase
                className="flex w-full items-center justify-center text-center text-4xl font-medium tracking-[0.030rem] sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl"
              >
                <span className="inline-block min-w-0 max-w-full overflow-visible px-[0.08em] pb-[0.12em] text-center">
                  <span
                    ref={wordRef}
                    data-curtain-word
                    className="curtain-spectrum curtain-think-highlight -mb-[0.18em] inline-block max-w-full whitespace-pre-line px-[0.06em] pb-[0.18em] leading-[1.15]"
                  >
                    <span data-curtain-word-text>{copy.think}</span>
                  </span>
                </span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div
          data-curtain-content
          className="relative z-10 flex min-h-svh items-center justify-center overflow-hidden px-5 py-8"
        >
          {isCaseStudy ? (
            <div className="flex max-w-6xl flex-col items-center text-center">
              <div data-curtain-copy>
                {caseStudyLogo ? (
                  <Image
                    src={caseStudyLogo.src}
                    alt={caseStudyClient}
                    className={`${caseStudyLogo.className} w-auto max-w-64 object-contain`}
                    sizes="256px"
                  />
                ) : (
                  <p className="font-mono text-base font-medium uppercase tracking-[0.2em] text-muted-foreground sm:text-lg">
                    {caseStudyClient}
                  </p>
                )}
              </div>
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
