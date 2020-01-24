const waterfallChartData3 = {
  animationEnabled: true,
  exportEnabled: false,
  title: {
    text: 'Opex- Devt',
  },
  axisY: {
    valueFormatString: '$#,##0,.K',
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

export default waterfallChartData3
