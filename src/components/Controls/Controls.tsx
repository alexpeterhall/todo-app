import React from 'react'
import classes from './Controls.module.css'
import { ShowActiveOnlyContext } from '../ShowActiveOnlyProvider/ShowActiveOnlyProvider'

interface ControlsProps {
  addItem: (inputValue: string) => void
}

const Controls = ({ addItem }: ControlsProps) => {
  //@ts-ignore
  const { showActiveOnly, setShowActiveOnly } = React.useContext(ShowActiveOnlyContext)
  const [inputValue, setInputValue] = React.useState('')
  const toggleActiveCheckbox = React.useRef<HTMLInputElement>()
  React.useEffect(() => {
    //@ts-ignore
    function handleEnterKey(event) {
      if (event.code === 'Enter' && event.target === toggleActiveCheckbox.current) {
        setShowActiveOnly((prevState: boolean) => {
          return !prevState
        })
      }
    }
    window.addEventListener('keydown', handleEnterKey)

    return () => {
      window.removeEventListener('keydown', handleEnterKey)
    }
  })

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
          //@ts-ignore
          ref={toggleActiveCheckbox}
          className={classes.Checkbox}
          type='checkbox'
          defaultChecked={false}
          onClick={() => setShowActiveOnly(!showActiveOnly)}
          data-qa='toggleActiveOnlyCheckbox'
        />
      </div>
    </>
  )
}

export default Controls
