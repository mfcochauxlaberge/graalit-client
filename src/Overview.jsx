// React
import React, { Component, Fragment } from 'react'

// Util
import ProgressBar from './util/ProgressBar.jsx'

class Overview extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Fragment>
        <h2>Overview</h2>
        <table className="overview-table-h">
          <tbody>
            <tr>
              <th>Ruler</th>
              <td>No Name</td>
            </tr>
            <tr>
              <th>Coins</th>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <h3>Population</h3>
        <table className="overview-table-h">
          <tbody>
            <tr>
              <th>Number of people</th>
              <td>0</td>
            </tr>
            <tr>
              <th>Motivation</th>
              <td>0%</td>
            </tr>
            <tr>
              <th>Education</th>
              <td>None</td>
            </tr>
            <tr>
              <th>Brainpower</th>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <h3>Infrastructure</h3>
        <table className="overview-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Levels</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Castle</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Dragon nest</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Farm</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Laboratory</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Military camp</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Mine</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>University</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Village</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
        <h3>Research</h3>
        <div>
          <span>
            <b>Focus:</b> Nothing
          </span>
        </div>
        <table className="overview-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Progress</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Agriculture</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="20" max="100" />
              </td>
            </tr>
            <tr>
              <td>Alchemy</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="60" max="100" />
              </td>
            </tr>
            <tr>
              <td>Construction</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="70" max="100" />
              </td>
            </tr>
            <tr>
              <td>Dragon breeding</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="30" max="100" />
              </td>
            </tr>
            <tr>
              <td>Military training</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="40" max="100" />
              </td>
            </tr>
            <tr>
              <td>Security</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="30" max="100" />
              </td>
            </tr>
            <tr>
              <td>Surveillance</td>
              <td>0</td>
              <td>
                <ProgressBar className="progress-bar" value="50" max="100" />
              </td>
            </tr>
          </tbody>
        </table>
        <h3>Military</h3>
        <table className="overview-table">
          <thead>
            <tr>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Force</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dragons</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Knights</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Soldiers</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Trebuchets</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    )
  }
}

export default Overview
