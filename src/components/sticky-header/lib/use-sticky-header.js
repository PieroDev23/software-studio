import { useEffect, useState } from "react";

import { smoothScrollTo } from "@/lib/smooth-scroll";

function useStickyHeader(lenis) {
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    let frame;

    const updateVisibility = () => {
      frame = undefined;
      setVisible(window.scrollY > 140);
    };
    const handleScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateVisibility);
    };

    updateVisibility();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  const navigateToSection = (event) => {
    const target = document.querySelector(
      event.currentTarget.dataset.scrollTarget,
    );
    if (!target) return;

    setMobileOpen(false);
    smoothScrollTo(lenis, target);
  };

  const toggleMobileMenu = () => {
    setMobileOpen((open) => !open);
  };

  return {
    visible,
    mobileOpen,
    navigateToSection,
    toggleMobileMenu,
  };
}

export { useStickyHeader };
