import { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

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
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleFormatChange={changeColorFormat}
        showingAllColors
      />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={paletteName} emoji={emoji} />
    </div>
  );
}
