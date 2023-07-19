import { ReactNode, createContext } from 'react'
import Firebase from '../../services/firebase/firebase'
import { FirebaseInstance } from '../../services/firebase/types'

export const FirebaseContext = createContext<FirebaseInstance | null>(null)

function FirebaseProvider({ children }: { children: ReactNode }) {
  return <FirebaseContext.Provider value={new Firebase()}>{children}</FirebaseContext.Provider>
}

export default FirebaseProvider
