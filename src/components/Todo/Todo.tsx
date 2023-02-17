import React from 'react'
import ListItems from './ListItems/ListItems'
import ListControls from './ListControls/ListControls'
import classes from './Todo.module.css'

const defaultItems: TodoItem[] = [
  {
    id: 0,
    complete: false,
    name: '"Many a false step was made by standing still." - Fortune Cookie',
  },
  {
    id: 1,
    complete: false,
    name: '"Your mind will take the shape of what you frequently hold in thought." - Marcus Aurelius',
  },
  {
    id: 2,
    complete: false,
    name: '"In the beginner\'s mind there are many possibilities; In the expert\'s, there are few." - Zen Master Shunryu Suzuki',
  },
  {
    id: 3,
    complete: false,
    name: '"There are only two kinds of programming languages: the ones people complain about and the ones nobody uses." - Bjarne Stroustrup',
  },
  {
    id: 4,
    complete: false,
    name: 'Thisisareallylongstringthatlikestocauseheadachesandgenerallyjustruinyourhappinesswhenstylingwithcss',
  },
]

const Todo = () => {
  const [todoList, setTodoList] = React.useState(defaultItems)
  const [showActiveOnly, setShowActiveOnly] = React.useState(false)

  function handleAddItem(name: string) {
    setTodoList([
      ...todoList,
      {
        id: Math.floor(Math.random() * 100000000),
        complete: false,
        name: name,
      },
    ])
  }

  function handleDeleteItem(id: number) {
    setTodoList(todoList.filter((item) => item.id !== id))
  }

  function handleToggleComplete(id: number) {
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
        deleteItem={(id) => handleDeleteItem(id)}
        toggleComplete={(id) => handleToggleComplete(id)}
        showActiveOnly={showActiveOnly}
      />
      <ListControls addItem={(name: string) => handleAddItem(name)} toggleActive={handleToggleActive} />
    </div>
  )
}

export default Todo
