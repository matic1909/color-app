import React from 'react';
import styled from 'styled-components';

const PaletteFooterStyles = styled.footer`
  height: 4vh;
  border-color: white;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: bold;

  .emoji {
    font-size: 1.5rem;
    margin: 1rem;
  }
`;

export default function PaletteFooter({ paletteName, emoji }) {
  return (
    <PaletteFooterStyles className="Palette-footer">
      {paletteName}
      <span className="emoji">{emoji}</span>
    </PaletteFooterStyles>
  );
}
