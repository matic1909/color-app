import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);

  const changeLevel = (level) => {
    setLevel(level);
  };

  const changeColorFormat = (val) => {
    alert(val);
  };

  const { colors } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color.hex} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleChange={changeColorFormat}
      />
      {/* Navbar goes here */}
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
}
