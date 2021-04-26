import React, { Fragment } from 'react';
import classes from './ListControls.module.css';
import AddButton from '../../UI/Buttons/AddButton';
import FilterList from './FilterList/FilterList';

const ListControls = (props) => {
  return (
    <Fragment>
      <div className={classes.Controls}>
        <input type='text' value={props.inputValue} onChange={(event) => props.changed(event)} />
        <AddButton addItem={props.addItem} inputValue={props.inputValue} />
      </div>
      <FilterList clicked={props.clicked} />
    </Fragment>
  );
};

export default ListControls;
