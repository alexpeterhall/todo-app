import React from 'react'
import classes from '../Items.module.css'
import Item from '../Item/Item'

interface TodoItemsProps {
  items: TodoList
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const TodoItems = ({ items, complete, showActiveOnly, toggleComplete, deleteItem }: TodoItemsProps) => {
  return (
    <div className={classes.List} data-qa='activeItemsList'>
      {items.map(({ id, item }) => (
        <Item
          key={id}
          id={id}
          text={item}
          complete={complete}
          showActiveOnly={showActiveOnly}
          toggleComplete={toggleComplete}
          deleteItem={deleteItem}
        />
      ))}
    </div>
  )
}

export default TodoItems
