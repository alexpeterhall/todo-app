import React, { Component } from 'react';
import ListControls from '../components/Todo/ListControls/ListControls';
import ListItems from '../components/Todo/ListItems/ListItems';
import classes from './Todo.module.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          complete: false,
          name:
            '"Many a false step was made by standing still." - Fortune Cookie',
        },
        {
          id: 1,
          complete: false,
          name:
            '"Your mind will take the shape of what you frequently hold in thought." - Marcus Aurelius',
        },
        {
          id: 2,
          complete: false,
          name:
            '"In the beginner\'s mind there are many possibilities; In the expert\'s, there are few." - Zen Master Shunryu Suzuki',
        },
        {
          id: 3,
          complete: false,
          name:
            'Thisisareallylongstringthatlikestocauseheadachesandgenerallyjustruinyourhappinesswhenstylingwithcss',
        },
        {
          id: 4,
          complete: false,
          name:
            "\"To a disciple who was forever complaining about others, the Master said, 'If it is peace you want, seek to change yourself, not other people. It is easier to protect your feet with slippers than to carpet the whole of the earth.'” - Anthony de Mello",
        },
      ],
      newInputItem: '',
      filterActiveOnly: false,
    };
  }

  inputChangedHandler = (event) => {
    this.setState({ newInputItem: event.target.value });
  };

  addItemHandler = () => {
    const newItem = {
      id: Math.floor(Math.random() * 100000000),
      complete: false,
      name: this.state.newInputItem,
    };
    const newItems = [...this.state.items, newItem];
    this.setState({ items: newItems, newInputItem: '' });
  };

  deleteItemHandler = (index) => {
    const itemsCopy = [...this.state.items];
    itemsCopy.splice(index, 1);
    this.setState({ items: itemsCopy });
  };

  toggleCompletionHandler = (id) => {
    const itemsCopy = [...this.state.items];
    itemsCopy.forEach((el) => {
      if (el.id === id) {
        el.complete = !el.complete;
      }
    });
    this.setState({ items: itemsCopy });
  };

  toggleFilterHandler = () => {
    this.setState((prevState) => {
      return { filterActiveOnly: !prevState.filterActiveOnly };
    });
  };

  render() {
    return (
      <div className={classes.Todo}>
        <div className={classes.Header}>TODO List</div>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItemHandler}
          toggleCompletion={this.toggleCompletionHandler}
          activeOnly={this.state.filterActiveOnly}
        />
        <ListControls
          inputValue={this.state.newInputItem}
          changed={this.inputChangedHandler}
          addItem={this.addItemHandler}
          clicked={this.toggleFilterHandler}
        />
      </div>
    );
  }
}

export default Todo;
