import React from 'react';
import classes from './ListItem.module.css';
import CloseButton from '../../../UI/Buttons/CloseButton';

const listItem = (props) => (
  <div
    className={
      props.complete ? [classes.Complete, classes.Item].join(' ') : classes.Item
    }
    key={props.id}
  >
    <input
      className={classes.Checkbox}
      type='checkbox'
      id={props.id}
      onClick={props.toggleCompletion}
    />
    <p className={classes.Text}>{props.name}</p>
    <CloseButton deleteItem={props.deleteItem} />
  </div>
);

export default listItem;
