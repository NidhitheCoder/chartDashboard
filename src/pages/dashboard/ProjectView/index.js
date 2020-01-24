import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

const stackedBarData = {
  labels: ['Planned', 'Actual'],
  series: [
    [8e5, 12e5],
    [2e5, 4e5],
  ],
}

const stackedBarOptions = {
  stackBars: !0,
  axisY: {
    labelInterpolationFnc(value) {
      return `${value / 1e3}k`
    },
  },
  plugins: [ChartistTooltip({ anchorToPoint: false, appendToBody: true, seriesName: false })],
}

class ProjectView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="column">
          <div className="row">
            <div className="col-lg-2">
              <div
                className="card card--fullHeight"
                style={{ padding: '5%', paddingTop: '12%', textAlign: 'center' }}
              >
                <h5 className="text-black">
                  <div className="column">
                    <strong>Overall</strong>
                  </div>
                  <strong>Progress</strong>
                </h5>
              </div>
            </div>
            <div className="col-lg-8">
              <div
                className="card card--fullHeight"
                style={{ padding: '5%', paddingTop: '4%', textAlign: 'center' }}
              >
                <h5 className="text-black">
                  <div className="row">
                    <strong>Planning</strong>
                    <strong style={{ paddingLeft: '14%' }}>Design</strong>
                    <strong style={{ paddingLeft: '14%' }}>Development</strong>
                    <strong style={{ paddingLeft: '14%' }}>Testing</strong>
                  </div>
                </h5>
              </div>
            </div>

            <div className="col-lg-2">
              <div
                className="card card--fullHeight"
                style={{
                  padding: '5%',
                  paddingTop: '12%',
                  textAlign: 'center',
                  backgroundColor: '#6EE387',
                }}
              >
                <h5 className="text-black">
                  <div className="columun">
                    <div className="column">Projected</div>

                    <div className="column">Launch Date</div>
                    <div className="column">Friday, December 15</div>
                    <div className="column">121 Days</div>
                  </div>
                </h5>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '4%', textAlign: 'center' }}
            >
              <h5 className="text-black">
                <strong>Risks</strong>
                <div className="row" style={{ paddingTop: '5%' }}>
                  <div className="column">
                    <div className="column" style={{ color: 'red', paddingLeft: '4%' }}>
                      8.1%
                    </div>
                    <div className="column" style={{ color: 'red', paddingTop: '100%' }}>
                      2
                    </div>
                    <div className="column" style={{ color: 'yellow', paddingTop: '100%' }}>
                      2
                    </div>
                  </div>
                  <div className="column">
                    <div className="column" style={{ color: 'red', paddingLeft: '1%' }}>
                      Currently Over Target Budget
                    </div>
                    <div
                      className="column"
                      style={{ color: 'red', paddingTop: '18%', paddingLeft: '4%' }}
                    >
                      Overdue Tasks (High Risk)
                    </div>
                    <div className="column" style={{ color: 'yellow', paddingTop: '18%' }}>
                      Overdue Tasks(Medium Risk)
                    </div>
                  </div>
                </div>
              </h5>
            </div>
          </div>
          <div className="col-lg-3">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Project Budget</strong>
              </h5>
              <div className="col-lg-10">
                <div className="mb-2">
                  <ChartistGraph
                    className="height-300"
                    data={stackedBarData}
                    options={stackedBarOptions}
                    type="Bar"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Overude Tasks</strong>
                <div className="row">
                  <div className="column" style={{ paddingLeft: '10%' }}>
                    <strong style={{ backgroundColor: '#D3D3D3' }}>Overude</strong>
                    <div className="column">1 Day</div>
                    <div className="column">4 Days</div>
                    <div className="column">10 Days</div>
                    <div className="column">24 Days</div>
                  </div>

                  <div className="column" style={{ paddingLeft: '10%' }}>
                    <strong style={{ backgroundColor: '#D3D3D3' }}>Tasks</strong>
                    <div className="column">Status Update For Board</div>
                    <div className="column">2017-12-15</div>
                    <div className="column">Georg Denwill</div>
                    <div className="column">in Time</div>
                  </div>
                </div>
              </h5>
            </div>
          </div>
          <div className="col-lg-2">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Project Log style</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Project Summary</strong>
                <div className="row">
                  <div className="column">
                    <div className="column">Start Date:</div>
                    <div className="column">End Date:</div>
                    <div className="column">Project Leader:</div>
                    <div className="column">Overall Status:</div>
                  </div>

                  <div className="column" style={{ color: 'green', paddingLeft: '50' }}>
                    <div className="column">2017-05-01</div>
                    <div className="column">2017-12-15</div>
                    <div className="column">Georg Denwill</div>
                    <div className="column">in Time</div>
                  </div>
                </div>
              </h5>
            </div>
          </div>
          <div className="col-lg-4">
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Features</strong>
              </h5>
            </div>
          </div>
          <div className="col-lg-4,4" style={{ height: 200, width: 300 }}>
            <div
              className="card card--fullHeight"
              style={{ padding: '5%', paddingTop: '12%', height: '' }}
            >
              <h5 className="text-black">
                <strong>Benefits</strong>
              </h5>
            </div>
          </div>
        </div>
      </Authorize>
    )
  }
}

export default ProjectView
