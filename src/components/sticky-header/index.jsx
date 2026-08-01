"use client";

import { useLenis } from "lenis/react";
import { MenuIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";

import LanguageSwitcher from "@/components/language-switcher";
import { Button } from "@/components/ui/button";

import { useStickyHeader } from "./lib/use-sticky-header";

function StickyHeader() {
  const t = useTranslations("StickyHeader");
  const hero = useTranslations("Hero");
  const lenis = useLenis();
  const { visible, mobileOpen, navigateToSection, toggleMobileMenu } =
    useStickyHeader(lenis);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[60] border-b border-white/15 bg-black/92 text-white shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-md transition-[transform,opacity] duration-500 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none -translate-y-full opacity-0"
      }`}
      aria-hidden={!visible}
      inert={!visible}
    >
      <div className="content-container flex h-16 items-center justify-between gap-3 px-4 sm:h-[4.5rem] sm:gap-5 sm:px-8 lg:px-12">
        <button
          type="button"
          data-scroll-target="#top"
          onClick={navigateToSection}
          className="inline-flex shrink-0 cursor-pointer items-center whitespace-nowrap font-mono text-xs font-medium uppercase leading-none tracking-[0.18em] transition-opacity hover:opacity-65 sm:text-sm"
          aria-label={hero("homeLabel")}
        >
          Manyas <span className="align-super text-[0.65em]">®</span>
        </button>

        <div className="ml-auto flex min-w-0 items-center justify-end gap-3 sm:gap-8">
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label={t("label")}
          >
            <button
              type="button"
              data-scroll-target="#selected-work"
              onClick={navigateToSection}
              className="cursor-pointer font-mono text-xs font-medium uppercase leading-none tracking-[0.14em] transition-opacity hover:opacity-60"
            >
              {t("work")}
            </button>
            <button
              type="button"
              data-scroll-target="#team"
              onClick={navigateToSection}
              className="cursor-pointer font-mono text-xs font-medium uppercase leading-none tracking-[0.14em] transition-opacity hover:opacity-60"
            >
              {t("team")}
            </button>
          </nav>

          <div className="flex min-w-0 items-center gap-2 sm:gap-5">
            <LanguageSwitcher className="text-white" />
            <Button
              type="button"
              variant="outline"
              size="icon-lg"
              onClick={toggleMobileMenu}
              aria-expanded={mobileOpen}
              aria-controls="sticky-mobile-menu"
              aria-label={t("label")}
              className="rounded-none border-white/25 bg-transparent text-white hover:bg-white hover:text-black sm:hidden"
            >
              {mobileOpen ? <XIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>
      </div>

      <nav
        id="sticky-mobile-menu"
        aria-label={t("label")}
        className={`absolute inset-x-0 top-full border-b border-white/15 bg-black px-4 transition-[transform,opacity,visibility] duration-300 sm:hidden ${
          mobileOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="content-container flex flex-col py-2">
          <button
            type="button"
            data-scroll-target="#selected-work"
            onClick={navigateToSection}
            className="cursor-pointer border-b border-white/15 py-4 text-left font-mono text-xs font-medium uppercase leading-none tracking-[0.14em]"
          >
            {t("work")}
          </button>
          <button
            type="button"
            data-scroll-target="#team"
            onClick={navigateToSection}
            className="cursor-pointer border-b border-white/15 py-4 text-left font-mono text-xs font-medium uppercase leading-none tracking-[0.14em]"
          >
            {t("team")}
          </button>
          <button
            type="button"
            data-scroll-target="#contacto"
            onClick={navigateToSection}
            className="cursor-pointer py-4 text-left font-mono text-xs font-medium uppercase leading-none tracking-[0.14em]"
          >
            {t("cta")}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default StickyHeader;
