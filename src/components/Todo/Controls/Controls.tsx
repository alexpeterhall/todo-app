import React from 'react'
import classes from './Controls.module.css'

interface ControlsProps {
  addItem: (inputValue: string) => void
  toggleActive: () => void
}

const Controls = ({ addItem, toggleActive }: ControlsProps) => {
  const [inputValue, setInputValue] = React.useState('')

  function handleInputValueChange(event: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(event.target.value)
  }

  function handleSubmit(event: React.ChangeEvent<HTMLFormElement>) {
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
          minLength={2}
          value={inputValue}
          onChange={handleInputValueChange}
          className={classes.InputBox}
          data-qa='todoInput'
        />
        <button
          type='submit'
          name='Add'
          disabled={inputValue.length < 2 ? true : false}
          className={inputValue.length < 2 ? classes.Disabled : classes.Add}
          data-qa='addTodoButton'>
          Add
        </button>
      </form>

      <div className={classes.Filter} data-qa='toggleActiveOnly'>
        <p>Display Only Active Items:</p>
        <input
          className={classes.Checkbox}
          type='checkbox'
          defaultChecked={false}
          onClick={toggleActive}
          data-qa='toggleActiveOnlyCheckbox'
        />
      </div>
    </>
  )
}

export default Controls
