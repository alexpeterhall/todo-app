import { initializeApp } from 'firebase/app'
import { get, getDatabase, ref, set } from 'firebase/database'
import { FirebaseInstance } from './types'

let config: {}

if (window.location.hostname === 'localhost') {
  config = { databaseURL: process.env.REACT_APP_DATABASE_URL}
} else {
  config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  }
}

class Firebase implements FirebaseInstance {
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
        throw new Error('Error GETTING from Firebase ' + error)
      })
    return todoList
  }

  updateTodoList = (user: string, items: TodoList): void => {
    try {
      set(ref(this.database, `users/${user}/todos/`), items)
    }
    catch (error) {
      console.error(error)
      throw new Error('Error WRITING to Firebase ' + error)
    }
  }

  getShowActiveOnly = async (user: string): Promise<boolean> => {
    const todoList = await get(ref(this.database, `users/${user}/showActiveOnly/`))
      .then((snapshot) => {
        if (snapshot.exists()) return snapshot.val()
        console.log('No data available')
      })
      .catch((error) => {
        console.error(error)
        throw new Error('Error GETTING from Firebase ' + error)
      })
    return todoList
  }


  updateShowActiveOnly = (user: string, showActiveOnly: boolean): void => {
    try {
      set(ref(this.database, `users/${user}/showActiveOnly/`), showActiveOnly)
    }
    catch (error) {
      console.error(error)
      throw new Error('Error WRITING to Firebase ' + error)
    }
  }
}

export default Firebase
