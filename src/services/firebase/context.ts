import { createContext } from 'react'
import { Database } from 'firebase/database'

const FirebaseContext = createContext<Database | null>(null)

export default FirebaseContext
