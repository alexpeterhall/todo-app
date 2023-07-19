declare module "*.module.css";

interface TodoItem {
  id: string
  status: "active" | "complete" | "deleted"
  item: string
}

type TodoList = TodoItem[]
