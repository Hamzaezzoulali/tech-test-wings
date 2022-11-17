import React from 'react'
import '../styles/containerstyle.css'
export default function Container(props) {
  return (
    <div className='containerstyle' >
        {props.children}
    </div>
  )
}
