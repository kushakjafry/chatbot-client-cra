import React from "react";

function Plane() {
  return (
    <mesh
      position={[0, 0, 0]}
      rotation={[-Math.PI / 2, 0, 0]}
      castShadow={true}
      frustumCulled={false}
      receiveShadow={true}
    >
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshPhongMaterial
        attach="material"
        args={[{ color: 0x999999, depthWrite: false }]}
      />
    </mesh>
  );
}

export default Plane;
