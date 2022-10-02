import React, { useEffect, useRef } from "react";

// Physics
import { Physics } from "@react-three/cannon";

// Three
import { extend, useThree } from "react-three-fiber";
import { PointerLockControls } from "three/examples/jsm/controls/PointerLockControls";

// Prefabs
import { Plane } from "../components/Plane";
import { Player } from "../components/Player";
import { TeacherCube, LectureCube } from "../components/Cube";



extend({ PointerLockControls });

export const Scene = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useEffect(() => {
    camera.layers.enable(0);
    camera.layers.enable(1);
  }, [camera]);

  useEffect(() => {
    const handleFocus = () => {
      controls.current.lock();
    };
    document.addEventListener("click", handleFocus);

    return () => {
      document.removeEventListener("click", handleFocus);
    };
  }, [gl]);

  return (
    <>

      <pointerLockControls ref={controls} args={[camera, gl.domElement]} />

      <directionalLight position={[3, 0, 3]} intensity={0.5} castShadow />
      <ambientLight intensity={0.6} />
      <Physics
        gravity={[0, -9, 0]}
        tolerance={0}
        iterations={50}
        broadphase={"SAP"}
      >
        {/** Player */}
        <Player />
        {/** Plane */}
        <Plane />
        {/** Cubes */}

      <LectureCube position={[0, -3, -10]} />
        <TeacherCube position={[-10, -5, -8]} />
      </Physics>
    </>
  );
};
