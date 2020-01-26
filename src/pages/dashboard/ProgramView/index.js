import React from 'react'

import Authorize from 'components/LayoutComponents/Authorize'
import ProjectCard from './components/ProjectCard'
import data from './data'

class ProgramView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        {Object.entries(data).map(([unit, unitData]) => {
          return (
            <>
              <div className="utils__title utils__title--flat mb-3">
                <strong className="text-uppercase font-size-24">{unit}</strong>
              </div>
              <div className="row">
                {unitData.map(values => (
                  <div className="col-lg-4">
                    <ProjectCard
                      title={values.title}
                      vendor={values.vendor}
                      healthStatus={values.healthStatus}
                      npsScore={values.npsScore}
                      revenueUplift={values.revenueUplift}
                      costSavings={values.costSavings}
                      chartData={values.chartData}
                    />
                  </div>
                ))}
              </div>
            </>
          )
        })}
      </Authorize>
    )
  }
}

export default ProgramView
