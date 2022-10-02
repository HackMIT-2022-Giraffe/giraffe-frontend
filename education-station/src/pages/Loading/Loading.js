import "./Loading.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCircleCheck,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";

function Loading() {
  const [loadingTextbook, setloadingTextbook] = useState(false);
  const [generatingSlides, setgeneratingSlides] = useState(true);
  const [animatingLecture, setanimatingLecture] = useState(false);

  useEffect(async () => {
    const figures_and_text_response = await fetch(
      "http://localhost:5000/upload",
      {
        method: "POST",
        //insert pdf body here
      }
    );
    const figures_and_text = figures_and_text_response.json();
    setloadingTextbook(false);

    transcript = figures_and_text.text;

    const bullets_response = await fetch("http://localhost:3000/bullets", {
      method: "POST",
      body: {
        text: text,
      },
    });
    const bullets = bullets_resposne.json();
    setgeneratingSlides(false);

    const speech_response = await fetch("http://www.localhost:5000/speech", {
      method: "POST",
      body: {
        transcript: text,
      },
    });
    speech = speech_response.json();
    setanimatingLecture(false);
  });

  return (
    <>
      <div>
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
