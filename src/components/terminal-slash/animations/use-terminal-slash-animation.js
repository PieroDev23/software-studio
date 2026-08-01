import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

const FRAMES = ["/", "—", "\\", "|"];

function useTerminalSlashAnimation(slashRef) {
  useGSAP(
    () => {
      const slash = slashRef.current;
      if (!slash) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      let frame = 0;
      const ticker = gsap.to(
        {},
        {
          duration: 0.16,
          repeat: -1,
          repeatDelay: 0.08,
          paused: true,
          onRepeat: () => {
            frame = (frame + 1) % FRAMES.length;
            slash.textContent = FRAMES[frame];
          },
        },
      );
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) ticker.play();
        else ticker.pause();
      });

      observer.observe(slash);

      return () => {
        observer.disconnect();
        ticker.kill();
      };
    },
    { scope: slashRef },
  );
}

export { useTerminalSlashAnimation };
