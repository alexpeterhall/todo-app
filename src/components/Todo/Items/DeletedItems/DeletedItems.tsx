import React from 'react'
import classes from '../Items.module.css'

interface DeletedItemsProps {
  items: TodoList
}

const DeletedItems = ({ items }: DeletedItemsProps) => {
  return (
    <div className={classes.List} data-qa='deletedItemsList'>
      <h3>Deleted Items:</h3>
      {items.map(({ id, item }) => (
        <div key={id} id={id} className={[classes.Complete, classes.Item].join(' ')} data-qa='deletedItem'>
          <p className={classes.Text}>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default DeletedItems
