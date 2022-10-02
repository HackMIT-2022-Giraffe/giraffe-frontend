import React, { useEffect, useState } from "react";
import { applyProps, Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";
import ReactSound from "react-sound";
import Sound from './vid_lecture.mp3'

export default function Lecture(props) {

  useEffect(() => {
    props.setShowNavBar(false);

    return () => {
        props.setShowNavBar(true);
    }
  }, [])
  
  return (
    <div>
        {/* <ReactSound url={Sound} playStatus={"PLAYING"} /> */}
        <Canvas shadowMap>
            <Scene />
        </Canvas>
    </div>
  );
}