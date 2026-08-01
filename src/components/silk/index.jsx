"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import { Color } from "three";
import { useAnimationActivity } from "@/hooks/use-animation-activity";

import { SilkPlane } from "./animations/silk-plane";
import { hexToNormalizedRgb } from "./lib/color";

function Silk({
  speed = 5,
  scale = 1,
  color = "#7B7481",
  noiseIntensity = 1.5,
  rotation = 0,
}) {
  const meshRef = useRef();
  const { elementRef, shouldAnimate } = useAnimationActivity();
  // biome-ignore lint/correctness/useExhaustiveDependencies: uniforms must keep a stable identity while props update their values.
  const uniforms = useMemo(
    () => ({
      uSpeed: { value: speed },
      uScale: { value: scale },
      uNoiseIntensity: { value: noiseIntensity },
      uColor: { value: new Color(...hexToNormalizedRgb(color)) },
      uRotation: { value: rotation },
      uTime: { value: 0 },
    }),
    [],
  );

  useEffect(() => {
    uniforms.uSpeed.value = speed;
    uniforms.uScale.value = scale;
    uniforms.uNoiseIntensity.value = noiseIntensity;
    uniforms.uColor.value.setRGB(...hexToNormalizedRgb(color));
    uniforms.uRotation.value = rotation;
  }, [speed, scale, noiseIntensity, color, rotation, uniforms]);

  return (
    <div ref={elementRef} className="h-full w-full">
      <Canvas dpr={[1, 1.5]} frameloop={shouldAnimate ? "always" : "demand"}>
        <SilkPlane ref={meshRef} uniforms={uniforms} />
      </Canvas>
    </div>
  );
}

export default Silk;
