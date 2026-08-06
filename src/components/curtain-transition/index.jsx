"use client";

import { usePathname } from "next/navigation";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { CurtainOverlay } from "./curtain-overlay";
import { getCurtainCopy, getRoute } from "./lib/curtain-copy";

const CurtainTransitionContext = createContext(null);

function useCurtainTransition() {
  const context = useContext(CurtainTransitionContext);

  if (!context) {
    throw new Error(
      "useCurtainTransition must be used within CurtainTransition",
    );
  }

  return context;
}

function CurtainTransition({ children }) {
  const pathname = usePathname();
  const route = getRoute(pathname);
  const transitionId = useRef(0);
  const initialTransition =
    route.pathname === "/" ? { id: 0, type: "intro" } : null;
  const [transition, setTransition] = useState(initialTransition);
  const [contentBlocked, setContentBlocked] = useState(
    Boolean(initialTransition),
  );

  const startTransition = useCallback(
    (options) => {
      if (transition) return false;

      transitionId.current += 1;
      setContentBlocked(true);
      setTransition({
        id: transitionId.current,
        type: "navigation",
        ...options,
      });
      return true;
    },
    [transition],
  );

  const finishTransition = useCallback(() => {
    transition?.onComplete?.();
    setTransition(null);
  }, [transition]);

  useEffect(() => {
    if (!transition) return;

    const cancelTransition = (event) => {
      if (event.type === "pageshow" && !event.persisted) return;

      transition.onComplete?.();
      setContentBlocked(false);
      setTransition(null);
    };

    window.addEventListener("popstate", cancelTransition);
    window.addEventListener("pageshow", cancelTransition);

    return () => {
      window.removeEventListener("popstate", cancelTransition);
      window.removeEventListener("pageshow", cancelTransition);
    };
  }, [transition]);

  const destinationReady = Boolean(
    transition?.type === "navigation" &&
      (transition.targetKey === `locale:${route.locale}` ||
        transition.targetKey === `path:${route.pathname}`),
  );
  const contextValue = useMemo(
    () => ({
      contentBlocked,
      introVisible: transition?.type === "intro",
      startTransition,
    }),
    [contentBlocked, startTransition, transition?.type],
  );

  return (
    <CurtainTransitionContext.Provider value={contextValue}>
      {children}
      {transition ? (
        <CurtainOverlay
          key={transition.id}
          transition={transition}
          copy={getCurtainCopy(route.locale)}
          destinationReady={destinationReady}
          onCovered={transition.onCovered}
          setContentBlocked={setContentBlocked}
          finishTransition={finishTransition}
        />
      ) : null}
    </CurtainTransitionContext.Provider>
  );
}

export { CurtainTransition, useCurtainTransition };
