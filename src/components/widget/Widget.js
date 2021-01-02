import React from 'react'
import './Widget.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widget () {
  const newsArticle = (heading, subtitle) => (
    <div className='widget__article'>
      <div className='widget__articleleft'>
        <FiberManualRecordIcon />
      </div>
      <div className='widget__articleright'>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widget'>
      <div className='widget__header'>
        <h2>Linked in News</h2>
        <InfoIcon />
      </div>
      {newsArticle('achyuth is back', 'highlights')}
    </div>
  )
}

export default Widget
