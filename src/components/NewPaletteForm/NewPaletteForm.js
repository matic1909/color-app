import { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  CssBaseline,
  AppBar as MuiAppBar,
  Toolbar,
  Typography,
  Divider,
  IconButton,
  Button,
} from '@mui/material';
import {
  Menu as MenuIcon,
  ChevronLeft as ChevronLeftIcon,
} from '@mui/icons-material';
import { ChromePicker } from 'react-color';

const drawerWidth = 400;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
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

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function NewPaletteForm() {
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState('teal');
  const [colors, setColors] = useState(['purple', 'red']);
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const updateColor = (newColor) => {
    setColor(newColor.hex);
  };

  const addNewColor = () => {
    setColors([...colors, color]);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Persistent drawer
          </Typography>
        </Toolbar>
      </AppBar>
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
        <Typography variant="h4">Design your palette</Typography>
        <div>
          <Button variant="contained" color="secondary">
            Clear palette
          </Button>
          <Button variant="contained" color="primary">
            Random Color
          </Button>
        </div>
        <ChromePicker
          value={color}
          onChangeComplete={(newColor) => updateColor(newColor)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ backgroundColor: color }}
          onClick={addNewColor}
        >
          Add Color
        </Button>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <ul>
          {colors.map((c) => (
            <li style={{ backgroundColor: c }}>{c}</li>
          ))}
        </ul>
      </Main>
    </Box>
  );
}
