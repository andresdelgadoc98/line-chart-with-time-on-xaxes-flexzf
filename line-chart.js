import React, { Component } from 'react';
import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { ChartColors } from './chart-data';

export default class LineChart extends Component {
  state = {
    igGPositive: [
      {
        x: new Date('2020-04-16'),
        y: 1,
      },
      {
        x: new Date('2020-04-27'),
        y: 1,
      },
      {
        x: new Date(),
        y: 4,
      },
    ],
    igMPositive: [
      {
        x: new Date('2020-07-16'),
        y: 1,
      },
      {
        x: new Date('2020-04-27'),
        y: 1,
      },
      {
        x: new Date(),
        y: 1,
      },
    ],
    negative: [
      {
        x: new Date('2020-04-10'),
        y: 5,
      },
      {
        x: new Date('2020-04-21'),
        y: 7,
      },
      {
        x: new Date(),
        y: 3,
      },
    ],
  };
  render() {
    const data = {
      datasets: [
        {
          label: 'ig-G Positive',
          fill: false,
          lineTension: 0.2,
          backgroundColor: ChartColors.igGPositive,
          borderColor: ChartColors.igGPositive,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: ChartColors.igGPositive,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: ChartColors.igGPositive,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: this.state.igGPositive,
        },
        {
          label: 'ig-M Positive',
          fill: false,
          lineTension: 0.2,
          backgroundColor: ChartColors.igMPositive,
          borderColor: ChartColors.igMPositive,
          borderDash: [],
          borderDashOffset: 0.0,
          pointBorderColor: ChartColors.igMPositive,
          pointBackgroundColor: '#fff',
          pointBorderWidth: 1,
          pointHoverRadius: 5,
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: ChartColors.igMPositive,
          pointHoverBorderWidth: 2,
          pointRadius: 4,
          pointHitRadius: 10,
          data: this.state.igMPositive,
        },
      ],
    };

    const lineOptions = {
      scales: {
        xAxes: [
          {
            type: 'time',
            time: {
              unit: 'day',
              tooltipFormat: 'lll',
            },
            gridLines: {
              display: true,
            },
            ticks: {
              maxTicksLimit: 31,
            },
          },
        ],
        yAxes: [
          {
            // stacked: true,
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              display: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
      },
    };
    return <Line data={data} options={lineOptions} />;
  }
}
