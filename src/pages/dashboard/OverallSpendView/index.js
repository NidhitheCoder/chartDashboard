import React from 'react'
import Authorize from 'components/LayoutComponents/Authorize'

import { Helmet } from 'react-helmet'
import WaterfallGraphCard from 'components/CleanUIComponents/WaterfallGraphCard'
import ChartCard from 'components/CleanUIComponents/ChartCard'

class OverallSpendView extends React.Component {
  render() {
    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="Dashboard Alpha" />
        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Overall Stats</strong>
        </div>
        <div className="row">
          <div className="col-xl-4">
            <ChartCard
              title="Total Projects"
              amount="354"
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
              title="Total Capex"
              amount="$1.24 M"
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
              title="Total Opex"
              amount="$486,000"
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

        <div className="utils__title utils__title--flat mb-3">
          <strong className="text-uppercase font-size-16">Spend Charts</strong>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <WaterfallGraphCard
              icon="lnr lnr-bookmark"
              name="Jomy"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
              sum="CAPEX - Category A"
            />
          </div>
          <div className="col-lg-6">
            <WaterfallGraphCard
              icon="lnr lnr-bookmark"
              name="Jomy"
              number="8748-XXXX-1678-5416"
              type="MASTERCARD"
              footer="Expires at 03/22"
              sum="CAPEX - Category B"
            />
          </div>
          <div className="col-lg-6">
            <WaterfallGraphCard
              icon="lnr lnr-hourglass"
              name="Mrs. Angelina Jolie"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
              sum="OPEX - Category A"
            />
          </div>
          <div className="col-lg-6">
            <WaterfallGraphCard
              icon="lnr lnr-hourglass"
              name="fourth one"
              number="6546-XXXX-1678-1579"
              type="VISA"
              footer="Locked Temporary"
              sum="OPEX - Category B"
            />
          </div>
        </div>
      </Authorize>
    )
  }
}

export default OverallSpendView
