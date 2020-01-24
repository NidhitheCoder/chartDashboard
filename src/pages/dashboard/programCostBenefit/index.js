import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ProjectCard from 'components/CleanUIComponents/projectCard'

class ProgramCostBenefit extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <strong className=" font-size-16">Program B</strong>
        <div className="row">
          <div className="col-lg-4">
            <ProjectCard
              name="Project A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project C"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
        </div>
        <strong className=" font-size-16">Program B</strong>

        <div className="row">
          <div className="col-lg-4">
            <ProjectCard
              name="Project A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project C"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
        </div>

        <strong className="font-size-16">Program C</strong>

        <div className="row">
          <div className="col-lg-4">
            <ProjectCard
              name="Project A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <ProjectCard
              name="Project C"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
        </div>
      </Authorize>
    )
  }
}

export default ProgramCostBenefit
