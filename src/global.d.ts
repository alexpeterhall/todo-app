declare module "*.module.css";

interface TodoItemFromDB {
  [key: string]: string
}

interface TodoItem {
  id: string
  complete: boolean
  name: string
}


interface BaseListItemProps {
  showActiveOnly: boolean
  toggleComplete: (id: string) => void
  deleteItem: (id: string) => void
}

interface ListItemProps extends BaseListItemProps, TodoItem { }

interface ListItemsProps extends BaseListItemProps{
  todoList: TodoItem[]
}

interface ListControlsProps {
  addItem: (inputValue: string) => void
  toggleActive: () => void
}
