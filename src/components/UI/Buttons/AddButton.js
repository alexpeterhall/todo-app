import React from 'react';
import classes from './AddButton.module.css';

const addButton = (props) =>
  props.inputValue.length > 2 ? (
    <div className={classes.Add} onClick={props.addItem}>
      Add
    </div>
  ) : (
    <div className={classes.Disabled}>Add</div>
  );

export default addButton;
