import React from 'react'
import { ShowActiveOnlyContext } from '../ShowActiveOnlyProvider/ShowActiveOnlyProvider'
import classes from '../TodoItems/Items.module.css'

interface DeletedItemsProps {
  items: TodoList
}

const DeletedItems = ({ items }: DeletedItemsProps) => {
  //@ts-ignore
  const { showActiveOnly } = React.useContext(ShowActiveOnlyContext)
  let itemStyle: string = [classes.Item, classes.Complete].join(' ')
  if (showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item, classes.Complete].join(' ')
  }

  return (
    <div className={classes.List} data-qa='deletedItemsList'>
      <h3 className={showActiveOnly ? classes.Hidden : ''}>Deleted Items:</h3>
      {items.map(({ id, item }) => (
        <div key={id} id={id} className={itemStyle} data-qa='deletedItem'>
          <p className={classes.Text}>{item}</p>
        </div>
      ))}
    </div>
  )
}

export default DeletedItems
