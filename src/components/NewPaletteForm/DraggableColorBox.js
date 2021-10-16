import React from 'react';
import * as Styled from './styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

const DraggableColorBox = SortableElement(({ color, name, handleClick }) => {
  return (
    <Styled.DraggableColorBox color={color}>
      <div className="box-content">
        <span>{name}</span>
        <DeleteIcon className="delete-icon" onClick={handleClick} />
      </div>
    </Styled.DraggableColorBox>
  );
});

export default DraggableColorBox;
