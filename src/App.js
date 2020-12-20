import React from 'react'
import './App.css'
import Feed from './components/feed/Feed'
import Header from './components/header/Header'
import Sidebar from './components/Sidebar/Sidebar'

function App () {
  return (
    <div className='app'>
      <Header />
      {/* Header */}
      {/* App Body  sidebar feed widgets */}
      <div className='app_body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default App
