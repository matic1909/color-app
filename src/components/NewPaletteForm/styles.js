import styled from 'styled-components';

export const DraggableColorBox = styled.div`
  background-color: ${(p) => p.color};
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin-bottom: -3.5px;
`;
