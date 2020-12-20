import React from 'react'
import './App.css'
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
      </div>
    </div>
  )
}

export default App
