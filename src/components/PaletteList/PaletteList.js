import { useHistory } from 'react-router';
import MiniPalette from './MiniPalette';
import * as Styled from './styles';
import { Link } from 'react-router-dom';

function PaletteList({ palettes }) {
  const history = useHistory();

  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  return (
    <Styled.PaletteList>
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
          <Link to="/palette/new">Create palette</Link>
        </nav>
        <div className="palettes">
          {palettes.map((palette) => (
            <MiniPalette {...palette} handleClick={goToPalette} />
          ))}
        </div>
      </div>
    </Styled.PaletteList>
  );
}

export default PaletteList;
