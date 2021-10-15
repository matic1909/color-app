import styled from 'styled-components';

export const Navbar = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 6vh;

  .logo .slider {
    width: 340px;
    margin: 0 10px;
    display: inline-block;
  }
`;

export const Logo = styled.div`
  margin-right: 15px;
  padding: 0 13px;
  font-size: 22px;
  background-color: #eceff1;
  font-family: Roboto;
  height: 100%;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: black;
  }
`;

export const Slider = styled.div`
  width: 340px;
  margin: 0 10px;
  display: inline-block;
`;
