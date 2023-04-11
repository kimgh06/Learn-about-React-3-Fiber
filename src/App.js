import { OrbitControls } from "@react-three/drei";
import React from "react";
import { Canvas } from "react-three-fiber";
import Exe from "./3dsrc/exe";

function App() {
  return (
    <div className="App">
      <Canvas camera={{ position: [0, 10, 0] }}>
        {/* <OrbitControls /> */}
        <Exe />
        <color attach={'background'} args={['#121212']} />
      </Canvas>
    </div>
  );
}

export default App;
