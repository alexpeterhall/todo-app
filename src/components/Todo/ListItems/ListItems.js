import React from 'react'
import ListItem from './ListItem/ListItem'
import classes from './ListItems.module.css'

const ListItems = ({ todoList, deleteItem, toggleComplete, showActiveOnly }) => {
  return (
    <div className={classes.List}>
      {todoList.map((item) => (
        <ListItem
          id={item.id}
          key={item.id}
          name={item.name}
          complete={item.complete}
          showActiveOnly={showActiveOnly}
          deleteItem={() => deleteItem(item.id)}
          toggleComplete={() => toggleComplete(item.id)}
        />
      ))}
    </div>
  )
}

export default ListItems
