import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { shallow } from 'enzyme'

describe('App renders', () => {
  // it('App renders without crashing', () => {
  //   const div = document.createElement('div')
  //   ReactDOM.render(<App />, div)
  // })

  it('App renders without crashing Enzyme shallow test', () => {
    shallow(<App />)
  })
})
