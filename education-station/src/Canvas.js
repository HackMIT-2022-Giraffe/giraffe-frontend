import React, { useEffect, useState } from "react";
import { Canvas } from "react-three-fiber";
import { Scene } from "./scene/Scene";
import AudioPlayer from "react-h5-audio-player";

export default function Lecture(props) {
  const [play, setPlay] = useState(false);

  useEffect(() => {
    props.setShowNavBar(false);

    return () => {
      props.setShowNavBar(true);
    };
  }, []);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, [props.speech])

  return loaded ? (
    <div>
      {/* <AudioPlayer
        // style={{ width: "300px" }}
        autoPlay={true}
        // layout="horizontal"
        src={Sound}
        // other props here
      /> */}
      <audio src={new Blob(props.speech)}></audio>
      <Canvas shadowMap>
        <Scene />
      </Canvas>
    </div>
  ) : <></>;
}
