import React from "react";

function Box() {
  return (
    <mesh position={[0, 2, 0]}>
      <ambientLight />
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" color="hotpink" />
      <spotLight position={[10, 15, 10]} angle={0.3}></spotLight>
    </mesh>
  );
}

export default Box;
