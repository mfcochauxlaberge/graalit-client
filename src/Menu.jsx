// React
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'

// Libs
import { SessionContext } from './lib/session.js'

class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div id="main-menu">
        <ul>
          <li>
            <NavLink exact to="/">
              Home
            </NavLink>
          </li>
          <SessionContext.Consumer>
            {context => (
              <Fragment>
                {!context.loggedIn && (
                  <Fragment>
                    <li>
                      <NavLink exact to="/login">
                        Login
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/register">
                        Register
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/screenshots">
                        Screenshots
                      </NavLink>
                    </li>
                  </Fragment>
                )}
                {context.loggedIn && (
                  <Fragment>
                    <li>
                      <NavLink exact to="/map">
                        Map
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/overview">
                        Overview
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/council">
                        Council
                      </NavLink>
                    </li>
                    <li>
                      <NavLink exact to="/schedule">
                        Schedule
                      </NavLink>
                    </li>
                  </Fragment>
                )}
              </Fragment>
            )}
          </SessionContext.Consumer>
          <li>
            <NavLink exact to="/world">
              World
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/help">
              Help
            </NavLink>
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
