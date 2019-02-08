import reducer, * as main from './main'

describe('(Redux Module) main', () => {
  describe('(Action Creators)', () => {
    it('should return the action object on getPokemon', () => {
      const result = main.getPokemon()
      const action = {
        type: 'GET_TOTAL',
        payload: {
          request: {
            method: 'GET',
            url: 'pokemon'
          }
        }
      }

      expect(result).toEqual(action)
    })
  })

  describe('(Reducer)', () => {
    it('should be initialized', () => {
      const initialState = { loading: false }
      const initialAction = { type: '@@INIT' }

      expect(reducer(undefined, initialAction)).toEqual(initialState)
    })

    it('should set loading state to true on GET_TOTAL', () => {
      const state = { loading: false }
      const result = reducer(state, { type: 'GET_TOTAL' })
      const expectedState = { loading: true }

      expect(result).toEqual(expectedState)
    })

    it('should set loading state to false and set main data on GET_TOTAL_SUCCESS', () => {
      const state = {}
      const data = { count: 10 }
      const result = reducer(state, {
        type: 'GET_TOTAL_SUCCESS',
        payload: { data }
      })
      const expectedState = {
        loading: false,
        total: 10
      }

      expect(result).toEqual(expectedState)
    })

    it('should set loading state to false on GET_TOTAL_FAIL', () => {
      const state = {}
      const result = reducer(state, {
        type: 'GET_TOTAL_FAIL',
        error: {}
      })
      const expectedState = {
        loading: false
      }

      expect(result).toEqual(expectedState)
    })
  })
})
