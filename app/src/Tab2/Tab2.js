import React, { Component } from 'react'

import './Tab2.css'

class Menu extends Component {
  constructor (props) {
    super(props)
    this.state = {
      open: false
    }
    this.mover = this.mover.bind(this)
    this.mout = this.mout.bind(this)
  }
  mover () {
    this.setState({
      open: true
    })
  }
  mout () {
    this.setState({
      open: false
    })
  }
  render () {
    return (
      <div className='menu'>
        <button onMouseOver={this.mover} onMouseOut={this.mout}>
          {this.props.menuData.name}
        </button>
        <ul className='sub-menu' style={{display: this.state.open ? 'block' : 'none'}}>
          {this.props.menuData.arr.map((el, index) => {
            return (<div key={index}>{el}</div>)
          })}
        </ul>
      </div>
    )
  }
}

class Menus extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [
        {
          name: 'menuName',
          arr: [
            'menu1',
            'menu2',
            'menu3',
            'menu4'
          ]
        },
        {
          name: 'menuName1111',
          arr: [
            'menu-1',
            'menu-2',
            'menu-3',
            'menu-4'
          ]
        }
      ]
    }
  }
  render () {
    return (
      <div className='menus'>
        {this.state.data.map((el, index) => {
          return (<Menu key={index} menuData={el} />)
        })}
      </div>
    )
  }
}

export default Menus
