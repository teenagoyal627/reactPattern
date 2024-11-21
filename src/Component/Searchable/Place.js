import React from 'react'

const Place = ({item}) => {
  return (
    <article className='place'>
    <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
    </div>
    </article>
  )
}

export default Place
