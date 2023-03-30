import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import Exe from "./3dsrc/exe";

function App() {
  return (
    <div className="App">
      <Canvas>
        <OrbitControls autoRotate={false} />
        <Exe />
        <color attach={'background'} args={['#cdcdcd']} />
      </Canvas>
    </div>
  );
}

export default App;
