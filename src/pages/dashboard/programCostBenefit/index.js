import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Button } from 'antd'
import PaymentCard from 'components/CleanUIComponents/PaymentCard'

class ProgramCostBenefit extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Sales</strong>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PaymentCard
              name="Program A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program C"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">B2B</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PaymentCard
              name="Program A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program C"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Network</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-4">
            <PaymentCard
              name="Program A"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program B"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-4">
            <PaymentCard
              name="Program C"
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
