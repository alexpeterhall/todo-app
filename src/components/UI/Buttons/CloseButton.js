import React from 'react';
import classes from './CloseButton.module.css';

const closeButton = (props) => (
  <div className={classes.Close} onClick={props.deleteItem} />
);

export default closeButton;
