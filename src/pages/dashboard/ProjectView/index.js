import React from 'react'
import { Helmet } from 'react-helmet'
import ChartistGraph from 'react-chartist'
import ChartistTooltip from 'chartist-plugin-tooltips-updated'

import Authorize from 'components/LayoutComponents/Authorize'
import ProgressGroup from 'components/CleanUIComponents/CustomProgressGroup'
import { Table, Tooltip } from 'antd'

import InfoCard from './InfoCard'
import { taskTableData } from './data.json'
import styles from './style.module.scss'
import BudgetInfo from './BudgetInfo'

class ProjectView extends React.Component {
  state = {
    taskTableSelectedRowKeys: [],
  }

  // Task Table Settings //
  onSelectChange = taskTableSelectedRowKeys => {
    this.setState({ taskTableSelectedRowKeys })
  }

  render() {
    const { taskTableSelectedRowKeys } = this.state

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
        render: text => <a href="javascript: void(0);">{text}</a>,
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
          <div className={styles.flexContainer}>
            <div className={styles.flexMainItem}>
              <div className="card">
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Whatsapp Self-Service Chatbot</strong>
                  </div>
                  <div className="utils__titleEqualDescription">
                    Vendor: ABC Engineering Private Limited.
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
            <div className={styles.flexItem}>
              <div className="card" style={{ width: '100%', marginLeft: 30 }}>
                <InfoCard />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className={styles.flexContainer}>
            <div className={styles.flexMainItem}>
              <div className="card" style={{ height: '100%' }}>
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Project Spend</strong>
                  </div>
                </div>
                <div className="card-body-custom">
                  <div className={styles.budgetContainer}>
                    <div className={styles.budgetSections}>
                      <ChartistGraph data={stackedBarData} options={stackedBarOptions} type="Bar" />
                    </div>
                    <div className={styles.budgetSections}>
                      <BudgetInfo />
                    </div>
                  </div>
                  <div className={styles.option}>
                    <div className={styles.sizes}>
                      <Tooltip placement="top" title="Size S">
                        <span className={styles.blueBackground}>Cost Type A</span>
                      </Tooltip>
                      <Tooltip placement="top" title="Size M">
                        <span className={styles.greenBackground}>Cost Type B</span>
                      </Tooltip>
                      <Tooltip placement="top" title="Size XL">
                        <span className={styles.yellowBackground}>Cost Type C</span>
                      </Tooltip>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.flexMainItem}>
              <div className="card" style={{ marginBottom: 0, marginLeft: 30, height: '100%' }}>
                <div className="card-header">
                  <div className="utils__title">
                    <strong>Features</strong>
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
          </div>
        </div>
      </Authorize>
    )
  }
}

export default ProjectView
