// React
import React, { Component } from 'react'

class ProgressBar extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.className}>
        <div
          style={{ width: `${(this.props.value / this.props.max) * 100}%` }}
        />
      </div>
    )
  }
}

export default ProgressBar
