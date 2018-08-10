// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main-menu">
        <ul>
          <li><NavLink exact to="/">Home</NavLink></li>
          <li><NavLink exact to="/login">Login</NavLink></li>
          <li><NavLink exact to="/register">Register</NavLink></li>
          <li><NavLink exact to="/screenshots">Screenshots</NavLink></li>
          {/* <li><NavLink exact to="/map">Map</NavLink></li>
          <li><NavLink exact to="/overview">Overview</NavLink></li>
          <li><NavLink exact to="/lab">Lab</NavLink></li>
          <li><NavLink exact to="/screenshot">Schedule</NavLink></li> */}
          <li><NavLink exact to="/world">World</NavLink></li>
          <li><NavLink exact to="/help">Help</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Menu