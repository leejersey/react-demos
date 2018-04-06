import React, { Component } from 'react'
import './App.css'

// import Accordion from './Accordion.js'
// import Tab from './Tab.js'
import Suggest from './Suggest/Suggest.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <Suggest />
      </div>
    )
  }
}

export default App
