import  "./Landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useState } from 'react';

function Landing() {
    const [selectedFile, setSelectedFile] = useState(null);

    const changeHandler = (event) => {
        fileToBase64(event.target.files[0], (err, result) => {
            if (result) {
                setSelectedFile(result);
            }
        })
    }

    const fileToBase64 = (file, cb) => {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
          cb(null, reader.result)
        }
        reader.onerror = function (error) {
          cb(error, null)
        }
    }

    const server_url = ""

    const submit = () => {
        fetch(
            server_url + '/send-pdf',
            {
                method: 'POST',
                body: {
                    file: selectedFile
                }
            }
        )
    }

    return (
        <>
        <div className="background">
            <div className="flex-container">
                <div className="half titlePane">
                    <h1 className="giraffeLandingTitle">Giraffe</h1>
                    <hr className="divider"/>
                    <h4 className="studyEffectively">
                        Welcome to <span className="gradientColor">effective</span> learning
                    </h4>
                </div>
                <div className="half descriptionPane">
                    <p className="landingDescription">
                        Instead of mindlessly breaking your head reading the textbook, experience a VR 
                        lecture which summarizes and teaches you the material based on the level you are 
                        at the subject.
                    </p>
                    <div className="buttonContainer">
                    <input style={{color: "#FFFFFF", borderStyle: "none", fontSize: "100%", marginBottom: "10%", justifyContent: "center"}} type="file" name="file" onChange={changeHandler} />
                    <button className="uploadButton" onClick={submit} >
                    <FontAwesomeIcon className="icon" icon={faUpload} />Upload PDF
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing