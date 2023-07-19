import { DatabaseReference } from "firebase/database"

interface FirebaseInstance {
  getUserReference: (user:string) => DatabaseReference
  getUserTodoList: (user: string) => Promise<TodoList>
  updateTodoList: (user: string, items: TodoList) => void
}
