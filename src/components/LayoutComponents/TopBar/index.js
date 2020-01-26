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
            <ProjectManagement id="topBar.overallSpendView" icon="fa fa-dollar" />
          </Link>
        </div>
        <div className="mr-4">
          <Link to="/dashboard/FunctionView">
            <ProjectManagement id="topBar.functionView" icon="fa fa-group" />
          </Link>
        </div>
        <div className="mr-4">
          <Link to="/dashboard/ProgramView">
            <ProjectManagement id="topBar.projectView" icon="fa fa-tasks" />
          </Link>
        </div>
      </div>
    )
  }
}

export default TopBar
