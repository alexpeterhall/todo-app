import React, { useReducer } from 'react';
import ListControls from '../components/Todo/ListControls/ListControls';
import ListItems from '../components/Todo/ListItems/ListItems';
import classes from './Todo.module.css';

const initialState = {
  items: [
    {
      id: 0,
      complete: false,
      name: '"Many a false step was made by standing still." - Fortune Cookie',
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

const listReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return {
        ...state,
        newInputItem: '',
        items: [
          ...state.items,
          {
            id: Math.floor(Math.random() * 100000000),
            complete: false,
            name: state.newInputItem,
          },
        ],
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        items: state.items.filter((element) => element.id !== action.id),
      };
    case 'USER_INPUT':
      return { ...state, newInputItem: action.value };
    case 'TOGGLE_COMPLETION':
      return {
        ...state,
        items: state.items.map((element) => {
          if (element.id === action.id) {
            return { ...element, complete: !element.complete };
          } else {
            return element;
          }
        }),
      };
    case 'TOGGLE_FILTER':
      return { ...state, filterActiveOnly: !state.filterActiveOnly };
    default:
      return state;
  }
};

const TodoHooks = () => {
  const [listState, listDispatch] = useReducer(listReducer, initialState);
  return (
    <div className={classes.Todo}>
      <div className={classes.Header}>TODO List</div>
      <ListItems
        items={listState.items}
        deleteItem={(id) => listDispatch({ type: 'DELETE_ITEM', id: id })}
        toggleCompletion={(id) => listDispatch({ type: 'TOGGLE_COMPLETION', id: id })}
        activeOnly={listState.filterActiveOnly}
      />
      <ListControls
        inputValue={listState.newInputItem}
        changed={(event) => listDispatch({ type: 'USER_INPUT', value: event.target.value })}
        addItem={() => listDispatch({ type: 'ADD_ITEM' })}
        clicked={() => listDispatch({ type: 'TOGGLE_FILTER' })}
      />
    </div>
  );
};

export default TodoHooks;
