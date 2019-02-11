import endpoints from '@shared/static/requests/endpoints.json'

import { parsePokemonData } from '@shared/utils'

// Actions
export const GET_POKEMON_DETAIL = 'GET_POKEMON_DETAIL'
export const GET_POKEMON_DETAIL_SUCCESS = 'GET_POKEMON_DETAIL_SUCCESS'
export const GET_POKEMON_DETAIL_FAIL = 'GET_POKEMON_DETAIL_FAIL'

// Action Creators
export const getPokemonDetail = (name) => ({
  type: GET_POKEMON_DETAIL,
  payload: {
    request: {
      method: 'GET',
      url: `${endpoints.pokemon}/${name}`
    }
  }
})

// Reducers
export const getPokemonDetailHandler = state => ({
  ...state,
  loading: true
})

export const getPokemonDetailSuccessHandler = (state, { payload }) => ({
  ...state,
  loading: false,
  pokemonData: parsePokemonData(payload.data)
})

export const getPokemonDetailFailHandler = state => ({
  ...state,
  loading: false
})

export const ACTION_HANDLERS = {
  [GET_POKEMON_DETAIL]: getPokemonDetailHandler,
  [GET_POKEMON_DETAIL_SUCCESS]: getPokemonDetailSuccessHandler,
  [GET_POKEMON_DETAIL_FAIL]: getPokemonDetailFailHandler
}

export const initialState = {
  loading: false
}

export default (state = initialState, action) => {
  const handler = ACTION_HANDLERS[action.type]
  return handler ? handler(state, action) : state
}
