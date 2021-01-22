import React from 'react';
import ListItem from './ListItem/ListItem';
import classes from './ListItems.module.css';

const listItems = (props) => {
  return (
    <div className={classes.List}>
      {props.items.map((item, index) => (
        <ListItem
          id={item.id}
          key={item.id}
          name={item.name}
          deleteItem={() => props.deleteItem(index)}
        />
      ))}
    </div>
  );
};

export default listItems;
