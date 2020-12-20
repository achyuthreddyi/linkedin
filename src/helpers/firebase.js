import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyBCcsPqDWJjwxBpFtixy9zUXPK7yR8nStU',
  authDomain: 'linkedin-71488.firebaseapp.com',
  projectId: 'linkedin-71488',
  storageBucket: 'linkedin-71488.appspot.com',
  messagingSenderId: '830507978719',
  appId: '1:830507978719:web:00d41a4ba98c041db97e6a',
  measurementId: 'G-ZMDMMY6CR9'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }
