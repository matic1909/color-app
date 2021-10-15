import * as Styled from './styles';

function MiniPalette({ paletteName, emoji, colors, handleClick, id }) {
  const miniColorBoxes = colors.map((color) => (
    <div
      className="mini-color"
      style={{ backgroundColor: color.color }}
      key={color.name}
    ></div>
  ));
  return (
    <Styled.MiniPalette onClick={() => handleClick(id)}>
      <div className="colors">{miniColorBoxes}</div>
      <h5 className="title">
        {paletteName} <span className="emoji">{emoji}</span>
      </h5>
    </Styled.MiniPalette>
  );
}

export default MiniPalette;
