import React from 'react'
import './card.css'

function Card(props) {
  return (
    <div className='assets__cards'>
        {/* {props.icon} */}
        <h4>{props.title}</h4>
        <h1> {props.numOfEmployees}</h1>
    </div>
  )
}

export default Card