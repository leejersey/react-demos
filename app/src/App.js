import React, { Component } from 'react'
import './App.css'

import Accordion from './Accordion/Accordion.js'
import Tab from './Tab/Tab.js'
import Tab2 from './Tab2/Tab2.js'
import Suggest from './Suggest/Suggest.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        {/* <Suggest />
        <Accordion />
        <Tab /> */}
        <Tab2 />
      </div>
    )
  }
}

export default App
