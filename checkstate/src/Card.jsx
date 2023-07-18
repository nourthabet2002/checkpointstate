import React from 'react'
import Modal from './Modal'

const Card = ({el}) => {
  return (
    <div className='card'>
        <Modal el={el} />
      <h1>{el.fullname}</h1>
      <h1>{el.profession}</h1>
      <h1><img src={el.imgsrc} alt={el.fullname} /></h1>
      <button>show me</button>
    </div>
  )
}

export default Card