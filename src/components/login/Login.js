import React, { useState } from 'react'
import { login } from '../../features/userSlice'
import { useDispatch } from 'react-redux'
import { auth } from '../../helpers/firebase'
import './Login.css'

function Login () {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [profilepicUrl, setprofilepicUrl] = useState('')

  const dispatch = useDispatch()

  const register = () => {
    if (!name) {
      return alert('please enter a name')
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userAuth => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilepicUrl
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoURL: profilepicUrl
              })
            )
          })
      })
      .catch(error => alert(error))
  }

  const loginToApp = e => {
    console.log('working')
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userAuth => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
            profilepicUrl: userAuth.user.photoUrl
          })
        )
      })
      .catch(error => alert(error))
  }
  return (
    <div className='login'>
      <img
        src='https://www.pngkey.com/png/detail/14-143268_file-linkedin-logo-svg-linkedin-logo-png-no.png'
        alt=''
      />
      <form>
        <input
          placeholder='full name(required if registering)'
          value={name}
          onChange={e => setName(e.target.value)}
          type='text'
        />
        <input
          placeholder='profile pic url'
          value={profilepicUrl}
          onChange={e => setprofilepicUrl(e.target.value)}
          type='text'
        />
        <input
          placeholder='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <input
          placeholder='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
          type='password'
        />
        <button type='submit' onClick={loginToApp}>
          SignIn
        </button>
      </form>
      <p>
        Not a member?{'  '}
        <span className='login__register' onClick={register}>
          Register now
        </span>
      </p>
    </div>
  )
}

export default Login
