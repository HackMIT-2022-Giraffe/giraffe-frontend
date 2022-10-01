import Navbar from "../../components/Navbar/Navbar"
import  "./Landing.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

function Landing() {
    return (
        <>
        <div className="background">
            <Navbar />
            <div className="flex-container">
                <div className="half titlePane">
                    <h1>Giraffe</h1>
                    <hr className="divider"/>
                    <h4>
                        Welcome to <span className="gradientColor">effective</span> learning
                    </h4>
                </div>
                <div className="half descriptionPane">
                    <p>
                        Instead of mindlessly breaking your head reading the textbook, experience a VR 
                        lecture which summarizes and teaches you the material based on the level you are 
                        at the subject.
                    </p>
                    <div className="buttonContainer">
                    <button className="uploadButton">
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