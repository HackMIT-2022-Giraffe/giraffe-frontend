import Landing from './pages/Landing/Landing';
import "./App.css"
import Loading from './pages/Loading/Loading';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';

// Styles
import "./App.css";
import React, { useState } from 'react';
import Lecture from './Canvas';

export default function App() {
  const [showNavBar, setShowNavBar] = useState(true);

  return (

    <Router>
      {showNavBar ? <Navbar /> : <></>}

      < Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<Landing/>} />
        <Route path="/plans" element={<Landing/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/lecture" element={<Lecture setShowNavBar={(next) => setShowNavBar(next)} />}  />
        {/* <Route path="/view" element={<Canvas shadowMap /> /> */}
      </Routes>
    </Router>
  );
}
