import React from 'react'
import ProjectManagement from './ProjectManagement'
import styles from './style.module.scss'

class TopBar extends React.Component {
  render() {
    return (
      <div className={styles.topbar}>
        <div className="mr-4">
          <ProjectManagement id="topBar.overallSpendView" />
        </div>
        <div className="mr-4">
          <ProjectManagement id="topBar.functionView" />
        </div>
        <div className="mr-4">
          <ProjectManagement id="topBar.projectView" />
        </div>
      </div>
    )
  }
}

export default TopBar
