import React, { Component } from 'react'
import TabContent from './TabContent'

class TabTitle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }

    this.clkEvent = this.clkEvent.bind(this)
  }
  clkEvent (index) {
    this.setState({
      selectedIndex: index
    })
  }

  renderTabs () {
    let tabs = []

    this.props.tabs.forEach((ele, i) => {
      tabs.push(
        <TabContent
          key={`tab-${i}`}
          label={ele.tabName}
          index={i}
          isSelected={i === this.state.selectedIndex}
          onClick={this.clkEvent}
        />
      )
    })

    return tabs
  }
  render () {
    return (
      <div>
        {this.renderTabs()}
      </div>
    )
  }
}

export default TabTitle
