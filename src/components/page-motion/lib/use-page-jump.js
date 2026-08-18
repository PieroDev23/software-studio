import { useEffect, useState } from "react";

import { smoothScrollTo } from "@/lib/smooth-scroll";

function usePageJump() {
  const [isAtPageEnd, setIsAtPageEnd] = useState(false);

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
    smoothScrollTo(target);
  };

  return { isAtPageEnd, jumpToPageBoundary };
}

export { usePageJump };
