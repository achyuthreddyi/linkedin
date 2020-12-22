import React from 'react'
import { Avatar } from '@material-ui/core'
import './HeaderOptions.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function HeaderOptions ({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser)
  console.log('user in the header options', user)

  return (
    <div onClick={onClick} className='headerOption'>
      {Icon && <Icon className='headerOption__icon' />}
      {avatar && (
        <Avatar className='headerOption__icon' src={user?.photoUrl}>
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOptions
