import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import Main from '@containers/MainContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/pokemon' component={Main} />
      <Redirect to='/pokemon' />
    </Switch>
  </BrowserRouter>
)

export default Router
