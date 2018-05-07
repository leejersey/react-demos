import React, { Component } from 'react'

class TabContent extends Component {
  constructor (props) {
    super(props)

    this.clkEvent = this.clkEvent.bind(this)
  }
  clkEvent () {
    this.props.onClick(this.props.index)
  }
  render () {
    const tabClassName = this.props.isSelected ? 'tab tab--selected' : 'tab'
    return (
      <span className={tabClassName} onClick={this.clkEvent}>
        <span className='tab__label'>{this.props.label}</span>
      </span>
    )
  }
}

export default TabContent
