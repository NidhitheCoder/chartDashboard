import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { reduce } from 'lodash'
// import Button from 'react-bootstrap/Button'
import styles from './style.module.scss'

const mapStateToProps = ({ menu }) => ({
  isMenuTop: menu.isMenuTop,
  menuTopData: menu.menuTopData,
  menuLeftData: menu.menuLeftData,
})

@withRouter
@connect(mapStateToProps)
class Breadcrumbs extends React.Component {
  // state = {
  //   breadcrumb: [],
  // }

  // componentDidMount() {
  //   this.setBreadcrumbs(this.props)
  // }

  // componentWillReceiveProps(newProps) {
  //   this.setBreadcrumbs(newProps)
  // }

  // setBreadcrumbs = props => {
  //   const { isMenuTop, menuTopData, menuLeftData } = this.props
  //   // this.setState({
  //   //   breadcrumb: this.getBreadcrumb(props, isMenuTop ? menuTopData : menuLeftData),
  //   // })
  // }

  getPath(data, url, parents = []) {
    const items = reduce(
      data,
      (result, entry) => {
        if (result.length) {
          return result
        }
        if (entry.url === url) {
          return [entry].concat(parents)
        }
        if (entry.children) {
          const nested = this.getPath(entry.children, url, [entry].concat(parents))
          return (result || []).concat(nested.filter(e => !!e))
        }
        return result
      },
      [],
    )
    return items.length > 0 ? items : [false]
  }

  getBreadcrumb = (props, items) => {
    const [activeMenuItem, ...path] = this.getPath(items, props.location.pathname)

    if (activeMenuItem && path.length) {
      return path.reverse().map((item, index) => {
        if (index === path.length - 1) {
          return (
            <span key={item.key}>
              <span className={`${styles.arrow} text-muted`} />
              <span className="text-muted">{item.title}</span>
              <span className={styles.arrow} />
              <strong>{activeMenuItem.title}</strong>
            </span>
          )
        }
        return (
          <span key={item.key}>
            <span className={`${styles.arrow} text-muted`} />
            <span className="text-muted">{item.title}</span>
          </span>
        )
      })
    }
    return (
      <span>
        <span className={styles.arrow} />
        <strong>{activeMenuItem.title}</strong>
      </span>
    )
  }

  render() {
    // const { breadcrumb } = this.state
    return (
      <div
        className={styles.breadcrumbs}
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr', gridGap: '2%' }}
      >
        <div className={styles.path}>
          <NavLink to="/dashboard/OverallSpendView" activeStyle={{ backgroundColor: 'green' }}>
            <span
              style={{
                backgroundColor: '#c7c4c4',
                border: '1px solid darkgrey',
                borderRadius: '4%',
                paddingLeft: '3%',
                paddingRight: '40%',
              }}
            >
              Overall Spend
            </span>
          </NavLink>
          {/* {breadcrumb} */}
        </div>
        <div className={styles.path}>
          <NavLink
            to="/dashboard/FunctionView"
            activeStyle={{ backgroundColor: 'green' }}
            style={{ color: '#555555' }}
          >
            <span
              style={{
                backgroundColor: '#c7c4c4',
                border: '1px solid darkgrey',
                borderRadius: '4%',
                paddingLeft: '3%',
                paddingRight: '15%',
              }}
            >
              Functional cost benefit
            </span>
          </NavLink>
          {/* {breadcrumb} */}
        </div>
        <div className={styles.path}>
          <NavLink to="/dashboard/programCostBenefit" activeStyle={{ backgroundColor: 'green' }}>
            <span
              style={{
                backgroundColor: '#c7c4c4',
                border: '1px solid darkgrey',
                borderRadius: '4%',
                paddingLeft: '3%',
                paddingRight: '10%',
              }}
            >
              Program Cost benefit
            </span>
          </NavLink>
          {/* {breadcrumb} */}
        </div>
      </div>
    )
  }
}

export default Breadcrumbs
