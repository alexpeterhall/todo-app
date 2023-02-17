import React from 'react'
import ListItem from './ListItem/ListItem'
import classes from './ListItems.module.css'

const ListItems = ({ todoList, showActiveOnly, toggleComplete, deleteItem }: ListItemsProps) => {
  return (
    <div className={classes.List}>
      {todoList.map((item: TodoItem) => (
        <ListItem
          id={item.id}
          key={item.id}
          name={item.name}
          complete={item.complete}
          showActiveOnly={showActiveOnly}
          deleteItem={deleteItem}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  )
}

export default ListItems
