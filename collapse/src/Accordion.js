import React, { Component } from 'react'

import './Accordion.css'

class Accordion extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [{
        title: 'title',
        content: 'content'
      },
      {
        title: 'title1',
        content: 'content1'
      },
      {
        title: 'title2',
        content: 'content2'
      },
      {
        title: 'title2',
        content: 'content2'
      }],
      index: 0
    }
  }
  clk (index) {
    this.setState({
      index: index
    })
  }
  render () {
    return (
      <div className='accordion'>
        {this.state.data.map((el, index) => {
          const current = this.state.index === index ? 'full' : ''
          return (
            <div className='div' key={index}>
              <div className='title' onClick={() => { this.clk(index) }}>title</div>
              <div className={`content ${current}`} >content</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Accordion
