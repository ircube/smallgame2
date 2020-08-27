import React, { useRef, useState, Fragment } from "react";
import { Scene, WebGLRenderer, PointLight, Mesh } from "three";
import { Canvas, useFrame } from "react-three-fiber";
import Box from "./Box";

export default Area => (
  <Fragment>
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Box position={[-2, 0, 0]} />
      <Box position={[2, 0, 0]} />
      <Box position={[0, 2, 0]} />
    </Canvas>
  </Fragment>
);
