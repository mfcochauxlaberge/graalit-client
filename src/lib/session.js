import React, { Component } from 'react'

// Libs
import { delay } from 'lodash'

const SessionContext = React.createContext()

class SessionProvider extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      username: '',
      claims: {},
    }

    this.refreshToken = () => {
      if (this.state.loggedIn) {
        console.log(`Refreshing token for ${this.state.username} (not for real)`)
      }

      delay(this.refreshToken, 1000 * 60)
    }
  }

  componentDidMount() {
    this.refreshToken()
  }

  render() {
    return (
      <SessionContext.Provider
        value={{
          loggedIn: this.state.loggedIn,
          username: this.state.username,
          claims: this.state.claims,

          getToken: ({ username, password }) => {
            console.log(`Getting token for ${username} with password ${password} (not for real)`)

            this.setState(() => {
              return {
                loggedIn: true,
                username: 'markkosho',
                claims: {},
              }
            })

            return {};
          },
        }}
      >
        {this.props.children}
      </SessionContext.Provider>
    )
  }
}

export { SessionContext, SessionProvider}