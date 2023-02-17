import React from 'react'
import classes from './ListItem.module.css'

const ListItem = ({ id, name, complete, showActiveOnly, toggleComplete, deleteItem }: ListItemProps) => {
  let itemStyle = null
  if (complete && showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ')
  } else if (complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ')
  } else {
    itemStyle = classes.Item
  }

  return (
    <div key={id} className={itemStyle}>
      <input className={classes.Checkbox} type='checkbox' id={`{$id}`} onClick={() => toggleComplete(id)} />
      <p className={classes.Text}>{name}</p>

      <div className={classes.Close} onClick={() => deleteItem(id)} />
    </div>
  )
}

export default ListItem
