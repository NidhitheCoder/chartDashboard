import React from 'react'
import Authorize from 'components/LayoutComponents/Authorize'

import canvasjs from 'assets/js/canvasjs.react'
import { chartsData } from './waterfall-data'
import styles from './styles.module.scss'

class OverallSpendView extends React.Component {
  render() {
    const { CanvasJSChart } = canvasjs

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '5%' }}>
          {chartsData.map(chart => (
            <div className={`card card--withShadow ${styles.chartCard}`}>
              <CanvasJSChart key={Math.random()} options={chart} />
            </div>
          ))}
        </div>
      </Authorize>
    )
  }
}

export default OverallSpendView
