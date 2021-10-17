import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PaletteFormNav from './PaletteFormNav';
import { useHistory } from 'react-router';
import { arrayMove } from 'react-sortable-hoc';
import ColorPickerForm from './ColorPickerForm';
import DraggableColorList from './DraggableColorList';

const drawerWidth = 400;
const maxColors = 20;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    height: 'calc(100vh - 64px)',
    padding: 0,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    '& .container': {
      width: '90%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    },
    '& .buttons': {
      width: '100%',
    },
    '& .button': {
      width: '50%',
    },
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

function NewPaletteForm({ palettes, savePalette }) {
  const [open, setOpen] = useState(false);
  const [colors, setColors] = useState(palettes[0].colors);
  const history = useHistory();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const addNewColor = (newColor) => {
    setColors([...colors, newColor]);
  };

  const deleteColor = (colorName) => {
    const newColors = colors.filter((color) => color.name !== colorName);
    setColors(newColors);
  };

  const clearColors = () => {
    setColors([]);
  };

  const addRandomColor = () => {
    const allColors = palettes.map((p) => p.colors).flat();
    let randomColor = allColors[Math.floor(Math.random() * allColors.length)];
    const colorNames = colors.map((color) => color.name.toLowerCase());
    let failedAttempts = 0;
    while (
      failedAttempts < 10 &&
      colorNames.includes(randomColor.name.toLowerCase())
    ) {
      randomColor = allColors[Math.floor(Math.random() * allColors.length)];
      failedAttempts++;
    }
    if (failedAttempts > 9) alert("Can't generate more random colors");
    else setColors([...colors, randomColor]);
  };

  const handleSubmit = (newPalette) => {
    const toAdd = {
      ...newPalette,
      id: newPalette.paletteName.toLowerCase().replace(/ /g, '-'),
      colors,
    };
    savePalette(toAdd);
    history.push('/');
  };

  const onSortEnd = ({ oldIndex, newIndex }) => {
    setColors(arrayMove(colors, oldIndex, newIndex));
  };

  const paletteFull = colors.length >= maxColors;
  return (
    <Box sx={{ display: 'flex' }}>
      <PaletteFormNav
        open={open}
        palettes={palettes}
        handleSubmit={handleSubmit}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="container">
          <Typography variant="h4" gutterBottom>
            Design Your Palette
          </Typography>
          <div className="buttons">
            <Button
              variant="contained"
              color="secondary"
              onClick={clearColors}
              className="button"
            >
              Clear Palette
            </Button>
            <Button
              className="button"
              variant="contained"
              color="primary"
              onClick={addRandomColor}
              disabled={paletteFull}
            >
              Random Color
            </Button>
          </div>
          <ColorPickerForm
            paletteFull={paletteFull}
            addNewColor={addNewColor}
            colors={colors}
          />
        </div>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <DraggableColorList
          colors={colors}
          deleteColor={deleteColor}
          axis="xy"
          onSortEnd={onSortEnd}
        />
      </Main>
    </Box>
  );
}
export default NewPaletteForm;
