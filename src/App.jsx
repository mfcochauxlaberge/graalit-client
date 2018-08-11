// React
import React, { Component, Fragment } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

// Libs
import { SessionProvider } from './lib/session.js'

// Components
import Menu from './Menu.jsx'
import Home from './Home.jsx'
import Login from './Login.jsx'
import Register from './Register.jsx'
import Screenshots from './Screenshots.jsx'
import Map from './Map.jsx'
import Overview from './Overview.jsx'
import Lab from './Lab.jsx'
import Schedule from './Schedule.jsx'
import World from './World.jsx'
import Help from './Help.jsx'

class App extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <SessionProvider>
        <BrowserRouter>
          <Fragment>
            <header id="header">
              <h1>Graalit</h1>
              <Menu />
            </header>
            <div id="content">
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/screenshots" component={Screenshots} />
              <Route exact path="/map" component={Map} />
              <Route exact path="/overview" component={Overview} />
              <Route exact path="/lab" component={Lab} />
              <Route exact path="/schedule" component={Schedule} />
              <Route exact path="/world" component={World} />
              <Route exact path="/help" component={Help} />
            </div>
            <footer id="footer">
              <small>A game by <a href="https://mfcl.io">Marc-François</a>.</small>
            </footer>
          </Fragment>
        </BrowserRouter>
      </SessionProvider>
    )
  }
}

export default App