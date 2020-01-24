// https://canvasjs.com/docs/charts/chart-options/

export const waterfallChartData = {
  animationEnabled: true,
  exportEnabled: false,
  backgroundColor: '#fffcf5',
  title: {
    text: 'Capex- Cat A',
    fontSize: 20,
    padding: 10,
  },
  axisX: {
    title: 'Departments',
    margin: 5,
    titleFontSize: 16,
    labelFontSize: 12,
  },
  axisY: {
    title: 'Spend',
    margin: 15,
    titleFontSize: 16,
    valueFormatString: '#,##0.##M',
    labelFontSize: 12,
  },
  data: [
    {
      type: 'waterfall',
      yValueFormatString: '$',
      indexLabelOrientation: 'vertical',
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
    },
  ],
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
      type: 'waterfall',
      yValueFormatString: '$',
      indexLabelOrientation: 'vertical',
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
      type: 'waterfall',
      yValueFormatString: '$',
      indexLabelOrientation: 'vertical',
      dataPoints: [
        { label: 'Total', y: 860 },
        { label: 'Marketing', y: -78 },
        { label: 'Sales', y: -110 },
        { label: 'Finance', y: -270 },
        { label: 'HCM', y: -81 },
        { label: 'Network', y: -124 },
        { label: 'P & T', y: -84 },
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
      type: 'waterfall',
      yValueFormatString: '$',
      indexLabelOrientation: 'vertical',
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
