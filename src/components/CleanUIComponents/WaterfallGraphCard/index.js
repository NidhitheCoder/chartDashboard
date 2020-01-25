import React from 'react'
import canvasjs from 'assets/js/canvasjs.react'
import { chartsData } from '../../../pages/dashboard/OverallSpendView/waterfall-data'

import styles from './style.module.scss'

class WaterfallGraphCard extends React.Component {
  state = {
    sum: '',
  }

  componentWillMount() {
    this.getParams()
  }

  getParams = () => {
    const params = this.props
    this.setState({
      ...params,
    })
  }

  render() {
    const { sum } = this.state
    const { CanvasJSChart } = canvasjs
    return (
      <a
        href="javascript: void(0);"
        className={`card card--withShadow ${styles.waterfallGraphCardCard}`}
      >
        <CanvasJSChart key={Math.random()} options={chartsData[0]} />
        {sum && <span className={styles.sum}>{sum}</span>}
      </a>
    )
  }
}

export default WaterfallGraphCard
