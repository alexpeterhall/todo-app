import { initializeApp } from 'firebase/app'
import { get, getDatabase, push, ref, set, update } from 'firebase/database'
import { MyFirebase } from './types'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

class Firebase implements MyFirebase {
  private app
  private database
  constructor() {
    this.app = initializeApp(config)
    this.database = getDatabase(this.app)
  }
  
  getUserReference = (user: string) => ref(this.database, `users/${user}`)

  getUserTodoList = async (user: string): Promise<TodoList> => {
    const todoList = await get(ref(this.database, `users/${user}/todos/`))
      .then((snapshot) => {
        if (snapshot.exists()) return snapshot.val()
        console.log('No data available')
      })
      .catch((error) => {
        console.error(error)
        throw new Error('Error getting data from Firebase')
      })
    return todoList
  }

  updateTodoList = (list: string, items: TodoItems) => {
    update(ref(this.database, `users/test/todos/${list}`), items)
  }
}

export default Firebase
