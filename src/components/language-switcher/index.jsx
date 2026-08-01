"use client";

import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

import { useCurtainTransition } from "@/components/curtain-transition";
import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher({ className = "" }) {
  const locale = useLocale();
  const t = useTranslations("Loader");
  const pathname = usePathname();
  const router = useRouter();
  const { startTransition } = useCurtainTransition();
  const [pendingLocale, setPendingLocale] = useState(null);

  const changeLanguage = (nextLocale) => {
    if (nextLocale === locale || pendingLocale) return;

    setPendingLocale(nextLocale);
    startTransition({
      targetKey: `locale:${nextLocale}`,
      phrase: t(`languageTransition.${nextLocale}`),
      onCovered: () => {
        router.replace(pathname, { locale: nextLocale });
      },
      onComplete: () => setPendingLocale(null),
    });
  };

  return (
    <fieldset
      className={`inline-flex items-center border border-current/25 font-mono text-[0.6875rem] font-medium uppercase tracking-[0.12em] ${className}`}
      aria-label={locale === "es" ? "Seleccionar idioma" : "Select language"}
    >
      {[
        ["en", "EN"],
        ["es", "ES"],
      ].map(([value, label]) => {
        const active = locale === value;

        return (
          <button
            key={value}
            type="button"
            onClick={() => changeLanguage(value)}
            disabled={Boolean(pendingLocale)}
            aria-pressed={active}
            className={`cursor-pointer px-2.5 py-2 transition-colors first:border-r first:border-current/25 disabled:cursor-wait ${
              active
                ? "underline decoration-2 underline-offset-4"
                : "opacity-55 hover:opacity-100"
            }`}
          >
            {label}
          </button>
        );
      })}
    </fieldset>
  );
}
