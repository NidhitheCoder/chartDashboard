// https://canvasjs.com/docs/charts/chart-options/

const baseData = {
  type: 'waterfall',
  yValueFormatString: '$',
  indexLabelOrientation: 'vertical',
  fallingColor: '#58a7be',
  risingColor: '#4c83cf',
  dataPoints: [
    { label: 'Total', y: 4.63 },
    { label: 'Marketing', y: -0.78 },
    { label: 'Sales', y: -0.6 },
    { label: 'Finance', y: -0.9 },
    { label: 'HCM', y: -0.81 },
    { label: 'Network', y: -0.24 },
    { label: 'P & T', y: -0.54 },
    { label: 'CEO Office', y: -0.2 },
    { label: 'IT', y: -0.5 },
  ],
}

export const waterfallChartData = {
  animationEnabled: true,
  animationDuration: 800,
  exportEnabled: false,
  backgroundColor: '#fff',
  theme: 'light2',
  title: {
    text: '',
    fontSize: 20,
    padding: 10,
    fontFamily: 'Nunito Sans',
    fontWeight: 'bolder',
  },
  axisX: {
    title: 'Business Units',
    titleFontSize: 16,
    labelFontSize: 12,
    titleFontFamily: 'Nunito Sans',
    labelFontFamily: 'Nunito Sans',
    labelAngle: -45,
    labelFontColor: '#666',
  },
  axisY: {
    title: 'Spend',
    titleFontSize: 16,
    valueFormatString: '#,##0.##M',
    labelFontSize: 12,
    labelFontFamily: 'Nunito Sans',
    titleFontFamily: 'Nunito Sans',
    labelFontColor: '#666',
    gridColor: '#ddd',
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
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 7.7 },
        { label: 'Marketing', y: -0.48 },
        { label: 'Sales', y: -0.4 },
        { label: 'Finance', y: -1.7 },
        { label: 'HCM', y: -0.71 },
        { label: 'Network', y: -1.24 },
        { label: 'P & T', y: -0.44 },
        { label: 'CEO Office', y: -1.2 },
        { label: 'IT', y: -1.4 },
      ],
    },
  ],
}
const chart3 = {
  ...waterfallChartData,
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 15.98 },
        { label: 'Marketing', y: -2.8 },
        { label: 'Sales', y: -1.1 },
        { label: 'Finance', y: -2.7 },
        { label: 'HCM', y: -0.8 },
        { label: 'Network', y: -1.2 },
        { label: 'P & T', y: -0.8 },
        { label: 'CEO Office', y: -0.7 },
        { label: 'IT', y: -5.5 },
      ],
    },
  ],
}
const chart4 = {
  ...waterfallChartData,
  data: [
    {
      ...baseData,
      dataPoints: [
        { label: 'Total', y: 8.78 },
        { label: 'Marketing', y: -2.78 },
        { label: 'Sales', y: -0.6 },
        { label: 'Finance', y: -0.9 },
        { label: 'HCM', y: -0.81 },
        { label: 'Network', y: -1.24 },
        { label: 'P & T', y: -0.54 },
        { label: 'CEO Office', y: -1.2 },
        { label: 'IT', y: -0.5 },
      ],
    },
  ],
}

export const chartsData = [
  { title: 'CAPEX - Category A', chartData: chart1 },
  { title: 'CAPEX - Category B', chartData: chart2 },
  { title: 'OPEX - Category A', chartData: chart3 },
  { title: 'OPEX - Category B', chartData: chart4 },
]

export const statsData = [
  {
    title: 'Total Projects',
    amount: '354',
    chartProps: {
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
    },
  },
  {
    title: 'Total Capex',
    amount: '$38.24 M',
    chartProps: {
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
    },
  },
  {
    title: 'Total Opex',
    amount: '$4.9 M',
    chartProps: {
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
    },
  },
]

export default chartsData
