import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";
import AudioPlayer from 'react-h5-audio-player';
import Sound from './vid_lecture.mp3'

export default function Lecture(props) {
    const [play, setPlay] = useState(false);

  useEffect(() => {
    props.setShowNavBar(false);

    return () => {
        props.setShowNavBar(true);
    }
    setPlay(true);
  }, [])
  
  return (
    <div>
        <AudioPlayer
            // style={{ width: "300px" }}
            autoPlay={true}
            // layout="horizontal"
            src={Sound}
            // other props here
        />
        <Canvas shadowMap>
            <Scene />
        </Canvas>
    </div>
  );
}