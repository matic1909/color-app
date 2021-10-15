import React from 'react';
import * as Styled from './styles';

export default function DraggableColorBox({ color }) {
  return (
    <Styled.DraggableColorBox color={color}>{color}</Styled.DraggableColorBox>
  );
}
