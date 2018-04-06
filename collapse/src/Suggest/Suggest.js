import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import $ from 'jquery'

class Suggest extends Component {
  constructor () {
    super()
    this.state = {
      words: [],
      index: -1
    }
    this.wd = ''
    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }

  handleChange (e) {
    let wd = e.target.value
    $.ajax({
      url: 'http://www.baidu.com/su',
      type: 'GET',
      dataType: 'jsonp',
      data: {wd},
      jsonp: 'cb',
      success: (result) => {
        this.setState({
          words: result.s,
          index: -1
        })
      }
    })
  }

  handleKeyDown (e) {
    let keyCode = e.keyCode
    if (keyCode === 40 || keyCode === 38) {
      let index = this.state.index
      if (keyCode === 40) {
        index++
        if (index >= this.state.words.length) {
          index = -1
        }
      } else if (keyCode === 38) {
        index--
        if (index === -2) {
          index = this.state.words.length - 1
        }
      }
      this.setState({
        index
      })
    }
  }

  render () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 col-md-offset-2'>
            <div className='panel panel-default'>
              <div className='panel-heading'>
                <input
                  type='text'
                  onChange={this.handleChange}
                  onKeyDown={this.handleKeyDown}
                  className='form-control' />
              </div>
              <div className='panel-body'>
                <ul className='list-group'>
                  {
                    this.state.words.map((item, index) => {
                      const activeFlag = index === this.state.index ? 'active' : ''
                      return (
                        <li key={index} className={`list-group-item ${activeFlag}`}>
                          {item}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Suggest
