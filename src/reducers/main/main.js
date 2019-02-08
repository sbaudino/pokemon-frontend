
import endpoints from '@shared/static/requests/endpoints.json'

// Actions
export const GET_POKEMON = 'GET_POKEMON'
export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS'
export const GET_POKEMON_FAIL = 'GET_POKEMON_FAIL'

// Action Creators
export const getPokemon = () => ({
  type: GET_POKEMON,
  payload: {
    request: {
      method: 'GET',
      url: `${endpoints.pokemon}?limit=151`
    }
  }
})

// Reducers
export const getPokemonHandler = state => ({
  ...state,
  loading: true
})

export const getPokemonSuccessHandler = (state, { payload }) => ({
  ...state,
  loading: false,
  pokemon: payload.data && payload.data.results
})

export const getPokemonFailHandler = state => ({
  ...state,
  loading: false
})

export const ACTION_HANDLERS = {
  [GET_POKEMON]: getPokemonHandler,
  [GET_POKEMON_SUCCESS]: getPokemonSuccessHandler,
  [GET_POKEMON_FAIL]: getPokemonFailHandler
}

export const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
