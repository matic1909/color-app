import React, { useState } from 'react';
import Slider from 'rc-slider';
import Select from '@material-ui/core/Select';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { MenuItem } from '@material-ui/core';

export default function Navbar({ level, changeLevel }) {
  const [format, setFormat] = useState('hex');

  return (
    <header className="Navbar">
      <div className="logo">
        <a href="#">reactcolorpicker</a>
      </div>
      <div className="slider-container">
        <span>Level: {level}</span>
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={changeLevel}
            trackStyle={{ backgroundColor: 'transparent' }}
            railStyle={{ height: '8px' }}
            handleStyle={{
              backgroundColor: 'green',
              outline: 'none',
              border: '2px solid green',
              boxShadow: 'none',
              width: '13px',
              height: '13px',
              marginTop: '-3px',
            }}
          />
        </div>
      </div>
      <div className="select-container">
        <Select
          value={format}
          onChange={(e) => {
            setFormat(e.target.value);
          }}
        >
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
    </header>
  );
}
