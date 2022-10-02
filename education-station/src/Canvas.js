import React, { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";
import ReactSound from "react-sound";
// import Sound from './vid_lecture.mp3'

export default function Lecture(props) {
  useEffect(() => {
    props.setShowNavBar(false);

    return () => {
      props.setShowNavBar(true);
    };
  }, []);

  return (
    <div>
      <Canvas shadowMap>
        <Scene />
      </Canvas>
    </div>
  );
}
