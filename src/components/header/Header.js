import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search'
import HomeIcon from '@material-ui/icons/Home'
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount'
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter'
import ChatIcon from '@material-ui/icons/Chat'
import NotificationImportantIcon from '@material-ui/icons/NotificationImportant'

import HeaderOptions from './HeaderOptions'

function Header () {
  return (
    <div className='header'>
      <div className='header__left'>
        <img
          src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
          alt=''
        />
        <div className='header__search'>
          {/* Search Icon */}
          <SearchIcon />
          <input type='text' />
        </div>
      </div>
      <div className='header__right'>
        <HeaderOptions Icon={HomeIcon} title='Home' />
        <HeaderOptions Icon={SupervisorAccountIcon} title='My network' />
        <HeaderOptions Icon={BusinessCenterIcon} title='Jobs' />
        <HeaderOptions Icon={ChatIcon} title='Messaging' />
        <HeaderOptions Icon={NotificationImportantIcon} title='Notifications' />
        <HeaderOptions
          avatar='https://avatars1.githubusercontent.com/u/35003947?s=460&u=59a4a351407e09205933281d53de3a6c2003eded&v=4'
          title='me'
        />
      </div>
    </div>
  )
}

export default Header
