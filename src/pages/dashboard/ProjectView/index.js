import React from 'react'
import { Helmet } from 'react-helmet'
import Authorize from 'components/LayoutComponents/Authorize'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'
import ProgressGroup from 'components/CleanUIComponents/CustomProgressGroup'
import InfoCard from 'components/CleanUIComponents/InfoCard'
import { Table } from 'antd'
import {taskTableData } from './data.json'

class ProjectView extends React.Component {

  state = {
    taskTableSelectedRowKeys: []
  }

  // Task Table Settings //
  onSelectChange = taskTableSelectedRowKeys => {
    this.setState({ taskTableSelectedRowKeys })
  }


  render() {
    const {
      taskTableSelectedRowKeys
    } = this.state

    // Task Table Settings //
    const taskTableRowSelection = {
      taskTableSelectedRowKeys,
      onChange: this.onSelectChange,
    }

    const taskTableColumns = [
      {
        title: 'Task',
        dataIndex: 'name',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Contact Person',
        dataIndex: 'username',
        render: text => <a href="javascript: void(0);">{text}</a>,
      },
      {
        title: 'Status',
        dataIndex: 'status',
        render: text => <a href="javascript: void(0);">{text}</a>
      },
    ]

    const stackedBarData = {
      labels: ['Planned', 'Actual'],
      series: [
        [8e5, 12e5],
        [2e5, 4e5],
        [1e5, 2e5],
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

    return (
      <Authorize roles={['admin']} redirect to="/dashboard/beta">
        <Helmet title="B2B Connectivity" />
        <div className="row">
          <div className="col-lg-9">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Product Progress</strong>
                </div>
                <div className="utils__titleDescription">
                  Block with important Work Progress information
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-xl-12">
                    <ProgressGroup />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 noPadding">
            <div className="card-body">
              <div className="row">
                <InfoCard form="stats-large" icon="calendar" btnType="success" type="success" />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="card">
              <div className="card-header">
                <div className="utils__title">
                  <strong>Development Status Table</strong>
                </div>
                <div className="utils__titleDescription">
                  Important product areas and contact person
                </div>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-lg-12">
                    <Table
                      className="utils__scrollTable"
                      scroll={{ x: '100%' }}
                      columns={taskTableColumns}
                      dataSource={taskTableData}
                      rowSelection={taskTableRowSelection}
                      pagination={false}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="card card--fullHeight" style={{ padding: '5%', paddingTop: '12%' }}>
              <h5 className="text-black">
                <strong>Stacked Bar</strong>
              </h5>
              <div className="mb-5">
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
      </Authorize>
    )
  }
}

export default ProjectView
