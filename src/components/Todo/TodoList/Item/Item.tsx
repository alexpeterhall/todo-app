import React from 'react'
import classes from '../Items.module.css'

interface ItemProps {
  id: string
  text: string
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const Item = ({ id, text, complete, showActiveOnly, toggleComplete, deleteItem }: ItemProps) => {
  let itemStyle: string = classes.Item
  if (complete && showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ')
  } else if (complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ')
  }
  return (
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
      <p className={classes.Text}>{text}</p>
      <button className={classes.Close} onClick={() => deleteItem(id)} data-qa='deleteActiveItem' />
    </div>
  )
}

export default Item
