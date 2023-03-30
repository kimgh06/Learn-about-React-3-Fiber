import { PresentationControls, Stage } from "@react-three/drei";
import React from "react";

function Exe() {
  return <>
    <PresentationControls speed={1.5} global zoom={0.7} polar={[-0.1, Math.PI / 4]}>
      <Stage environment={"city"} intensity={1}>
        <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh>
      </Stage>
    </PresentationControls>
  </>;
}

export default Exe;