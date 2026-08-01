import { useFrame } from "@react-three/fiber";
import { forwardRef, useImperativeHandle, useMemo, useRef } from "react";

import { createStackedPlanesGeometry } from "../lib/create-stacked-planes-geometry";

const MergedPlanes = forwardRef(({ material, width, count, height }, ref) => {
  const meshRef = useRef(null);

  useImperativeHandle(ref, () => meshRef.current);

  const geometry = useMemo(
    () => createStackedPlanesGeometry(count, width, height, 0, 100),
    [count, width, height],
  );

  useFrame((_, delta) => {
    meshRef.current.material.uniforms.time.value += 0.1 * delta;
  });

  return <mesh ref={meshRef} geometry={geometry} material={material} />;
});
MergedPlanes.displayName = "MergedPlanes";

const PlaneNoise = forwardRef((props, ref) => (
  <MergedPlanes
    ref={ref}
    material={props.material}
    width={props.width}
    count={props.count}
    height={props.height}
  />
));
PlaneNoise.displayName = "PlaneNoise";

export { PlaneNoise };
