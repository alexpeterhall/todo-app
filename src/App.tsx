import React from 'react'
import Todo from './components/Todo/Todo'
import Firebase, { FirebaseContext } from './services/firebase'

const dbInstance = new Firebase()

function App() {
  return (
    <FirebaseContext.Provider value={dbInstance.database}>
      <Todo />
    </FirebaseContext.Provider>
  )
}

export default App
