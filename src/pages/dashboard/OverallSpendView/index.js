import React from 'react'
import Authorize from 'components/LayoutComponents/Authorize'

import canvasjs from 'assets/js/canvasjs.react'
import waterfallChartData1 from './waterfall-data1'
import waterfallChartData2 from './waterfall-data2'
import waterfallChartData3 from './waterfall-data3'
import waterfallChartData4 from './waterfall-data4'
import { chartsData } from './waterfall-data'

class OverallSpendView extends React.Component {
  render() {
    const { CanvasJSChart } = canvasjs

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridGap: '5%' }}>
          <CanvasJSChart options={waterfallChartData1} />
          <CanvasJSChart options={waterfallChartData2} />
          <CanvasJSChart options={waterfallChartData3} />
          <CanvasJSChart options={waterfallChartData4} />
          {chartsData.map(chart => (
            <CanvasJSChart key={Math.random()} options={chart} />
          ))}
        </div>
      </Authorize>
    )
  }
}

export default OverallSpendView
