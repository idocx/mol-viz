import { Canvas, useThree } from 'react-three-fiber';
import React from 'react';
import ReactDOM from 'react-dom';
import { OrbitControls } from 'drei';
import { createGlobalStyle } from 'styled-components';

import Frame from './components/frame';
import { Ball } from './components/ball';
import { getMassCenter } from './utils';

const Style = createGlobalStyle`
  html,
  body,
  #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`; 

function Centralize({ base_mat }) {
  const { scene } = useThree();
  let mass_center = getMassCenter(base_mat);
  scene.translateX(-mass_center[0]);
  scene.translateY(-mass_center[1]);
  scene.translateZ(-mass_center[2]);
  return (null)
}

function App() {
  const base_mat = [
    [1.3, 0.2, 0.0],
    [0.3, 1.5, 0.0],
    [0.0, 0.0, 1.0]
  ]
  return (
    <>
      <Style />
      <Canvas
        gl={{ 
          antialias: true,
          alpha: true
        }}
        orthographic
        camera={{
          zoom: 240
        }}
        pixelRatio={window.devicePixelRatio}
      >
        <Centralize base_mat={base_mat} />
        <ambientLight args={['#fff', 0.9]}/>
        <directionalLight position={[0, 5, 5]} args={['#fff', 0.4]}/>
        <Frame position={[0, 0, 0]} base_mat={base_mat} />
        <Ball position={[0, 0, 0]} size={0.15}/>
        <Ball position={[1.3, 0.2, 0]} size={0.15}/>
        <Ball position={[0.3, 1.5, 0]} size={0.15}/>
        <Ball position={[0, 0, 1.0]} size={0.15}/>
        <Ball position={[1.6, 1.7, 0]} size={0.15}/>
        <Ball position={[1.3, 0.2, 1.0]} size={0.15}/>
        <Ball position={[0.3, 1.5, 1.0]} size={0.15}/>
        <Ball position={[1.6, 1.7, 1.0]} size={0.15}/>
        <Ball position={[0.8, 0.85, 0.5]} size={0.15}/>
        <OrbitControls />
      </Canvas>
    </>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)