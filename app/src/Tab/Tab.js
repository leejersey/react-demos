import React, { Component } from 'react'

import TabTitle from './TabTitle'

import './Tab.css'

class Tab extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tabs: [
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
  }
  render () {
    return (
      <div className='tabs'>
        <div className='tabs__header'>
          <TabTitle
            tabs={this.state.tabs}
            onRemove={this._handleRemove}
            onAdd={this._handleAdd}
            onRename={this._handleRename}
          />
        </div>
        <div className='tabs__content' />
      </div>
    )
  }
}

export default Tab
