import React from 'react';
import { Line } from 'drei';
import { matMul } from '../utils';

export default function Frame({ base_mat, position=[0, 0, 0], ...lineStyle }) {
  const defaultLineStyle = {
    color: 'grey',
    linewidth: 0.5,
    ...lineStyle
  }
  const base_vec = [
    [0, 0, 0],
    [1, 0, 0],
    [1, 1, 0],
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 1],
    [1, 0, 1],
    [1, 1, 1],
    [0, 1, 1],
    [0, 0, 1],
    [0, 1, 1],
    [0, 1, 0],
    [1, 1, 0],
    [1, 1, 1],
    [1, 0, 1],
    [1, 0, 0]
  ]
  const points = matMul(base_vec, base_mat);
  return (
    <Line {...defaultLineStyle} points={points} position={position}/>
  )
}