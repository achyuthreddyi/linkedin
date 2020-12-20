import React, { useState, useEffect } from 'react'
import './Feed.css'
import CreateIcon from '@material-ui/icons/Create'
import ImageIcon from '@material-ui/icons/Image'
import SubscriptionIcon from '@material-ui/icons/Subscriptions'
import EventNoteIcon from '@material-ui/icons/EventNote'
import CalendarViewDayIcon from '@material-ui/icons/CalendarViewDay'
import InputOption from '../inputOption/InputOption'
import Post from '../post/Post'
import { db } from '../../helpers/firebase'
import firebase from 'firebase'

function Feed () {
  const [input, setInput] = useState('')
  const [posts, setPosts] = useState([])

  useEffect(() => {
    db.collection('posts')
      .orderBy('timeStamp', 'desc')
      .onSnapshot(snapshot => {
        console.log('snapshot of the posts', snapshot.docs)
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
          }))
        )
      })
  }, [])

  const sendPost = e => {
    e.preventDefault()

    db.collection('posts').add({
      name: 'achyuth',
      description: 'this is a descriptions',
      message: input,
      photoUrl: '',
      timeStamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('')
  }

  // console.log('posts in the state', posts)
  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              type='text'
            />
            <button onClick={sendPost} type='submit'>
              send
            </button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          {/* input option */}
          <InputOption Icon={ImageIcon} title='photo' color='#70B5F9' />
          <InputOption Icon={SubscriptionIcon} title='video' color='#E7A33E' />
          <InputOption Icon={EventNoteIcon} title='event' color='#C0CBCD' />
          <InputOption
            Icon={CalendarViewDayIcon}
            title='photo'
            color='#7FC15E'
          />
        </div>
      </div>

      {/* posts */}
      {posts &&
        posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
    </div>
  )
}

export default Feed
