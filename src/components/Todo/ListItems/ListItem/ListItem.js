import React from 'react';
import classes from './ListItem.module.css';
import CloseButton from '../../../UI/Buttons/CloseButton';

const ListItem = (props) => {
  let itemStyle = null;
  if (props.complete && props.activeOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ');
  } else if (props.complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ');
  } else {
    itemStyle = classes.Item;
  }

  return (
    <div key={props.id} className={itemStyle}>
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
};

export default ListItem;
