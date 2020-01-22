import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'


class ProgramView extends React.Component {
  render() {
    const horizontalData = {
      labels: ['Spended', 'Benefit 1', 'Benefit 2'],
      series: [
        [5, 4, 3],
        [3, 2, 9],
      ],
    }

    const horizontalOptions = {
      seriesBarDistance: 10,
      reverseData: !0,
      horizontalBars: !0,
      axisY: {
        offset: 70,
      },
      plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
    }
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="col-lg-8">
           
          <h5 className="text-black">
            <strong>Project A</strong>
          </h5>
          <div className="mb-2">
            <ChartistGraph
              className="height-150"
              type="Bar"
              data={horizontalData}
              options={horizontalOptions}
            />
          </div>

          <h5 className="text-black">
            <strong>Project B</strong>
          </h5>
          <div className="mb-2">
            <ChartistGraph
              className="height-150"
              type="Bar"
              data={horizontalData}
              options={horizontalOptions}
            />
          </div>

          <h5 className="text-black">
            <strong>Project C</strong>
          </h5>
          <div className="mb-2">
            <ChartistGraph
              className="height-150"
              type="Bar"
              data={horizontalData}
              options={horizontalOptions}
            />
          </div>
        </div>
      </Authorize>
    )
  }
}

export default ProgramView
