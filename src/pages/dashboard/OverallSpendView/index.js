import React from 'react'
import Authorize from 'components/LayoutComponents/Authorize'

import { Helmet } from 'react-helmet'
import canvasjs from 'assets/js/canvasjs.react'
import ChartCard from 'components/CleanUIComponents/ChartCard'
import { chartsData } from './waterfall-data'
import styles from './styles.module.scss'

class OverallSpendView extends React.Component {
  render() {
    const { CanvasJSChart } = canvasjs

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Last Week Statistics</strong>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title="Transactions"
              amount="1240"
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [2, 11, 8, 14, 18, 20, 26],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title="Income"
              amount="$1,240.00"
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [20, 80, 67, 120, 132, 66, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
          <div className="col-xl-4">
            <ChartCard
              title="Outcome"
              amount="$240.56"
              chartProps={{
                width: 120,
                height: 107,
                lines: [
                  {
                    values: [42, 40, 80, 67, 84, 20, 97],
                    colors: {
                      area: 'rgba(199, 228, 255, 0.5)',
                      line: '#004585',
                    },
                  },
                ],
              }}
            />
          </div>
        </div>
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
