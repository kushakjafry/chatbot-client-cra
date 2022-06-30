import { Html } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";

export default function ModelLoading({ setLoadedModel }: any) {
  const boxRef = useRef<Mesh<BufferGeometry, Material | Material[]> | null>(
    null
  );
  useFrame(() => {
    boxRef.current!.rotation.y += 0.01;
  });

  useEffect(
    () => () => setLoadedModel(true),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <>
      <Html
        center
        position={[0, 1.35, 0]}
        color="white"
        className="tw-text-white tw-text-xl"
      >
        Loading
      </Html>
      <mesh
        ref={boxRef}
        rotation-x={Math.PI * 0.25}
        rotation-y={Math.PI * 0.25}
        position={[0, 1.5, 0]}
        scale={0.1}
      >
        <boxBufferGeometry attach="geometry" />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    </>
  );
}
