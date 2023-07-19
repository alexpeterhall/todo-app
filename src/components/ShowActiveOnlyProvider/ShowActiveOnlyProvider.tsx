import React, { ReactNode, createContext } from 'react'

export const ShowActiveOnlyContext = createContext({})

function ShowActiveOnlyProvider({ children }: { children: ReactNode }) {
  const [showActiveOnly, setShowActiveOnly] = React.useState(false)
  return (
    <ShowActiveOnlyContext.Provider value={{ showActiveOnly, setShowActiveOnly }}>
      {children}
    </ShowActiveOnlyContext.Provider>
  )
}

export default ShowActiveOnlyProvider
