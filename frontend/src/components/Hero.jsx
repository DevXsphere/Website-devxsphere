import { PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import HackerRoom from "./HackerRoom";
import CanvasLoader from "./CanvasLoader";
import { Leva, useControls } from "leva";

const Hero = () => {
  const x = useControls("HackerRoom", {
    positionX: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionY: {
      value: 2.5,
      min: -10,
      max: 10,
    },
    positionZ: {
      value: 2.5,
      min: -10,
      max: 10,
    },
  });
  return (
    <section className="min-h-screen w-full flex felx-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="text-7xl font-medium text-white text-center font-generalsans ">
          Welcome to DevXsphere
        </p>
        <div className="w-1/2 mx-auto">
          <p className="text-gray_gradient text-xl text-center">
            A vibrant community of developers, tech enthusiasts in Delhi,
            fostering open-source values, knowledge sharing,and collaboration.
          </p>
        </div>

        <div className="w-full h-full absolute inset-0">
          <Leva />
          <Canvas className="w-full h-full">
            <Suspense fallback={<CanvasLoader />}>
              <PerspectiveCamera makeDefault position={[0, 0, 30]} />
              <HackerRoom
                position={[0, 0, 0]}
                rotation={[0, 280, 0]}
                scale={[x.positionX, x.positionY, x.positionZ]}
              />

              <ambientLight intensity={1} />
              <directionalLight position={[10, 10, 10]} intensity={0.5} />
            </Suspense>
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default Hero;
