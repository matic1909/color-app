import React from 'react';
import * as Styled from './styles';

export default function DraggableColorBox({ color, name }) {
  return (
    <Styled.DraggableColorBox color={color}>{name}</Styled.DraggableColorBox>
  );
}
