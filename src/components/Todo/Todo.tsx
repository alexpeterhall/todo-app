import React from 'react'
import ActiveItems from './Items/ActiveItems/ActiveItems'
import DeletedItems from './Items/DeletedItems/DeletedItems'
import ListControls from './Controls/Controls'
import classes from './Todo.module.css'
import { swapItems } from '../../utilities/swapItems'
import { child, get } from 'firebase/database'
import FirebaseDB from '../../services/firebase'

const Todo = () => {
  const [activeItems, setActiveItems] = React.useState({} as TodoItem)
  const [completedItems, setCompletedItems] = React.useState({} as TodoItem)
  const [deletedItems, setDeletedItems] = React.useState({} as TodoItem)
  const [showActiveOnly, setShowActiveOnly] = React.useState(false)

  React.useEffect(() => {
    get(child(FirebaseDB, `/users/alex/todos/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          setActiveItems({ ...data.active })
          setCompletedItems({ ...data.completed })
          setDeletedItems({ ...data.deleted })
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
        throw new Error('Error getting data from Firebase')
      })
  }, [])

  function handleAddItem(name: string) {
    const newActiveItems = { ...activeItems }
    newActiveItems[Date.now().toString()] = name
    setActiveItems(newActiveItems)
  }

  function handleDeleteItem(id: string) {
    if (Object.hasOwn(activeItems, id)) {
      swapItems(id, activeItems, setActiveItems, deletedItems, setDeletedItems)
    } else {
      swapItems(id, completedItems, setCompletedItems, deletedItems, setDeletedItems)
    }
  }

  function handleToggleComplete(id: string) {
    swapItems(id, activeItems, setActiveItems, completedItems, setCompletedItems)
  }

  function handleToggleActive() {
    setShowActiveOnly(!showActiveOnly)
  }

  return (
    <div className={classes.Todo}>
      <div className={classes.Header}>TODO List</div>
      <ActiveItems
        items={activeItems}
        complete={false}
        showActiveOnly={showActiveOnly}
        deleteItem={(id: string) => handleDeleteItem(id)}
        toggleComplete={(id: string) => handleToggleComplete(id)}
      />
      <ActiveItems
        items={completedItems}
        complete={true}
        showActiveOnly={showActiveOnly}
        deleteItem={(id: string) => handleDeleteItem(id)}
        toggleComplete={(id: string) => handleToggleComplete(id)}
      />
      <ListControls addItem={(name: string) => handleAddItem(name)} toggleActive={handleToggleActive} />
      <DeletedItems items={deletedItems} />
    </div>
  )
}

export default Todo
