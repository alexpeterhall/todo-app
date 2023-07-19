import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import FirebaseProvider from './components/FirebaseProvider/FirebaseProvider'

const root = createRoot(document.getElementById('root') as Element)

root.render(
  <FirebaseProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </FirebaseProvider>
)
