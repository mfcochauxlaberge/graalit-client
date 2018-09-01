// React
import React, { Component, Fragment } from 'react'

// Styles
import CouncilStyles from './styles/components/_Council.scss'

class Council extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h2>Council</h2>
        <p>No council yet.</p>
        <h3>Orders</h3>
        <button>Previous turn</button>
        <div>
          <h4>Turn 7 (1 day ago)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div>
          <h4>Turn 8 (12 hours ago)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div className={CouncilStyles.next}>
          <h4>Turn 9 (in 3 minutes)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div>
          <h4>Turn 10 (in 12 hours)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div>
          <h4>Turn 11 (in 1 day)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div>
          <h4>Turn 12 (in 1 day)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <div>
          <h4>Turn 13 (in 2 days)</h4>
          <span>
            <i>No orders given.</i>
          </span>
        </div>
        <button>Next turn</button>
      </Fragment>
    )
  }
}

export default Council
