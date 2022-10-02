import Landing from "./pages/Landing/Landing";
import "./App.css";
import Loading from "./pages/Loading/Loading";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

// Styles
import "./App.css";
import React, { useState } from "react";
import Lecture from "./Canvas";

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);
  const [figureText, setFigureText] = useState({});
  const [speech, setSpeech] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing setFigureText={setFigureText} />} />
        <Route path="/about" element={<Landing />} />
        <Route path="/plans" element={<Landing />} />
        <Route
          path="/loading"
          element={<Loading figureText={figureText} setSpeech={setSpeech} />}
        />
        <Route
          path="/lecture"
          element={<Lecture setShowNavBar={(next) => setShowNavBar(next)} />}
        />
        {/* <Route path="/view" element={<Canvas shadowMap /> /> */}
      </Routes>
    </Router>
  );
}
