import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette/Palette';
import PaletteList from './components/PaletteList/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './components/Palette/SingleColorPalette';
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm';
import { useState } from 'react';

function App() {
  const [palettes, setPalettes] = useState(seedColors);

  const findPalette = (id) => {
    return palettes.find((palette) => palette.id === id);
  };

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette]);
  };

  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={palettes} />}
      />
      <Route
        exact
        path="/palette/new"
        render={(routeProps) => (
          <NewPaletteForm savePalette={savePalette} {...routeProps} />
        )}
      />
      <Route
        exact
        path="/palette/:id"
        render={(routeProps) => (
          <Palette
            palette={generatePalette(findPalette(routeProps.match.params.id))}
          />
        )}
      />
      <Route
        exact
        path="/palette/:paletteId/:colorId"
        render={(routeProps) => (
          <SingleColorPalette
            colorId={routeProps.match.params.colorId}
            palette={generatePalette(
              findPalette(routeProps.match.params.paletteId)
            )}
          />
        )}
      />
    </Switch>
  );
}

export default App;
