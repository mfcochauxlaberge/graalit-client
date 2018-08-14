// React
import React, { Component, Fragment } from 'react'
import { BrowserRouter, Route, NavLink } from 'react-router-dom'

// Libs
import { SessionProvider, SessionContext } from './lib/session.js'

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
import Account from './Account.jsx'

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
              <div>
                <div>
                  <SessionContext.Consumer>
                    {(context) => (
                      (context.loggedIn &&
                        <div id="info-left">
                          <span><b>0</b> coins</span>
                          <span><b>0</b> people</span>
                          <span><b>0</b> energy</span>
                        </div>
                      )
                    )}
                  </SessionContext.Consumer>
                </div>
                <div>
                  <h1>Graalit</h1>
                </div>
                <div>
                  <SessionContext.Consumer>
                    {(context) => (
                      (context.loggedIn &&
                        <div id="info-right">
                          <span><b>markkosho</b></span>
                          <span><NavLink exact to="/account">Account</NavLink></span>
                          <span><button onClick={context.deleteToken}>Logout</button></span>
                        </div>
                      )
                    )}
                  </SessionContext.Consumer>
                </div>
              </div>
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
              <Route exact path="/account" component={Account} />
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