import React, {useRef, useState} from 'react';
import { Scene, Mesh } from 'three';
import { useFrame } from 'react-three-fiber';

const Box = (props) => {
  const mesh = useRef<Mesh>()
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  useFrame(() => {
    if (hovered && !active) {
      mesh.current.rotation.z += 0.01
      mesh.current.rotation.x += 0.01
    }
    if (hovered && active) {
      mesh.current.rotation.y += 0.16
      mesh.current.rotation.x += 0.13
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? [1.5, 1.5, 1.5] : [1, 1, 1]}
      onClick={e => setActive(!active)}
      onPointerOver={e => setHover(true)}
      onPointerOut={e => setHover(false)}>
      <boxBufferGeometry 
        attach="geometry"
        args={[1, 1, 1]} />
      <meshStandardMaterial
        attach="material"
        color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default Box;
