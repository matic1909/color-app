import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';
import PaletteFooter from './PaletteFooter';

export default function SingleColorPalette({ palette, colorId }) {
  const [format, setFormat] = useState('hex');

  const gatherShades = (palette, colorToFilterBy) => {
    let shades = [];
    const allColors = palette.colors;
    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }
    return shades;
  };

  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => {
    return (
      <ColorBox key={color.id} name={color.name} background={color[format]} />
    );
  });

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="Palette">
      <Navbar handleFormatChange={changeColorFormat} showingAllColors={false} />
      <div className="Palette-colors">{colorBoxes}</div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
