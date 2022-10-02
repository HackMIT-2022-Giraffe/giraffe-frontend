import React from "react";
import { usePlane } from "@react-three/cannon";

export const Plane = () => {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
    position: [0, -7, 0],
    material: {
      friction: 0.1
    }
  }));

  return (
    <mesh ref={ref} receiveShadow={true} scale={[1000, 1000, 1000]}>
      <planeBufferGeometry />
      <meshPhongMaterial color={"gray"} receiveShadow />
    </mesh>
  );
};
