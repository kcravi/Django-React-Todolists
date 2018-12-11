import React from 'react'
import { Route } from 'react-router-dom'

import TodolistIndexContainer from './containers/TodolistIndexContainer'
import TodolistShowContainer from './containers/TodolistShowContainer'

const BaseRouter = () => {
  return(
    <div>
      <Route exact path='/' component={TodolistIndexContainer} />
      <Route exact path='/:id' component={TodolistShowContainer} />
    </div>
  )
}

export default BaseRouter
