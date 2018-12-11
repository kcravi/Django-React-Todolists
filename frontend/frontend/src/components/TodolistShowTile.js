import React from 'react'
import { Link } from 'react-router-dom'

const TodolistShowTile = (props) => {
  return(
    <div>
      {props.title}<br/>
      {props.body}<br/>
      {props.created_at}<br/><br/>
      <br/>
      <hr/>
      <Link to="/"> GO BACK </Link>
    </div>
  )
}

export default TodolistShowTile
