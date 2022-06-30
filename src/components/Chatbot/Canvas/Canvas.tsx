import { lazy, Suspense } from "react";
import { Canvas as ReactThreeCanvas } from "@react-three/fiber";
import { OrbitControls, Stats } from "@react-three/drei";
import ModelLoading from "./ModelLoading";

const PixelModel = lazy(() => import("./PixelModel"));
function Canvas({ audioTune, speechMarks, setLoadedModel }: any) {
  return (
    <ReactThreeCanvas
      camera={{
        zoom: 1.5,
        position: [-0.02, 1.5, 0.8],
        rotation: [-0.07, -0.06, 0],
      }}
      color="transparent"
    >
      <OrbitControls target={[0, 1.45, 0]} />
      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 10]} intensity={0.55} />
      <Suspense fallback={<ModelLoading setLoadedModel={setLoadedModel} />}>
        <PixelModel audioTune={audioTune} speechMarks={speechMarks} />
      </Suspense>

      <Stats showPanel={0} className="stats" />
      <axesHelper />
    </ReactThreeCanvas>
  );
}

export default Canvas;
