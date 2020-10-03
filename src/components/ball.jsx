import React from 'react';

export function Ball({ position, color='orange', size=0.1, segments=32 } ) {
  return (
    <mesh 
      position={position}
    >
      <sphereBufferGeometry attach="geometry" args={[size, segments, segments]}/>
      <meshStandardMaterial attach="material" color={color} />
    </mesh>
  )
}
