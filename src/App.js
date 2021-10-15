import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette/Palette';
import PaletteList from './components/PaletteList/PaletteList';
import seedColors from './seedColors';
import { generatePalette } from './colorHelpers';
import SingleColorPalette from './components/Palette/SingleColorPalette';

function App() {
  const findPalette = (id) => {
    return seedColors.find((palette) => palette.id === id);
  };
  return (
    <Switch>
      <Route
        exact
        path="/"
        render={() => <PaletteList palettes={seedColors} />}
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
