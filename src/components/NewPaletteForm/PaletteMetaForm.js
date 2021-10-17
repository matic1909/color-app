import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';
import { Picker } from 'emoji-mart';
import 'emoji-mart/css/emoji-mart.css';

export default function PaletteMetaForm({ palettes, handleSubmit, hideForm }) {
  const [stage, setStage] = useState('form');
  const [newPaletteName, setNewPaletteName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    );
  }, []);

  const showEmojiPicker = () => {
    setStage('emoji');
  };

  const savePalette = (emoji) => {
    handleSubmit({
      paletteName: newPaletteName,
      emoji: emoji.native,
    });
  };

  return (
    <>
      <Dialog open={stage === 'emoji'} onClose={hideForm}>
        <DialogTitle>Choose an emoji</DialogTitle>
        <DialogContent>
          <Picker onSelect={savePalette} title="Pick an emoji" />
        </DialogContent>
      </Dialog>
      <Dialog open={stage === 'form'} onClose={hideForm}>
        <DialogTitle>Choose a Palette Name</DialogTitle>
        <ValidatorForm onSubmit={showEmojiPicker}>
          <DialogContent>
            <DialogContentText>
              Please enter a name for your new palette. Make sure it is unique.
            </DialogContentText>
            <TextValidator
              label="Palette Name"
              name="newPaletteName"
              value={newPaletteName}
              fullWidth
              margin="normal"
              onChange={(e) => setNewPaletteName(e.target.value)}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={[
                'Enter palette name',
                'Palette name already used',
              ]}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              Save Palette
            </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </>
  );
}
