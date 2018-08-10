// React
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router-dom'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main-menu">
        <ul>
          <li><Link to="/" className="active">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/screenshots">Screenshots</Link></li>
          {/* <li><Link to="/map">Map</Link></li>
          <li><Link to="/overview">Overview</Link></li>
          <li><Link to="/lab">Lab</Link></li>
          <li><Link to="/screenshot">Schedule</Link></li> */}
          <li><Link to="/world">World</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
    )
  }
}

export default Menu