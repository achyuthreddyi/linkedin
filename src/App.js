import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { login, logout, selectUser } from './features/userSlice'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Login from './components/login/Login'
import { auth } from './helpers/firebase'

function App () {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        // user is logged in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL
          })
        )
      } else {
        //  user is logged out
        dispatch(logout())
      }
    })
  }, [])

  return (
    <div className='app'>
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='app_body'>
          <Sidebar />
          <Feed />
        </div>
      )}
      {/* Header */}
      {/* App Body  sidebar feed widgets */}
    </div>
  )
}

export default App
