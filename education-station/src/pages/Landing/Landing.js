import  "./Landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'
import React, { Component } from 'react';

function Landing() {
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
                    <button className="uploadButton" >
                        <a id="uploadLink" href="/loading">
                    <FontAwesomeIcon className="icon" icon={faUpload} />Upload PDF
                    </a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Landing