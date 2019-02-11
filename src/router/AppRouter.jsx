import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'

import PokemonDetail from '@containers/PokemonDetailContainer'
import Main from '@containers/MainContainer'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/pokemon' component={Main} />
      <Route path='/pokemon/:name' component={PokemonDetail} />
      <Redirect to='/pokemon' />
    </Switch>
  </BrowserRouter>
)

export default Router
