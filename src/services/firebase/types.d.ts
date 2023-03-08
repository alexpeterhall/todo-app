import { DatabaseReference } from "firebase/database"

interface MyFirebase {
  getUserReference: (user:string) => DatabaseReference
  getUserTodoList: (user:string) => Promise<TodoList>
}