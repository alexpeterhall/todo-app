import React from 'react';
import ListItem from './ListItem/ListItem';
import classes from './ListItems.module.css';

const ListItems = (props) => {
  return (
    <div className={classes.List}>
      {props.items.map((item, index) => (
        <ListItem
          id={item.id}
          key={item.id}
          name={item.name}
          complete={item.complete}
          activeOnly={props.activeOnly}
          deleteItem={() => props.deleteItem(index)}
          toggleCompletion={() => props.toggleCompletion(item.id)}
        />
      ))}
    </div>
  );
};

export default ListItems;
