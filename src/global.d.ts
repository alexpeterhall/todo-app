declare module "*.module.css";

interface TodoItem {
  [key: string]: string
}

interface ActiveItemsProps {
  items: TodoItem
  complete: boolean
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

interface DeletedItemsProps {
  items: TodoItem
}

interface ControlsProps {
  addItem: (inputValue: string) => void
  toggleActive: () => void
}
