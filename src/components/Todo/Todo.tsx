import React from 'react'
import ActiveItems from './Items/ActiveItems/ActiveItems'
import DeletedItems from './Items/DeletedItems/DeletedItems'
import ListControls from './Controls/Controls'
import classes from './Todo.module.css'
import { swapItems } from '../../utilities/swapItems'
import { FirebaseContext } from '../../services/firebase'

const user = 'test'

const Todo = () => {
  const Firebase = React.useContext(FirebaseContext)
  const [activeItems, setActiveItems] = React.useState({} as TodoItems)
  const [completedItems, setCompletedItems] = React.useState({} as TodoItems)
  const [deletedItems, setDeletedItems] = React.useState({} as TodoItems)
  const [showActiveOnly, setShowActiveOnly] = React.useState(false)
  const dataLoadComplete = React.useRef(false)
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const data = await Firebase.getUserTodoList(user)
      setActiveItems({ ...data?.active })
      setCompletedItems({ ...data?.completed })
      setDeletedItems({ ...data?.deleted })
      dataLoadComplete.current = true
    })()
  }, [Firebase])

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    if (!dataLoadComplete.current) return
    if (firstRender.current) {
      firstRender.current = false
      return
    }
    Firebase.updateTodoList('active', activeItems)
    Firebase.updateTodoList('completed', completedItems)
    Firebase.updateTodoList('deleted', deletedItems)
  }, [Firebase, activeItems, completedItems, deletedItems])

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
