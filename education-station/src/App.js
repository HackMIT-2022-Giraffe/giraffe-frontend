import logo from './logo.svg';
import { Canvas } from '@react-three/fiber'
import Landing from './pages/Landing/Landing';
import "./App.css"
import Loading from './pages/Loading/Loading';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
// function MainScene() {
//   return <>
//     <mesh 
//   </>;
// }

// Styles
import "./styles.css";
import { Scene } from './scene/Scene';

export default function App() {
  return (

    <Router>
      <Navbar></Navbar>

      < Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/about" element={<Landing/>} />
        <Route path="/plans" element={<Landing/>} />
        <Route path="/loading" element={<Loading/>} />
        <Route path="/lecture" element={<Scene />} />
        {/* <Route path="/view" element={<Canvas shadowMap /> /> */}
      </Routes>
    </Router>
  );
}
