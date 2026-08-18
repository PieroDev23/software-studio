import { gsap } from "gsap";
import { useLayoutEffect, useRef } from "react";

import { createIntroTimeline } from "./intro-animation";
import { createNavigationAnimation } from "./navigation-animation";

function useCurtainAnimation({
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
}) {
  const destinationReadyRef = useRef(destinationReady);
  const animationConfig = useRef({
    transition,
    copy,
    onCovered,
    setContentBlocked,
    finishTransition,
    resetScroll,
  }).current;
  destinationReadyRef.current = destinationReady;

  useLayoutEffect(() => {
    const media = gsap.matchMedia();

    media.add(
      {
        reduceMotion: "(prefers-reduced-motion: reduce)",
        allowMotion: "(prefers-reduced-motion: no-preference)",
      },
      (context) => {
        const contextSafe = (callback) => context.add(null, callback);
        const {
          transition: activeTransition,
          copy: activeCopy,
          onCovered: coverDestination,
          setContentBlocked: blockContent,
          finishTransition: finish,
          resetScroll: resetIntroScroll,
        } = animationConfig;

        if (context.conditions.reduceMotion) {
          if (activeTransition.type === "intro") {
            resetIntroScroll();
            blockContent(false);
            finish();
            return;
          }

          let finished = false;
          exitRef.current = contextSafe(() => {
            if (finished) return;
            finished = true;
            blockContent(false);
            finish();
          });
          resetIntroScroll();
          coverDestination();
          if (destinationReadyRef.current) exitRef.current();
          return;
        }

        if (activeTransition.type === "intro") {
          createIntroTimeline({
            root: curtainRef.current,
            wordElement: wordRef.current,
            copy: activeCopy,
            contextSafe,
            setContentBlocked: blockContent,
            finishTransition: finish,
            resetScroll: resetIntroScroll,
          });
          return;
        }

        const animation = createNavigationAnimation({
          root: curtainRef.current,
          contextSafe,
          destinationReadyRef,
          onCovered: coverDestination,
          setContentBlocked: blockContent,
          finishTransition: finish,
          resetScroll: resetIntroScroll,
        });
        exitRef.current = animation.playExit;
      },
      curtainRef.current,
    );

    return () => {
      exitRef.current = null;
      media.revert();
    };
  }, [animationConfig, curtainRef, exitRef, wordRef]);
}

export { useCurtainAnimation };
