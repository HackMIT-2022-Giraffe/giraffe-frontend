import React, { useEffect, useState } from "react";
import { useBox } from "@react-three/cannon";
import videoFile from '../vid_lecture.mp4'
import vidFile from '../vid.mp4'
import * as THREE from "three";
import ReactAudioPlayer from "react-audio-player";
import { useLoader } from "react-three-fiber";
import Image from '../out.png'
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import fs from 'browserify-fs';

export const LectureCube = (props) => {
  const [image, selectedImage] = useState(false);

  const [cubeRef] = useBox(() => ({
    mass: 0,
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

  useEffect(() => {
      toPng(document.getElementsByClassName(""))
      .then(function (dataUrl) {
        var base64Data = dataUrl;
        console.log(base64Data);
        fs.writeFile("../out.png", base64Data, 'base64', function(err) {
          console.log(err);
        });
      });
    selectedImage(!selectedImage);
  })

  const loader = useLoader(THREE.TextureLoader, Image)

  return (
    <mesh ref={cubeRef} castShadow layers={props.layers}>
      <boxBufferGeometry args={[16, 9, 0.5]} />
      <meshStandardMaterial emissive={"black"} map={loader} ></meshStandardMaterial>
    </mesh>
  );
};

export const TeacherCube = (props) => {
  const [image, selectedImage] = useState(null)

  const [cubeRef] = useBox(() => ({
    mass: 0,
    args: [.5, .5, 0.5],
    rotation: [0, Math.PI / 4, 0],
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
      <boxBufferGeometry args={[4, 3, .1]} />
      <meshStandardMaterial emissive={"black"} side={THREE.FrontSide}>
        <videoTexture attach="map" args={[video]} />
        <videoTexture attach="emissiveMap" args={[video]} />
      </meshStandardMaterial>
    </mesh>
  );
};
