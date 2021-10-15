import chroma from 'chroma-js';
import styled from 'styled-components';

export const ColorBox = styled.div`
  background-color: ${(p) => p.background};
  width: 20%;
  height: ${(p) => (p.moreUrl ? '25%' : '50%')};
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin-bottom: -3.5px;
  &:hover .copy-button {
    opacity: 1;
    transition: 0.5s;
  }
  .copy-text {
    color: ${(p) =>
      chroma(p.background).luminance() >= 0.7 ? 'black' : 'white'};
  }
  .copy-button {
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
    color: ${(p) =>
      chroma(p.background).luminance() >= 0.7 ? 'black' : 'white'};
    text-transform: uppercase;
    border: none;
    text-decoration: none;
    opacity: 0;
  }
  .box-content {
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    padding: 10px;
    color: black;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
  }
  .see-more {
    color: white;
    background: rgba(255, 255, 255, 0.3);
    position: absolute;
    border: none;
    right: 0;
    bottom: 0;
    width: 60px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    text-transform: uppercase;
  }
  .color-name {
    color: ${(p) =>
      chroma(p.background).luminance() <= 0.075 ? 'white' : 'black'};
  }
`;

export const CopyMessage = styled.div`
  flex-direction: column;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  transform: scale(0.1);
  opacity: 0;
  color: white;

  h1 {
    font-weight: 400;
    text-shadow: 1px 2px black;
    background: rgba(255, 255, 255, 0.2);
    width: 100%;
    text-align: center;
    margin-bottom: 0;
    padding: 1rem;
    text-transform: uppercase;
  }

  p {
    font-size: 2rem;
    font-weight: 100;
  }

  &.show {
    opacity: 1;
    transform: scale(1);
    z-index: 25;
    transition: all 0.4s ease-in-out;
    transition-delay: 0.2s;
  }
`;

export const CopyOverlay = styled.div`
  opacity: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  transition: transform 0.6s ease-in-out;
  transform: scale(0.1);

  &.show {
    opacity: 1;
    transform: scale(50);
    z-index: 10;
    position: absolute;
  }
`;
