import React, { Component } from 'react'

import './Tab.css'

class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          tabName: 'title1',
          tabCon: [
            {
              title: '1',
              main: '1'
            },
            {
              title: '2',
              main: '2'
            },
            {
              title: '3',
              main: '3'
            }
          ]
        },
        {
          tabName: 'title2',
          tabCon: [
            {
              title: '11',
              main: '11'
            },
            {
              title: '22',
              main: '22'
            },
            {
              title: '33',
              main: '33'
            }
          ]
        },
        {
          tabName: 'title3',
          tabCon: [
            {
              title: '111',
              main: '111'
            },
            {
              title: '222',
              main: '222'
            },
            {
              title: '333',
              main: '333'
            }
          ]
        }
      ]
    }

    this.clkEvent = this.clkEvent.bind(this)
  }
  clkEvent () {
    console.log('111')
  }
  render () {
    return (
      <div>
        <div className='menus'>
          { this.state.data.map((el, index) => {
            return (
              <div className='menu' key={index}>
                <button onClick={this.clkEvent}>{el.tabName}</button>
              </div>
            )
          })}
        </div>
        <div>
            11111
        </div>
      </div>
    )
  }
}

export default Tab
