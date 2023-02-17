declare module "*.module.css";

interface TodoItem {
  id: number
  complete: boolean
  name: string
}

interface BaseListItemProps {
  showActiveOnly: boolean
  toggleComplete: (id: number) => void
  deleteItem: (id: number) => void
}

interface ListItemProps extends BaseListItemProps, TodoItem { }

interface ListItemsProps extends BaseListItemProps {
  todoList: TodoItem[]
}

interface ListControlsProps {
  addItem: (inputValue: string) => void
  toggleActive: () => void
}
