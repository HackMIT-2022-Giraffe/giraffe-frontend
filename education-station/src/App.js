import logo from './logo.svg';
import { Canvas } from '@react-three/fiber'
import Landing from './pages/Landing/Landing';
import "./App.css"
// function MainScene() {
//   return <>
//     <mesh 
//   </>;
// }

function App() {
  return (
    // <Canvas shadowMap>
    //   <MainScene />
    // </Canvas>
    <div className='App'>

    <Landing />
    </div>
  );
}

export default App;
