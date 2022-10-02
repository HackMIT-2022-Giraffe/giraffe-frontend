import  "./Landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React, { Component, useState } from 'react';

function Landing() {
    const [selectedFile, setSelectedFile] = useState(null);

    const changeHandler = (event) => {
        setSelectedFile(event.target.files[0])
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

    const server_url = "http://localhost:3002"

    const submit = () => {
        let form = new FormData();
        form.append('file', selectedFile)
        console.log(form.values())
        fetch(
            server_url + '/send-pdf',
            {
                method: 'POST',
                mode: 'no-cors',
                body: form,
                headers: {
                    "Content-type": "multipart/form-data"
                }
            }
        ).then((res) => {
            console.log("success");
            console.log(res)
        }).catch((err) => {
            console.log("errpr")
            console.log(err)
        })
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