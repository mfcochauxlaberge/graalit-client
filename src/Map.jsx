// React
import React, { Component, Fragment } from 'react'

// Libs
import { times } from 'lodash'

// Styles
import MapStyles from './styles/components/_Map.scss'

// Infrastructure
import Empty from './assets/img/infrastructure/empty.png'

class Map extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h2>Map</h2>
        <div id={MapStyles.map}>
          {times(25, n => {
            return (
              <div key={n} className={MapStyles.cell}>
                <img src={Empty} alt="Empty cell" />
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}

export default Map
