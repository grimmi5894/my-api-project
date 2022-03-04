import React from 'react'
import { Link } from 'react-router-dom'

const Title = () => {
  return (
    <div className='Title'>
      <h1>Video Games</h1>
      <p>Please Select Link Below</p>
      <Link to={'/games'}>Games List</Link>
    </div>
  )
}

export default Title