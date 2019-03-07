import { shallow } from 'enzyme'
import * as React from 'react'
import App from './App'
import './setupTests'

describe('Test <App />', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<App />).find('.App')).toHaveLength(1)
  })
})
