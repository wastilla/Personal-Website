import React from 'react'
import { Suspense, useEffect, useState } from 'react';
import {motion} from 'framer-motion';
import { Canvas } from '@react-three/fiber';
// import {styles} from '.../styles';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./vintage-pc/scene.gltf')

  function resizeCanvasToDisplaySize() {
    const canvas = renderer.domElement;
    // look up the size the canvas is being displayed
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
  
    // adjust displayBuffer size to match
    if (canvas.width !== width || canvas.height !== height) {
      // you must pass false here or three.js sadly fights the browser
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
  
      // update any render target sizes here
    }
  }

  return (
    <mesh>
      <hemisphereLight intensity={0.15}
      groundColor="black"/>
      <pointLight intensity={1}/>
      <spotLight
      position={[-20, 50, 10]}
      angle={0.12}
      penumbra={1}
      intensity={1}
      castShadow
      onAfterRender={resizeCanvasToDisplaySize}
      shadow-mapSize={1024}/>
      <primitive 
      object ={computer.scene}
      scale={1.3}
      position={[0, -3.25, -1.5]}
      rotation={[-0.01, -0.2, -0.1]}/>
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
    frameLoop="demand"
    shadows
    camera={{position: [25, 3, 5], fov: 25}}
    gl={{preserveDrawingBuffer: true}}> 
      <Suspense fallback = {<CanvasLoader/>}>
        <OrbitControls
        autoRotate = {true}
        autoRotateSpeed={5}
        enableZoom = {false}
        maxPolarAngle={Math.PI /2}
        minPolarAngle={Math.PI/2}
        />
        <Computers/>
      </Suspense>
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas
