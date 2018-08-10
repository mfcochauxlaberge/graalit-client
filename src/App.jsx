// React
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'

// Components
import Menu from './Menu.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <header id="header">
          <h1>Graalit</h1>
          <Menu />
        </header>
        <div id="content">
          <h2>Some title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <h2>Another title</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <footer id="footer">
          <small>A game by <a href="https://mfcl.io">Marc-François</a>.</small>
        </footer>
      </Fragment>
    )
  }
}

export default App