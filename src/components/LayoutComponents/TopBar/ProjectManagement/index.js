import React from 'react'
import { FormattedMessage } from 'react-intl'
import styles from './style.module.scss'

class ProjectManagement extends React.Component {

  render() {
    const {id} = this.props;
    return (
      <div className={styles.dropdown}>
        <i className={`${styles.icon} icmn-database`} />
        <span className="d-none d-xl-inline">
          <strong>
            <FormattedMessage id={id} />
          </strong>
        </span>
      </div>
    )
  }
}

export default ProjectManagement
