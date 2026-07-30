"use client";

import { useLocale } from "next-intl";
import { useEffect } from "react";

import { usePathname } from "@/i18n/navigation";
import { completeNavigationTransition } from "@/lib/language-transition";

function LanguageTransitionObserver() {
  const locale = useLocale();
  const pathname = usePathname();

  useEffect(() => {
    completeNavigationTransition(`locale:${locale}`);
    completeNavigationTransition(`path:${pathname}`);
  }, [locale, pathname]);

  return null;
}

export default LanguageTransitionObserver;
