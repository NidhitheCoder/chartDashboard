import React from 'react'
// import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import { Button } from 'antd'
import PaymentCard from 'components/CleanUIComponents/PaymentCard'

class FunctionView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Sales</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <PaymentCard 
              icon="lnr lnr-bookmark"
              name="Program 1"
              number="4512-XXXX-1678-7528"
              type="VISA"
              footer="Expires at 02/20"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 2"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 3"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 4"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
            />
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">B2B</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 1"
              number="4512-XXXX-1678-7528"
              type="VISA"
              footer="Expires at 02/20"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 2"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 3"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 4"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
            />
          </div>
        </div>
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Network</strong>
          <Button className="ml-3">View All</Button>
        </div>
        <div className="row">
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 1"
              number="4512-XXXX-1678-7528"
              type="VISA"
              footer="Expires at 02/20"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 2"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 3"
              number="spended"
              type="benefit 1"
              footer="Expires at 03/22"
            />
          </div>
          <div className="col-lg-3">
            <PaymentCard
              icon="lnr lnr-bookmark"
              name="Program 4"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
            />
          </div>
        </div>
    
      </Authorize>
    )
  }
}

export default FunctionView

