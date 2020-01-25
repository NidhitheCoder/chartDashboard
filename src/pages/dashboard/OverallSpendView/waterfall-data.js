// https://canvasjs.com/docs/charts/chart-options/

const baseData = {
  type: 'waterfall',
  indexLabelOrientation: 'horizontal',
  indexLabelPlacement: 'outside',
  horizontalAlign: 'left',
  risingColor: '#0190fe',
  fallingColor: '#46be8a',
  lineColor: '#ffffff',
  // dataPointWidth: 20,
  indexLabelFontSize: 12,
  indexLabel: '{y}',
  indexLabelFontFamily: 'Roboto Condensed',
  indexLabelFontWeight: 100,
  dataPoints: [
    { label: 'Total', y: 460 },
    { label: 'Marketing', y: -78 },
    { label: 'Sales', y: -60 },
    { label: 'Finance', y: -90 },
    { label: 'HCM', y: -81 },
    { label: 'Network', y: -24 },
    { label: 'P & T', y: -54 },
    { label: 'CEO Office', y: -20 },
    { label: 'IT', y: -50 },
  ],
}

export const waterfallChartData = {
  animationEnabled: true,
  animationDuration: 800,
  exportEnabled: false,
  backgroundColor: '#fff',
  theme: 'light1',
  title: {
    text: 'Capex- Cat A',
    fontSize: 18,
    padding: 10,
    fontFamily: 'Roboto Condensed',
    fontWeight: '100',
    horizontalAlign: 'right',
  },
  axisX: {
    title: 'Departments',
    titleFontSize: 16,
    labelFontSize: 12,
    titleFontFamily: 'Roboto Condensed',
    // lableAutoFit: true,
    labelAngle: 0,
    labelFontColor: '#666',
    lineColor: '#ddd',
  },
  axisY: {
    title: 'Spend',
    titleFontSize: 16,
    valueFormatString: '#,##0.##M',
    labelFontSize: 12,
    titleFontFamily: 'Roboto Condensed',
    labelFontColor: '#666',
    gridColor: '#fff',
    lineColor: '#ddd',
  },
  toolTip: {
    shared: true,
    contentFormatter: e => {
      const multiplier = e.entries[0].dataPoint.label === 'Total' ? 1 : -1
      return `${e.entries[0].dataPoint.label} ${e.entries[0].dataPoint.y * multiplier} M$`
    },
  },
  data: [{ ...baseData }],
}

const chart1 = { ...waterfallChartData }
const chart2 = {
  ...waterfallChartData,
  title: {
    ...waterfallChartData.title,
    text: 'Capex- Cat B',
  },
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 770 },
        { label: 'Marketing', y: -48 },
        { label: 'Sales', y: -40 },
        { label: 'Finance', y: -170 },
        { label: 'HCM', y: -71 },
        { label: 'Network', y: -124 },
        { label: 'P & T', y: -44 },
        { label: 'CEO Office', y: -120 },
        { label: 'IT', y: -140 },
      ],
    },
  ],
}
const chart3 = {
  ...waterfallChartData,
  title: {
    ...waterfallChartData.title,
    text: 'Capex- Cat C',
  },
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 860 },
        { label: 'Marketing', y: -78 },
        { label: 'Sales', y: -110 },
        { label: 'Finance', y: -270 },
        { label: 'HCM', y: -80 },
        { label: 'Network', y: -120 },
        { label: 'P & T', y: -80 },
        { label: 'CEO Office', y: -70 },
        { label: 'IT', y: -50 },
      ],
    },
  ],
}
const chart4 = {
  ...waterfallChartData,
  title: {
    ...waterfallChartData.title,
    text: 'Capex- Cat D',
  },
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 860 },
        { label: 'Marketing', y: -278 },
        { label: 'Sales', y: -60 },
        { label: 'Finance', y: -90 },
        { label: 'HCM', y: -81 },
        { label: 'Network', y: -124 },
        { label: 'P & T', y: -54 },
        { label: 'CEO Office', y: -120 },
        { label: 'IT', y: -50 },
      ],
    },
  ],
}

export const chartsData = [chart1, chart2, chart3, chart4]

export default waterfallChartData
