import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import ColorBox from './ColorBox';
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

const SingleColorPaletteStyles = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .colors {
    height: 90vh;
  }

  .back-button {
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -15px;
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    line-height: 30px;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
  }

  .go-back {
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    cursor: pointer;
    position: relative;
    margin-bottom: -3.5px;
    background-color: black;
  }
`;

function SingleColorPalette({ palette, colorId }) {
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
    <SingleColorPaletteStyles className="SingleColorPalette Palette">
      <Navbar handleFormatChange={changeColorFormat} showingAllColors={false} />
      <div className="colors">
        {colorBoxes}
        <div className="go-back ColorBox">
          <Link className="back-button" to={`/palette/${palette.id}`}>
            Go Back
          </Link>
        </div>
      </div>
      <PaletteFooter paletteName={palette.paletteName} emoji={palette.emoji} />
    </SingleColorPaletteStyles>
  );
}

export default SingleColorPalette;
