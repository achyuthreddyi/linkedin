import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.css'
import InputOption from '../inputOption/InputOption'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import SendOutlinedIcon from '@material-ui/icons/SendOutlined'

function Post ({ name, description, message, photoUrl }) {
  return (
    <div className='post'>
      {/* contains the user info */}
      <div className='post__header'>
        <Avatar />
        <div className='post__info'>
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      {/* contains the user posted message */}
      <div className='post__body'>
        <p>{message}</p>
      </div>
      {/* buttons for the like and other stuff */}
      <div className='post__buttons'>
        <InputOption Icon={ThumbUpAltOutlinedIcon} title='like' color='gray' />
        <InputOption Icon={ChatOutlinedIcon} title='comment' color='gray' />
        <InputOption Icon={ShareOutlinedIcon} title='share' color='gray' />
        <InputOption Icon={SendOutlinedIcon} title='send' color='gray' />
      </div>
    </div>
  )
}

export default Post
