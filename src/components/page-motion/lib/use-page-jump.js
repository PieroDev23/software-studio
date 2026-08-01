import { useLenis } from "lenis/react";
import { useEffect, useState } from "react";

import { smoothScrollTo } from "@/lib/smooth-scroll";

const PAGE_JUMP_LERP = 0.06;

function usePageJump() {
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const updatePageEnd = () => {
      const remainingScroll =
        document.documentElement.scrollHeight -
        (window.scrollY + window.innerHeight);
      setIsAtPageEnd(remainingScroll <= 24);
    };

    updatePageEnd();
    window.addEventListener("scroll", updatePageEnd, { passive: true });
    window.addEventListener("resize", updatePageEnd);

    return () => {
      window.removeEventListener("scroll", updatePageEnd);
      window.removeEventListener("resize", updatePageEnd);
    };
  }, []);

  const jumpToPageBoundary = () => {
    const target = isAtPageEnd ? 0 : document.documentElement.scrollHeight;
    smoothScrollTo(lenis, target, { lerp: PAGE_JUMP_LERP });
  };

  return { isAtPageEnd, jumpToPageBoundary };
}

export { usePageJump };
