"use client";

import { useRef } from "react";

import { useCurtainTransition } from "@/components/curtain-transition";
import { useTransitionReady } from "@/components/page-motion/lib/use-transition-ready";
import { PageJumpNavigation } from "@/components/page-motion/page-jump-navigation";

import { useHomeMotion } from "./animations/use-home-motion";

function MotionShell({ children }) {
  const contentRef = useRef(null);
  const { contentBlocked, introVisible } = useCurtainTransition();
  const transitionReady = useTransitionReady(contentBlocked, introVisible);

  useHomeMotion(contentRef, transitionReady, contentBlocked);

  return (
    <>
      <div
        ref={contentRef}
        style={{ visibility: transitionReady ? "visible" : "hidden" }}
      >
        {children}
      </div>
      <PageJumpNavigation />
    </>
  );
}

export default MotionShell;
