"use client";

import { useLocale } from "next-intl";

import { usePathname, useRouter } from "@/i18n/navigation";

function LanguageSwitcher({ className = "" }) {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (nextLocale) => {
    if (nextLocale === locale) return;

    router.replace(pathname, { locale: nextLocale });
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
            aria-pressed={active}
            className={`cursor-pointer px-2.5 py-2 transition-colors first:border-r first:border-current/25 ${
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

export default LanguageSwitcher;
