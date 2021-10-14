import { useEffect, useRef, useState } from 'react';
import { Snackbar, Select, MenuItem, IconButton } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar({
  level,
  changeLevel,
  handleFormatChange,
  showingAllColors,
}) {
  const [format, setFormat] = useState('hex');
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const firstRender = useRef(true);

  useEffect(() => {
    // Do not show Snackbar when component is first mounted
    if (!firstRender.current) {
      handleFormatChange(format);
      setSnackbarOpen(true);
    }
    firstRender.current = false;
  }, [format, handleFormatChange]);

  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <header className="Navbar">
      <div className="logo">
        <Link to="/">reactcolorpicker</Link>
      </div>
      {showingAllColors && (
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
      )}
      <div className="select-container">
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </div>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={snackbarOpen}
        autoHideDuration={3000}
        message={
          <span id="message-id">Format changed to {format.toUpperCase()}</span>
        }
        ContentProps={{ 'aria-describedby': 'message-id' }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color="inherit"
            key="close"
            aria-label="close"
          >
            <Close />
          </IconButton>,
        ]}
      />
    </header>
  );
}
