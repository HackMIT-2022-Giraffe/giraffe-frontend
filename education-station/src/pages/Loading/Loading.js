import "./Loading.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch, faCircleCheck, faCirclePlay} from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react'

function Loading() {
    const [loadingTranscript, setLoadingTranscript] = useState(true)
    const [generatingSlides, setgeneratingSlides] = useState(true)
    const [animatingLecture, setanimatingLecture] = useState(true)
    

    const server_url = "http://localhost:3001"

    const Playback = {
        "transcript": null,
        "animation": null,
        "slides": null,
    }

    // Loading Trascript
    fetch(
        server_url + "/transcript"
    ).then((res) => {
        console.log("success");
        Playback["transcript"] = res
        setLoadingTranscript(false)
    }).catch((err) => {
        console.log("errpr")
        console.log(err)
    })

    fetch(
        server_url + "/slides"
    ).then((res) => {
        console.log("success");
        Playback["slides"] = res
        setgeneratingSlides(false)
    }).catch((err) => {
        console.log("errpr")
        console.log(err)
    })

    fetch(
        server_url + "/animations"
    ).then((res) => {
        console.log("success");
        Playback["animation"] = res
        setanimatingLecture(false)
    }).catch((err) => {
        console.log("errpr")
        console.log(err)
    })

    return (
        <>
            <div>
                <div className="flex-container">
                    <div className="loadingPane">
                        <h5 className={loadingTranscript ? "loadingStates" : "loadingStates yellowText"}>
                            <FontAwesomeIcon icon={loadingTranscript ? faCircleNotch : faCircleCheck}
                                title="Loaded Transcript State"
                                className={loadingTranscript ? "fa-spin" : 'yellowText'} /> Loaded Transcript
                        </h5>
                        <h5 className={generatingSlides ? "loadingStates" : "loadingStates yellowText"}><FontAwesomeIcon icon={generatingSlides ? faCircleNotch : faCircleCheck} title="Generated Slides State" className={generatingSlides ? "fa-spin" : 'yellowText'} /> Generated Slides</h5>
                        <h5 className={animatingLecture ? "loadingStates" : "loadingStates yellowText"}><FontAwesomeIcon icon={animatingLecture ? faCircleNotch : faCircleCheck} title="Animating Lecture" className={animatingLecture ? "fa-spin" : 'yellowText'} /> Animated Lecture </h5>
                        <button className={ !loadingTranscript && !generatingSlides && !animatingLecture? "continueButton yellowText enabledButton" : "continueButton disabledText"} disabled={!loadingTranscript && !generatingSlides && !animatingLecture}>
                            <FontAwesomeIcon className="icon" icon={faCirclePlay} />Watch Lecture
                        </button>
                    </div>
                    <div className="tipPane">
                        <div className="tipCard">
                            <p className="cardTitle yellowText">
                                <span role="img" aria-label="Lightbulb for tip">💡</span> TIP: Sleep!
                            </p>
                            <p>
                                Research from the National Institute of Health has revealed that
                                sleep deprivation leads to increase stress, increased risk of depression,
                                and impaired cognitive performance.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Loading