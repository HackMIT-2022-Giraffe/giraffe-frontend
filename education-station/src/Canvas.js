import React from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";

export default function Lecture() {
  return (
    <>
      <Canvas shadowMap>
        <Scene />
      </Canvas>
    </>
  );
}