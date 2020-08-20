import React from 'react';

export default function Ball({ position, color='orange', size=0.1, segments=32 } ) {
  return (
    <mesh 
      position={position}
      >
      <sphereBufferGeometry attach="geometry" args={[size, segments, segments]}/>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}

export function BallInCell({ position, color='orange', size=0.1, segments=32 }) {
  let positions = []
  function getPositions(i) {
    if (i < positions.length) {
      if (position[i] === 1 || position[i] === 0) {
        return 
      }
    }
  }
}