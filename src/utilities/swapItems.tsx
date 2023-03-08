export function swapItems(
  id: string,
  stateA: TodoItems,
  stateASetter: React.Dispatch<React.SetStateAction<TodoItems>>,
  stateB: TodoItems,
  stateBSetter: React.Dispatch<React.SetStateAction<TodoItems>>
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
