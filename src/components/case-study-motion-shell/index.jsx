"use client";

import { useRef } from "react";

import { useCurtainTransition } from "@/components/curtain-transition";
import { useTransitionReady } from "@/components/page-motion/lib/use-transition-ready";
import { PageJumpNavigation } from "@/components/page-motion/page-jump-navigation";

import { useCaseStudyMotion } from "./animations/use-case-study-motion";

function CaseStudyMotionShell({ children }) {
  const contentRef = useRef(null);
  const { contentBlocked } = useCurtainTransition();
  const transitionReady = useTransitionReady(contentBlocked);

  useCaseStudyMotion(contentRef, transitionReady);

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

export default CaseStudyMotionShell;
