import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import FirebaseProvider from './components/FirebaseProvider/FirebaseProvider'
import ShowActiveOnlyProvider from './components/ShowActiveOnlyProvider/ShowActiveOnlyProvider'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <FirebaseProvider>
    <ShowActiveOnlyProvider>
      <StrictMode>
        <App />
      </StrictMode>
    </ShowActiveOnlyProvider>
  </FirebaseProvider>
)
