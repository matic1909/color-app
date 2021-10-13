import React, { useState } from 'react';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import './Palette.css';

export default function Palette({ palette }) {
  const [level, setLevel] = useState(500);
  const [format, setFormat] = useState('hex');

  const changeLevel = (level) => {
    setLevel(level);
  };

  const changeColorFormat = (val) => {
    setFormat(val);
  };

  const { colors } = palette;
  const colorBoxes = colors[level].map((color) => (
    <ColorBox background={color[format]} name={color.name} />
  ));
  return (
    <div className="Palette">
      <Navbar
        level={level}
        changeLevel={changeLevel}
        handleFormatChange={changeColorFormat}
      />
      <div className="Palette-colors">{colorBoxes}</div>
      {/* footer eventually */}
    </div>
  );
}
