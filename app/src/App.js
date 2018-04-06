import React, { Component } from 'react'
import './App.css'

import Accordion from './Accordion/Accordion.js'
import Tab from './Tab/Tab.js'
import Suggest from './Suggest/Suggest.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Suggest />
        <Accordion />
        <Tab />
      </div>
    )
  }
}

export default App
