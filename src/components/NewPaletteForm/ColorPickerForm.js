import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { useEffect, useState } from 'react';
import * as Styled from './styles';

export default function ColorPickerForm({ colors, paletteFull, addNewColor }) {
  const [currentColor, setCurrentColor] = useState('teal');
  const [newColorName, setNewColorName] = useState('');

  useEffect(() => {
    ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
      colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
    );
    ValidatorForm.addValidationRule('isColorUnique', (value) =>
      colors.every(({ color }) => color !== currentColor)
    );
  }, [colors]);

  const updateCurrentColor = (newColor) => {
    setCurrentColor(newColor.hex);
  };

  const handleSubmit = () => {
    const newColor = { color: currentColor, name: newColorName };
    addNewColor(newColor);
    setNewColorName('');
  };

  return (
    <Styled.ColorPickerForm>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
        className="picker"
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          className="color-name-input"
          value={newColorName}
          name="newColorName"
          placeholder="Color name"
          variant="filled"
          margin="normal"
          onChange={(e) => {
            return setNewColorName(e.target.value);
          }}
          validators={['required', 'isColorNameUnique', 'isColorUnique']}
          errorMessages={[
            'Enter a color name',
            'Color name must be unique',
            'Color already used!',
          ]}
        />
        <Button
          className="add-color"
          variant="contained"
          type="submit"
          color="primary"
          disabled={paletteFull}
          style={{
            backgroundColor: paletteFull ? 'lightgrey' : currentColor,
          }}
        >
          {paletteFull ? 'Palette full' : 'Add color'}
        </Button>
      </ValidatorForm>
    </Styled.ColorPickerForm>
  );
}
