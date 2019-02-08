import { createStore, applyMiddleware } from 'redux'
import axiosMiddleware from 'redux-axios-middleware'
import thunk from 'redux-thunk'
import axios from 'axios'

import rootReducer from '@reducers'

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_BASE_ROUTE || ''}`,
  responseType: 'json'
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk, axiosMiddleware(client))
)

export default store
