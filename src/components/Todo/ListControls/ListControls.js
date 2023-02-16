import React from 'react'
import classes from './ListControls.module.css'

const ListControls = ({ addItem, toggleActive }) => {
  const [inputValue, setInputValue] = React.useState('')

  function handleInputValueChange(event) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    addItem(inputValue)
    setInputValue('')
  }

  return (
    <>
      <form name='addTodo' onSubmit={handleSubmit} className={classes.Controls}>
        <input
          type='text'
          required
          minLength='2'
          value={inputValue}
          onChange={handleInputValueChange}
          className={classes.InputBox}
        />
        <button
          type='submit'
          name='Add'
          disabled={inputValue.length < 2 ? true : false}
          className={inputValue.length < 2 ? classes.Disabled : classes.Add}>
          Add
        </button>
      </form>

      <div className={classes.Filter}>
        <p>Display Only Active Items:</p>
        <input className={classes.Checkbox} type='checkbox' onClick={toggleActive} />
      </div>
    </>
  )
}

export default ListControls
