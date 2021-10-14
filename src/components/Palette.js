import { useState } from 'react';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const PaletteStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .colors {
    height: 90vh;
  }
`;

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = (level) => {
    setLevel(level);
  };

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  const { colors, paletteName, emoji, id } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox
      background={color[format]}
      name={color.name}
      key={color.id}
      moreUrl={`/palette/${id}/${color.id}`}
    />
  ));
  return (
    <PaletteStyles>
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleFormatChange={changeColorFormat}
        showingAllColors
      />
      <div className="colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </PaletteStyles>
  );
}
