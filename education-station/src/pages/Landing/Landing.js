import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleNotch,
  faCircleCheck,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { applyProps } from "react-three-fiber";

function Landing(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();
  const fileUploadRef = useRef(null);

  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
    setShowModal(true);
  };

  const server_url = "http://127.0.0.1:5000";

  const submit = () => {
    setSubmitted(true);
    const formData = new FormData();

    formData.append("pdf", selectedFile);

    fetch(server_url + "/upload-file", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((responseJson) => {
        props.setFigureText(responseJson);
        navigate("/loading");
      });
  };

  const loadFile = () => {
    fileUploadRef.current.click();
  };

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="half titlePane">
            <h1 className="giraffeLandingTitle">Giraffe</h1>
            <hr className="divider" />
            <h4 className="studyEffectively">
              Welcome to <span className="gradientColor">effective</span>{" "}
              learning
            </h4>
          </div>
          <div className="half descriptionPane">
            <p className="landingDescription">
              Instead of mindlessly breaking your head reading the textbook,
              experience a VR lecture which summarizes and teaches you the
              material based on the level you are at the subject.
            </p>
            <div className="buttonContainer">
              <input
                type="file"
                id="uploadedFile"
                name="uploadedFile"
                ref={fileUploadRef}
                style={{ display: "none" }}
                onChange={changeHandler}
              />

              <button className="uploadButton" onClick={loadFile}>
                <FontAwesomeIcon className="icon" icon={faUpload} />
                Upload PDF
              </button>
            </div>
          </div>
        </div>

        {showModal ? (
          <div id="myModal" className="modal">
            <div className="modal-content">
              <div className="modal-header">
                <span className="close" onClick={() => setShowModal(false)}>
                  &times;
                </span>
                <h2>Textbook Upload Confirmation</h2>
              </div>
              <div className="modal-body">
                <p>
                  {submitted
                    ? "Processing..."
                    : "Are you sure you want to upload this pdf?"}
                </p>
                {submitted ? (
                  <h1>
                    <FontAwesomeIcon
                      icon={faCircleNotch}
                      title="Loaded Textbook State"
                      className={"fa-spin"}
                    />
                  </h1>
                ) : (
                  <button className="confButton" onClick={submit}>
                    Generate Textbook Experience
                  </button>
                )}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Landing;
