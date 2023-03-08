declare module "*.module.css";

interface TodoList {
  active: TodoItems
  completed: TodoItems
  deleted: TodoItems
}

interface TodoItems {
  [key: string]: string
}

interface ActiveItemsProps {
  items: TodoItems
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

interface DeletedItemsProps {
  items: TodoItems
}

interface ControlsProps {
  addItem: (inputValue: string) => void
  toggleActive: () => void
}
