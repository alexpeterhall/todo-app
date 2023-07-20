import React, { ReactNode, createContext, Dispatch } from 'react'
import { FirebaseContext } from '../FirebaseProvider/FirebaseProvider'
import { user } from '../../App'

interface ShowActiveOnly {
  showActiveOnly: boolean
  setShowActiveOnly: Dispatch<boolean>
}

export const ShowActiveOnlyContext = createContext<ShowActiveOnly>({
  showActiveOnly: false,
  setShowActiveOnly: () => {},
})

function ShowActiveOnlyProvider({ children }: { children: ReactNode }) {
  const Firebase = React.useContext(FirebaseContext)
  const [showActiveOnly, setShowActiveOnly] = React.useState(false)
  const dataLoadComplete = React.useRef(false)

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    ;(async () => {
      const storedFlag = await Firebase.getShowActiveOnly(user)
      setShowActiveOnly(storedFlag)
      dataLoadComplete.current = true
    })()
  }, [Firebase])

  React.useEffect(() => {
    if (Firebase == null) throw new Error('Firebase Database context not found')
    if (!dataLoadComplete.current) return
    Firebase.updateShowActiveOnly(user, showActiveOnly)
  }, [Firebase, showActiveOnly])

  return (
    <ShowActiveOnlyContext.Provider value={{ showActiveOnly, setShowActiveOnly }}>
      {children}
    </ShowActiveOnlyContext.Provider>
  )
}

export default ShowActiveOnlyProvider
