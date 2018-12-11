import React from 'react'
import { Link } from 'react-router-dom'

const TodolistIndexTile = (props) => {
  return(
    <div>
      <Link to={`/${props.id}`}>{props.title}</Link>
      <br/>
    </div>
  )
}

export default TodolistIndexTile
