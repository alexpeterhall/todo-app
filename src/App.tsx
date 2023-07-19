import React from 'react'
import TodoItems from './components/TodoItems/TodoItems'
import DeletedItems from './components/DeletedItems/DeletedItems'
import ListControls from './components/Controls/Controls'
import classes from './Todo.module.css'
import { FirebaseContext } from './components/FirebaseProvider/FirebaseProvider'

// Hardcoded test user for development/demo purposes.
export const user = 'test'

function App() {
  const Firebase = React.useContext(FirebaseContext)
  const [todoList, setTodoList] = React.useState([] as TodoList)
  const dataLoadComplete = React.useRef(false)
  const firstRender = React.useRef(true)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const storedList = await Firebase.getUserTodoList(user)
      setTodoList(storedList)
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
    Firebase.updateTodoList(user, todoList)
  }, [Firebase, todoList])

  function getItemsByStatus(status: string): TodoList {
    return todoList.filter((item) => item?.status === status)
  }

  function handleAddItem(todo: string) {
    const newTodoList: TodoList = [...todoList]
    newTodoList.push({ id: Date.now().toString(), status: 'active', item: todo })
    setTodoList(newTodoList)
  }

  function handleDeleteItem(itemId: string) {
    const newTodoList: TodoList = todoList.map((item) => {
      if (itemId === item.id) return { ...item, status: 'deleted' }
      return item
    })
    setTodoList(newTodoList)
  }

  function handleToggleComplete(itemId: string) {
    const newTodoList: TodoList = todoList.map((item) => {
      if (itemId === item.id && item.status === 'active') return { ...item, status: 'complete' }
      if (itemId === item.id && item.status === 'complete') return { ...item, status: 'active' }
      return item
    })
    setTodoList(newTodoList)
  }

  return (
    <div className={classes.Todo}>
      <div className={classes.Header}>TODO List</div>
      <TodoItems
        items={getItemsByStatus('active')}
        complete={false}
        deleteItem={(id: string) => handleDeleteItem(id)}
        toggleComplete={(id: string) => handleToggleComplete(id)}
      />
      <TodoItems
        items={getItemsByStatus('complete')}
        complete={true}
        deleteItem={(id: string) => handleDeleteItem(id)}
        toggleComplete={(id: string) => handleToggleComplete(id)}
      />
      <ListControls addItem={(todo: string) => handleAddItem(todo)} />
      <DeletedItems items={getItemsByStatus('deleted')} />
    </div>
  )
}

export default App
