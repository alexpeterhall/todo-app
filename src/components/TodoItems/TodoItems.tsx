import React from 'react'
import classes from './Items.module.css'
import Item from '../Item/Item'

interface TodoItemsProps {
  items: TodoList
  complete: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const TodoItems = ({ items, complete, toggleComplete, deleteItem }: TodoItemsProps) => {
  return (
    <div className={classes.List} data-qa='activeItemsList'>
      {items.map(({ id, item }) => (
        <Item
          key={id}
          id={id}
          text={item}
          complete={complete}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  )
}

export default TodoItems
