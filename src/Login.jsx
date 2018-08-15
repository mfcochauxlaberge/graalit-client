// React
import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'

// Libs
import { SessionContext } from './lib/session'

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',
    }
  }

  render() {
    return (
      <Fragment>
        <h2>Login</h2>
        <SessionContext.Consumer>
          {(context) => {
            if (context.loggedIn) {
              return <Redirect to="/map" />
            } else {
              return (
                <form
                  onSubmit={(e) => {
                    context.getToken({
                      username: this.state.username,
                      password: this.state.password,
                    })
                  }}
                >
                  <input
                    type="text"
                    placeholder="Username"
                    
                    onChange={this.onChangeUsername}
                    />
                  <input
                    type="password"
                    placeholder="Password"
                    
                    onChange={this.onChangePassword}
                    />
                  <input
                    type="submit"
                    value="Log in"
                    />
                </form>
              )
            }
          }}
        </SessionContext.Consumer>
      </Fragment>
    )
  }

  onChangeUsername = (e) => this.setState({ username: e.target.value })

  onChangePassword = (e) => this.setState({ password: e.target.value })

  onLogin = (e) => {
    e.preventDefault()
  }
}

export default Login