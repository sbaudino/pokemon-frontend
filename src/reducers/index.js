import { combineReducers } from 'redux'

import main from './main'
import pokemonDetail from './pokemonDetail'

export default combineReducers({
  main,
  pokemonDetail
})
