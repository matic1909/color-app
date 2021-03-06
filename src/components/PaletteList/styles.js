import styled from 'styled-components';

export const PaletteList = styled.div`
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
    align-items: center;
    color: white;
  }
  .palettes {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
  }

  a {
    color: white;
  }
`;

export const MiniPalette = styled.div`
  background-color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.5rem;
  position: relative;
  overflow: hidden;
  &:hover {
    cursor: pointer;
  }

  .colors {
    background-color: #dae1e4;
    height: 150px;
    width: 100%;
    border-radius: 5px;
    overflow: hidden;
  }

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0;
    color: black;
    padding-top: 0.5rem;
    font-size: 1rem;
    position: relative;
  }

  .emoji {
    margin-left: 0.5rem;
    font-size: 1.5rem;
  }

  .mini-color {
    height: 25%;
    width: 20%;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    margin-bottom: -3.5px;
  }
`;
