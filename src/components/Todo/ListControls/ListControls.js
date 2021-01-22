import React from 'react';
import classes from './ListControls.module.css';
import AddButton from '../../UI/Buttons/AddButton';

const listControls = (props) => {
  return (
    <div className={classes.Controls}>
      <input
        type='text'
        value={props.inputValue}
        onChange={(event) => props.changed(event)}
      ></input>
      <AddButton addItem={props.addItem} inputValue={props.inputValue} />
    </div>
  );
};

export default listControls;
