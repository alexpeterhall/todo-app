import React from 'react'
import Todo from './components/Todo/Todo'
import Firebase, { FirebaseContext } from './services/firebase'

const MyFirebase = new Firebase()

function App() {
  return (
    <FirebaseContext.Provider value={MyFirebase}>
      <Todo />
    </FirebaseContext.Provider>
  )
}

export default App
