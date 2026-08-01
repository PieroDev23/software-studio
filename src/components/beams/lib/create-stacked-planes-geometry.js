import * as THREE from "three";

function createStackedPlanesGeometry(
  count,
  width,
  height,
  spacing,
  heightSegments,
) {
  const geometry = new THREE.BufferGeometry();
  const numVertices = count * (heightSegments + 1) * 2;
  const numFaces = count * heightSegments * 2;
  const positions = new Float32Array(numVertices * 3);
  const indices = new Uint32Array(numFaces * 3);
  const uvs = new Float32Array(numVertices * 2);
  const totalWidth = count * width + (count - 1) * spacing;
  const xOffsetBase = -totalWidth / 2;
  let vertexOffset = 0;
  let indexOffset = 0;
  let uvOffset = 0;

  for (let column = 0; column < count; column++) {
    const xOffset = xOffsetBase + column * (width + spacing);
    const uvXOffset = Math.random() * 300;
    const uvYOffset = Math.random() * 300;

    for (let segment = 0; segment <= heightSegments; segment++) {
      const y = height * (segment / heightSegments - 0.5);
      positions.set([xOffset, y, 0, xOffset + width, y, 0], vertexOffset * 3);

      const uvY = segment / heightSegments;
      uvs.set(
        [uvXOffset, uvY + uvYOffset, uvXOffset + 1, uvY + uvYOffset],
        uvOffset,
      );

      if (segment < heightSegments) {
        const a = vertexOffset;
        const b = vertexOffset + 1;
        const c = vertexOffset + 2;
        const d = vertexOffset + 3;
        indices.set([a, b, c, c, b, d], indexOffset);
        indexOffset += 6;
      }

      vertexOffset += 2;
      uvOffset += 4;
    }
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));
  geometry.setIndex(new THREE.BufferAttribute(indices, 1));
  geometry.computeVertexNormals();
  return geometry;
}

export { createStackedPlanesGeometry };
