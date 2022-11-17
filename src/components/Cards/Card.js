import React from 'react'
import '../../styles/cardStyles.css'
export default function Card({title,content}) {
  return (
    <div className='cardStyle' >
        <h2 className='cardTitle' >{title}</h2>
        <span className='cardcontent'>{content}</span>
    </div>
  )
}
