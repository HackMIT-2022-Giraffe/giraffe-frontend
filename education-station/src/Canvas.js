import React, { useEffect, useState } from "react";
import { applyProps, Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";

export default function Lecture(props) {

  useEffect(() => {
    props.setShowNavBar(false);

    return () => {
        props.setShowNavBar(true);
    }
  }, [])
  
  return (
    <>
      <Canvas shadowMap>
        <Scene />
      </Canvas>
    </>
  );
}