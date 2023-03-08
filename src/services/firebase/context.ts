import { createContext } from 'react'
import { MyFirebase } from './types'

const FirebaseContext = createContext<MyFirebase | null>(null)

export default FirebaseContext
