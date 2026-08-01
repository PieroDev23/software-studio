import * as THREE from "three";

function extendMaterial(BaseMaterial, config) {
  const physical = THREE.ShaderLib.physical;
  const {
    vertexShader: baseVert,
    fragmentShader: baseFrag,
    uniforms: baseUniforms,
  } = physical;
  const uniforms = THREE.UniformsUtils.clone(baseUniforms);
  const defaults = new BaseMaterial(config.material || {});

  if (defaults.color) uniforms.diffuse.value = defaults.color;
  if ("roughness" in defaults) uniforms.roughness.value = defaults.roughness;
  if ("metalness" in defaults) uniforms.metalness.value = defaults.metalness;
  if ("envMap" in defaults) uniforms.envMap.value = defaults.envMap;
  if ("envMapIntensity" in defaults) {
    uniforms.envMapIntensity.value = defaults.envMapIntensity;
  }

  Object.entries(config.uniforms ?? {}).forEach(([key, uniform]) => {
    uniforms[key] =
      uniform !== null && typeof uniform === "object" && "value" in uniform
        ? uniform
        : { value: uniform };
  });

  let vertexShader = `${config.header}\n${config.vertexHeader ?? ""}\n${baseVert}`;
  let fragmentShader = `${config.header}\n${config.fragmentHeader ?? ""}\n${baseFrag}`;

  for (const [include, code] of Object.entries(config.vertex ?? {})) {
    vertexShader = vertexShader.replace(include, `${include}\n${code}`);
  }
  for (const [include, code] of Object.entries(config.fragment ?? {})) {
    fragmentShader = fragmentShader.replace(include, `${include}\n${code}`);
  }

  return new THREE.ShaderMaterial({
    defines: { ...(physical.defines ?? {}) },
    uniforms,
    vertexShader,
    fragmentShader,
    lights: true,
    fog: Boolean(config.material?.fog),
  });
}

export { extendMaterial };
