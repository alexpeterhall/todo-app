import React from 'react'
import classes from '../Items.module.css'

interface DeletedItemsProps {
  items: TodoItems
}

const DeletedItems = ({ items }: DeletedItemsProps) => {
  return (
    <div className={classes.List} data-qa='deletedItemsList'>
      <h3>Deleted Items:</h3>
      {Object.entries(items).map(([key, value]) => (
        <div key={key} id={key} className={[classes.Complete, classes.Item].join(' ')} data-qa='deletedItem'>
          <p className={classes.Text}>{value}</p>
        </div>
      ))}
    </div>
  )
}

export default DeletedItems
