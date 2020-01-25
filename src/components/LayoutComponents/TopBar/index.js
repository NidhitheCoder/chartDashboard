import React from 'react'
import { Link } from 'react-router-dom'
import styles from './style.module.scss'

import ProjectManagement from './ProjectManagement'

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="mr-4">
          <Link to="/dashboard/OverallSpendView">
            <ProjectManagement id="topBar.overallSpendView" />
          </Link>
        </div>
        <div className="mr-4">
          <Link to="/dashboard/FunctionView">
            <ProjectManagement id="topBar.functionView" />
          </Link>
        </div>
        <div className="mr-4">
          <Link to="/dashboard/ProgramView">
            <ProjectManagement id="topBar.projectView" />
          </Link>
        </div>
      </div>
    )
  }
}

export default TopBar
