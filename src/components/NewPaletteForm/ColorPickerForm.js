import Button from '@material-ui/core/Button';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { ChromePicker } from 'react-color';
import { useEffect, useState } from 'react';

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
    <div>
      <ChromePicker
        color={currentColor}
        onChangeComplete={updateCurrentColor}
      />
      <ValidatorForm onSubmit={handleSubmit}>
        <TextValidator
          value={newColorName}
          name="newColorName"
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
    </div>
  );
}
