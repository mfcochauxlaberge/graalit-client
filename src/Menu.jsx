import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main-menu">
        <ul>
          <li><a href="#" className="active">Home</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Register</a></li>
          <li><a href="#">Screenshots</a></li>
          {/* <li><a href="#">Map</a></li>
          <li><a href="#">Overview</a></li>
          <li><a href="#">Lab</a></li>
          <li><a href="#">Schedule</a></li>
          <li><a href="#">World</a></li> */}
          <li><a href="#">Help</a></li>
        </ul>
      </div>
    )
  }
}

export default Menu