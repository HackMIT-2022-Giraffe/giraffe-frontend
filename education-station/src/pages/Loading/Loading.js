import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCircleCheck,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

function Loading(props) {
  const [loadingTextbook, setloadingTextbook] = useState(true);
  const [generatingSlides, setgeneratingSlides] = useState(true);
  const [animatingLecture, setanimatingLecture] = useState(true);

  useEffect(async () => {
    const figureText = props.figureText;
    setloadingTextbook(false);

    const transcript = figureText.text;

    // const bullets_response = await fetch("http://localhost:3000/bullets", {
    //   method: "POST",
    //   body: {
    //     text: text,
    //   },
    // });
    // const bullets = bullets_resposne.json();
    setgeneratingSlides(false);

    const speech_data = new FormData();
    speech_data.append("transcript", transcript);
    const speech_response = await fetch("http://www.localhost:5000/speech", {
      method: "POST",
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
      // },
      body: speech_data,
    });
    const speech = speech_response.json();
    setanimatingLecture(false);
  });

  return (
    <>
      <div className="parent">
        <div className="flex-container">
          <div className="loadingPane">
            <h5
              className={
                loadingTextbook ? "loadingStates" : "loadingStates yellowText"
              }
            >
              <FontAwesomeIcon
                icon={loadingTextbook ? faCircleNotch : faCircleCheck}
                title="Loaded Textbook State"
                className={loadingTextbook ? "fa-spin" : "yellowText"}
              />{" "}
              Loaded Textbook
            </h5>
            <h5
              className={
                generatingSlides ? "loadingStates" : "loadingStates yellowText"
              }
            >
              <FontAwesomeIcon
                icon={generatingSlides ? faCircleNotch : faCircleCheck}
                title="Generated Slides State"
                className={generatingSlides ? "fa-spin" : "yellowText"}
              />{" "}
              Generated Slides
            </h5>
            <h5
              className={
                animatingLecture ? "loadingStates" : "loadingStates yellowText"
              }
            >
              <FontAwesomeIcon
                icon={animatingLecture ? faCircleNotch : faCircleCheck}
                title="Animating Lecture"
                className={animatingLecture ? "fa-spin" : "yellowText"}
              />{" "}
              Animated Lecture{" "}
            </h5>
            <button
              className={
                !loadingTextbook && !generatingSlides && !animatingLecture
                  ? "continueButton yellowText enabledButton"
                  : "continueButton disabledText"
              }
              disabled={
                !loadingTextbook && !generatingSlides && !animatingLecture
              }
            >
              <FontAwesomeIcon className="icon" icon={faCirclePlay} />
              Watch Lecture
            </button>
          </div>
          <div className="tipPane">
            <div className="tipCard">
              <p className="cardTitle yellowText">💡 TIP: Sleep!</p>
              <p>
                Research from the National Institute of Health has revealed that
                sleep deprivation leads to increase stress, increased risk of
                depression, and impaired cognitive performance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Loading;
