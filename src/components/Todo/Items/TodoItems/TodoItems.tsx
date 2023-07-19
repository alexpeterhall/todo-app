import React from 'react'
import classes from '../Items.module.css'

interface TodoItemsProps {
  items: TodoList
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const TodoItems = ({ items, complete, showActiveOnly, toggleComplete, deleteItem }: TodoItemsProps) => {
  let itemStyle: string = classes.Item
  if (complete && showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ')
  } else if (complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ')
  }
  return (
    <div className={classes.List} data-qa='activeItemsList'>
      {items.map(({ id, item }) => (
        <div key={id} id={id} className={itemStyle} data-qa='activeItem'>
          <input
            className={classes.Checkbox}
            type='checkbox'
            id={id}
            checked={complete ? true : false}
            readOnly={true}
            onClick={() => toggleComplete(id)}
            data-qa='toggleItemComplete'
          />
          <p className={classes.Text}>{item}</p>
          <button className={classes.Close} onClick={() => deleteItem(id)} data-qa='deleteActiveItem' />
        </div>
      ))}
    </div>
  )
}

export default TodoItems
