import React from 'react';
import classes from './ListItem.module.css';
import CloseButton from '../../../UI/Buttons/CloseButton';

const listItem = (props) => (
  <div className={classes.Item} key={props.id}>
    <input className={classes.Checkbox} type='checkbox' id={props.id} />
    <p className={classes.Text}>{props.name}</p>
    <CloseButton deleteItem={props.deleteItem} />
  </div>
);

export default listItem;
