import { useTranslations } from "next-intl";

import { usePageJump } from "./lib/use-page-jump";

function PageJumpNavigation() {
  const translate = useTranslations("Navigation");
  const { isAtPageEnd, jumpToPageBoundary } = usePageJump();
  const label = isAtPageEnd ? translate("top") : translate("end");

  return (
    <nav
      className="fixed right-4 bottom-4 z-50 sm:right-8 sm:bottom-8"
      aria-label={translate("page")}
    >
      <button
        type="button"
        onClick={jumpToPageBoundary}
        className="inline-flex size-10 cursor-pointer items-center justify-center border border-border bg-background/90 font-mono text-base text-foreground shadow-lg backdrop-blur-sm transition-colors hover:bg-foreground hover:text-background focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:size-12 sm:text-lg"
        aria-label={label}
        title={label}
      >
        <span key={isAtPageEnd ? "up" : "down"} aria-hidden="true">
          {isAtPageEnd ? "↑" : "↓"}
        </span>
      </button>
    </nav>
  );
}

export { PageJumpNavigation };
