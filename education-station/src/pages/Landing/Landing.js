import "./Landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import React, { Component, useRef, useState } from "react";

function Landing() {
  const [selectedFile, setSelectedFile] = useState(null);

  const changeHandler = (event) => {
    fileToBase64(event.target.files[0], (err, result) => {
      if (result) {
        setSelectedFile(result);
        setShowModal(true);
      }
    });
  };

  const fileToBase64 = (file, cb) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      cb(null, reader.result);
    };
    reader.onerror = function (error) {
      cb(error, null);
    };
  };

  const server_url = "http://localhost:3001";

  const submit = () => {
    console.log("File ", selectedFile);
    fetch(server_url + "/send-pdf", {
      method: "POST",
      mode: "no-cors",
      body: JSON.stringify({
        file: selectedFile,
      }),
    })
      .then((res) => {
        console.log("success");
        console.log(res);
      })
      .catch((err) => {
        console.log("errpr");
        console.log(err);
      });
  };

  const loadFile = () => {
    fileUploadRef.current.click();
  };

  const fileUploadRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="background">
        <div className="flex-container">
          <div className="half titlePane flex-column-container">
            <h1 className="giraffeLandingTitle">Giraffe</h1>
            <hr className="divider" />
            <h4 className="studyEffectively">
              Welcome to <span className="gradientColor">effective</span>{" "}
              learning
            </h4>
          </div>
          <div className="half descriptionPane flex-column-container">
            <p className="landingDescription">
              Instead of mindlessly breaking your head reading the textbook,
              experience a VR lecture which summarizes and teaches you the
              material based on the level you are at the subject.
            </p>
            <div className="buttonContainer">
              <input
                type="file"
                id="file"
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
              <div className="modal-body">
                <div>
                  <span className="close" onClick={() => setShowModal(false)}>
                    &times;
                  </span>
                </div>
                <p>
                  Are you sure you want to upload and process this textbook?
                </p>
                <button className="confButton" onClick={submit}>
                  Generate Textbook Experience
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
}

export default Landing;
