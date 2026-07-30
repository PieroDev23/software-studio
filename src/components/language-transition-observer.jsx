"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

import { completeLanguageTransition } from "@/lib/language-transition";

function LanguageTransitionObserver() {
  const locale = useLocale();

  useEffect(() => {
    completeLanguageTransition(locale);
  }, [locale]);

  return null;
}

export default LanguageTransitionObserver;
