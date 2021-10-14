import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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
    return shades.slice(1);
  };

  const shades = gatherShades(palette, colorId);

  const colorBoxes = shades.map((color) => {
    return (
      <ColorBox key={color.name} name={color.name} background={color[format]} />
    );
  });

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  return (
    <div className="SingleColorPalette Palette">
      <Navbar handleFormatChange={changeColorFormat} showingAllColors={false} />
      <div className="Palette-colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link className="back-button" to={`/palette/${palette.id}`}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </div>
  );
}
