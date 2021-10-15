import { useHistory } from 'react-router';
import MiniPalette from './MiniPalette';
import styled from 'styled-components';

const PaletteListStyles = styled.div`
  background-color: blue;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  .container {
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .nav {
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
  }
  .palettes {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
  }
`;

function PaletteList({ palettes }) {
  const history = useHistory();

  const goToPalette = (id) => {
    history.push(`/palette/${id}`);
  };

  return (
    <PaletteListStyles>
      <div className="container">
        <nav className="nav">
          <h1>React Colors</h1>
        </nav>
        <div className="palettes">
          {palettes.map((palette) => (
            <MiniPalette {...palette} handleClick={goToPalette} />
          ))}
        </div>
      </div>
    </PaletteListStyles>
  );
}

export default PaletteList;
