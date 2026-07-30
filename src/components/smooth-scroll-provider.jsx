"use client";

import { ReactLenis } from "lenis/react";

function SmoothScrollProvider({ children }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        anchors: false,
        lerp: 0.18,
        smoothWheel: true,
        syncTouch: false,
        stopInertiaOnNavigate: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}

export default SmoothScrollProvider;
