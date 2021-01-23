import React, { Component } from 'react';
import ListControls from '../components/Todo/ListControls/ListControls';
import ListItems from '../components/Todo/ListItems/ListItems';
import classes from './Todo.module.css';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 0, complete: false, name: 'This is a todo item' },
        { id: 1, complete: false, name: 'This is another todo item' },
        {
          id: 2,
          complete: false,
          name:
            'This is a longer todo item that should wrap when it runs out of space',
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
            'This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space. This is a longer todo item that should wrap when it runs out of space.',
        },
      ],
      newInputItem: '',
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

  render() {
    return (
      <div className={classes.Todo}>
        <div className={classes.Header}>TODO List</div>
        <ListItems
          items={this.state.items}
          deleteItem={this.deleteItemHandler}
          toggleCompletion={this.toggleCompletionHandler}
        />
        <ListControls
          inputValue={this.state.newInputItem}
          changed={this.inputChangedHandler}
          addItem={this.addItemHandler}
        />
      </div>
    );
  }
}

export default Todo;
