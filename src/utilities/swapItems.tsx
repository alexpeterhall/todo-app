export function swapItems(
  id: string,
  stateA: TodoItem,
  stateASetter: React.Dispatch<React.SetStateAction<TodoItem>>,
  stateB: TodoItem,
  stateBSetter: React.Dispatch<React.SetStateAction<TodoItem>>
): void {
  const newStateA = { ...stateA }
  const newStateB = { ...stateB }

  if (Object.hasOwn(newStateA, id)) {
    const itemToSwap = newStateA[id]
    delete newStateA[id]
    newStateB[id] = itemToSwap
  } else {
    const itemToSwap = newStateB[id]
    delete newStateB[id]
    newStateA[id] = itemToSwap
  }
  stateASetter(newStateA)
  stateBSetter(newStateB)
}
