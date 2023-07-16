import React from 'react'
import Todo from './components/Todo/Todo'
import FirebaseProvider from './services/firebase/FirebaseProvider'

function App() {
  return (
    <FirebaseProvider>
      <Todo />
    </FirebaseProvider>
  )
}

export default App
