import styled from 'styled-components';

export const DraggableColorBox = styled.div`
  background-color: ${(p) => p.color};
  width: 20%;
  height: 25%;
  margin: 0 auto;
  display: inline-block;
  cursor: pointer;
  position: relative;
  margin-bottom: -6px;

  .box-content {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    color: rgba(0, 0, 0, 0.6);
    padding: 10px;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    &:hover .delete-icon {
      color: white;
      transform: scale(1.3);
    }

    .delete-icon {
      transition: all 0.3s ease-in-out;
    }
  }
`;

export const ColorPickerForm = styled.div`
  .picker {
    width: 100% !important;
    margin-top: 2rem;
  }

  .add-color {
    width: 100%;
    padding: 1rem;
    margin-top: 1rem;
    font-size: 2rem;
  }

  .color-name-input {
    width: 100%;
    height: 70px;
  }
`;
