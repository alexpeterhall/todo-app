import React from 'react'
import ListItems from './ListItems/ListItems'
import ListControls from './ListControls/ListControls'
import classes from './Todo.module.css'
import myFirebaseURL from '../../myFirebase'
import { getDatabase, ref, child, get } from 'firebase/database'
import { initializeApp } from '@firebase/app'

const firebaseConfig = { databaseURL: myFirebaseURL }
const app = initializeApp(firebaseConfig)
const database = getDatabase(app)
const dbRef = ref(database)

const defaultItems = [
  {
    id: '0',
    complete: false,
    name: '"Many a false step was made by standing still." - Fortune Cookie',
  },
  {
    id: '1',
    complete: false,
    name: '"Your mind will take the shape of what you frequently hold in thought." - Marcus Aurelius',
  },
  {
    id: '2',
    complete: false,
    name: '"In the beginner\'s mind there are many possibilities; In the expert\'s, there are few." - Zen Master Shunryu Suzuki',
  },
  {
    id: '3',
    complete: false,
    name: '"There are only two kinds of programming languages: the ones people complain about and the ones nobody uses." - Bjarne Stroustrup',
  },
  {
    id: '4',
    complete: false,
    name: 'Thisisareallylongstringthatlikestocauseheadachesandgenerallyjustruinyourhappinesswhenstylingwithcss',
  },
]

function generateTodoItems(items: TodoItemFromDB, isComplete: boolean) {
  const todoItems = []
  for (let [key, value] of Object.entries(items)) {
    todoItems.push({ id: key, name: value, complete: isComplete })
  }
  return todoItems
}

const Todo = () => {
  const [todoList, setTodoList] = React.useState(defaultItems)
  const [deletedItems, setDeletedItems] = React.useState([] as TodoItem[])
  const [showActiveOnly, setShowActiveOnly] = React.useState(true)

  React.useEffect(() => {
    get(child(dbRef, `/users/alex/todos/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val()
          const activeItems = generateTodoItems(data.active, false)
          const completedItems = generateTodoItems(data.complete, true)
          setTodoList([...activeItems, ...completedItems])
        } else {
          console.log('No data available')
        }
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  function handleAddItem(name: string) {
    setTodoList([
      {
        id: Date.now().toString(),
        complete: false,
        name: name,
      },
      ...todoList,
    ])
  }

  //TODO Optimize this so it doesn't filter twice.
  function handleDeleteItem(id: string) {
    const todoListCopy = [...todoList]
    const deletedItem = todoListCopy.filter((item) => item.id === id)
    setDeletedItems([...deletedItems, ...deletedItem])
    setTodoList(todoListCopy.filter((item) => item.id !== id))
  }

  function handleToggleComplete(id: string) {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return { ...item, complete: !item.complete }
        } else {
          return item
        }
      })
    )
  }

  function handleToggleActive() {
    setShowActiveOnly(!showActiveOnly)
  }

  return (
    <div className={classes.Todo}>
      <div className={classes.Header}>TODO List</div>
      <ListItems
        todoList={todoList}
        showActiveOnly={showActiveOnly}
        deleteItem={(id: string) => handleDeleteItem(id)}
        toggleComplete={(id: string) => handleToggleComplete(id)}
      />
      <ListControls addItem={(name: string) => handleAddItem(name)} toggleActive={handleToggleActive} />
    </div>
  )
}

export default Todo
