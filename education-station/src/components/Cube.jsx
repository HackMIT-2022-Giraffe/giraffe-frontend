import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import videoFile from '../vid.mp4'
import * as THREE from "three";


export const Cube = (props) => {
  const [cubeRef] = useBox(() => ({
    mass: 1000,
    args: [0.5, 0.5, 0.5],
    material: {
      friction: 1,
      restitution: 0
    },
    ...props
  }));

  const [video] = useState(() => {
    const vid = document.createElement('video');
    vid.loop = true;
    vid.crossOrigin = 'Anonymous';
    vid.muted = true;
    vid.src = videoFile;
    vid.play();
    return vid;
  })

  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[16, 16, 0.5]} />
      <meshStandardMaterial emissive={"white"} side={THREE.FrontSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};
