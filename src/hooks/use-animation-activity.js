"use client";

import { useEffect, useRef, useState } from "react";

export function useAnimationActivity() {
  const elementRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(true);
  const [isDocumentVisible, setIsDocumentVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReduceMotion(motionQuery.matches);
    const updateVisibility = () =>
      setIsDocumentVisible(document.visibilityState === "visible");

    updateMotionPreference();
    updateVisibility();

    const observer = element
      ? new IntersectionObserver(
          ([entry]) => setIsIntersecting(entry.isIntersecting),
          { rootMargin: "160px" },
        )
      : null;

    if (element) observer?.observe(element);
    motionQuery.addEventListener("change", updateMotionPreference);
    document.addEventListener("visibilitychange", updateVisibility);

    return () => {
      observer?.disconnect();
      motionQuery.removeEventListener("change", updateMotionPreference);
      document.removeEventListener("visibilitychange", updateVisibility);
    };
  }, []);

  return {
    elementRef,
    shouldAnimate: isIntersecting && isDocumentVisible && !reduceMotion,
  };
}
