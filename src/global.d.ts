declare module "*.module.css";

interface TodoList {
  active: TodoItems
  completed: TodoItems
  deleted: TodoItems
}

interface TodoItems {
  [key: string]: string
}
