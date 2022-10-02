import React, { useState } from "react";
import { useBox } from "@react-three/cannon";
import videoFile from '../vid_lecture.mp4'
import vidFile from '../vid.mp4'
import * as THREE from "three";


export const LectureCube = (props) => {
  const [image, selectedImage] = useState(null)

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

export const TeacherCube = (props) => {
  const [image, selectedImage] = useState(null)

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
    vid.src = vidFile;
    vid.play();
    return vid;
  })

  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[15, 15, .1]} />
      <meshStandardMaterial emissive={"white"} side={THREE.FrontSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};
