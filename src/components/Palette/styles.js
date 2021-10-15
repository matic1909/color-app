import styled from 'styled-components';

export const Palette = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .colors {
    height: 90vh;
  }
`;

export const SingleColorPalette = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .colors {
    height: 90vh;
  }

  .back-button {
    width: 100px;
    height: 30px;
    position: absolute;
    display: inline-block;
    top: 50%;
    left: 50%;
    margin-left: -50px;
    margin-top: -15px;
    text-align: center;
    outline: none;
    background: rgba(255, 255, 255, 0.3);
    line-height: 30px;
    font-size: 1rem;
    color: white;
    text-transform: uppercase;
    border: none;
    text-decoration: none;
  }

  .go-back {
    width: 20%;
    height: 50%;
    margin: 0 auto;
    display: inline-block;
    cursor: pointer;
    position: relative;
    margin-bottom: -3.5px;
    background-color: black;
  }
`;
