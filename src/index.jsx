import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import '@shared/styles/global.scss'

import store from './store'
import AppRouter from './router/AppRouter'

ReactDOM.render(
  <Provider store={store}>
    <AppRouter />
  </Provider>,
  document.getElementById('app')
)
