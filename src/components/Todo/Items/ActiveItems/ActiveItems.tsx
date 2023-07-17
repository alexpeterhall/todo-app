import React from 'react'
import classes from '../Items.module.css'

interface ActiveItemsProps {
  items: TodoItems
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const ActiveItems = ({ items, complete, showActiveOnly, toggleComplete, deleteItem }: ActiveItemsProps) => {
  let itemStyle: string = ''
  if (complete && showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ')
  } else if (complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ')
  } else {
    itemStyle = classes.Item
  }
  return (
    <div className={classes.List}>
      {Object.entries(items).map(([key, value]) => (
        <div key={key} id={key} className={itemStyle}>
          <input
            className={classes.Checkbox}
            type='checkbox'
            id={key}
            checked={complete ? true : false}
            readOnly={true}
            onClick={() => toggleComplete(key)}
          />
          <p className={classes.Text}>{value}</p>
          <button className={classes.Close} onClick={() => deleteItem(key)} />
        </div>
      ))}
    </div>
  )
}

export default ActiveItems
