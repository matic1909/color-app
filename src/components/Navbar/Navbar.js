import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Snackbar, Box, Select, MenuItem, IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import * as Styled from './styles';

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
    <Styled.Navbar>
      <Styled.Logo className="logo">
        <Link to="/">reactcolorpicker</Link>
      </Styled.Logo>
      {showingAllColors && (
        <div className="slider-container">
          <span>Level: {level}</span>
          <Styled.Slider className="slider">
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
          </Styled.Slider>
        </div>
      )}
      <Box sx={{ minWidth: 120 }} className="select-container">
        <Select value={format} onChange={(e) => setFormat(e.target.value)}>
          <MenuItem value="hex">HEX - #ffffff</MenuItem>
          <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
          <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 1.0)</MenuItem>
        </Select>
      </Box>
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
    </Styled.Navbar>
  );
}
