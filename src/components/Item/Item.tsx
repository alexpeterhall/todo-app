import React from 'react'
import classes from '../TodoItems/Items.module.css'

interface ItemProps {
  id: string
  text: string
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

const Item = ({ id, text, complete, showActiveOnly, toggleComplete, deleteItem }: ItemProps) => {
  const thisItem = React.useRef<HTMLInputElement>()
  React.useEffect(() => {
    //@ts-ignore
    function handleEnterKey(event) {
      if (event.code === 'Enter' && event.target === thisItem.current) {
        toggleComplete(id)
      }
    }
    window.addEventListener('keydown', handleEnterKey)

    return () => {
      window.removeEventListener('keydown', handleEnterKey)
    }
  })

  let itemStyle: string = classes.Item
  if (complete && showActiveOnly) {
    itemStyle = [classes.Hidden, classes.Item].join(' ')
  } else if (complete) {
    itemStyle = [classes.Complete, classes.Item].join(' ')
  }
  return (
    <div key={id} id={id} className={itemStyle} data-qa='activeItem'>
      <input
        //@ts-ignore
        ref={thisItem}
        id={id}
        className={classes.Checkbox}
        type='checkbox'
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
