import { styled } from '@mui/material/styles';
import PaletteMetaForm from './PaletteMetaForm';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const drawerWidth = 400;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
  '& .nav-buttons': {
    marginRight: '1rem',
  },
  '& .button': {
    margin: '0 0.5rem',
  },
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

function PaletteFormNav({ open, palettes, handleSubmit, handleDrawerOpen }) {
  const [formShowing, setFormShowing] = useState(false);

  return (
    <Box>
      <CssBaseline />
      <AppBar position="fixed" open={open} color="default">
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
            Create a Palette
          </Typography>
        </Toolbar>
        <div className="nav-buttons">
          <Link to="/">
            <Button className="button" variant="contained" color="secondary">
              Go Back
            </Button>
          </Link>
          <Button
            className="button"
            variant="contained"
            onClick={() => setFormShowing(true)}
          >
            Open form dialog
          </Button>
          {formShowing && (
            <PaletteMetaForm
              palettes={palettes}
              handleSubmit={handleSubmit}
              hideForm={() => setFormShowing(false)}
            />
          )}
        </div>
      </AppBar>
    </Box>
  );
}

export default PaletteFormNav;
