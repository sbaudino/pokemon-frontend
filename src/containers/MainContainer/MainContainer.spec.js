import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'

import MainContainer from './MainContainer'
import Main from '@sections/Main'

import messagesEn from '@translations/en.json'

describe('(Redux Container) MainContainer', () => {
  let container, component
  
  const total = 10

  beforeEach(() => {
    const store = configureMockStore()({
      main: {
        loading: true,
        total
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )

    container = wrapper.find(MainContainer)
    component = container.find(Main)
  })

  it('should render the container without token and error message', () => {
    const store = configureMockStore()({
      main: {
        loading: false
      }
    })

    const wrapper = mount(
      <Provider store={store}>
        <MainContainer />
      </Provider>
    )

    const container = wrapper.find(MainContainer)
    const component = container.find(Main)
    const loading = component.prop('loading')
    const total = component.prop('total')

    expect(loading).toBeFalsy()
    expect(total).toBeUndefined()
  })

  it('should render the container with the provided loading statement', () => {
    const result = component.prop('loading')

    expect(result).toBeTruthy()
  })

  it('should render the container with the provided token', () => {
    const result = component.prop('total')

    expect(result).toEqual(total)
  })
})
