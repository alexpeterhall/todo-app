import React from 'react';
import classes from './FilterList.module.css';

const FilterList = (props) => {
  return (
    <div className={classes.Filter}>
      <p>Display Only Active Items:</p>
      <input
        className={classes.Checkbox}
        type='checkbox'
        onClick={props.clicked}
      />
    </div>
  );
};

export default FilterList;
