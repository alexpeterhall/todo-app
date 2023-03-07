import { FirebaseApp, initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(config)
const database = getDatabase(app)
const FirebaseDB = ref(database)

export default FirebaseDB

//@ts-ignore
// let instance: FirebaseApp = null

// export default function getFirebase() {
//   if (instance) return instance
//   instance = initializeApp(config)
//   return instance
// }
