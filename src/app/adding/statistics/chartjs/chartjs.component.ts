import { Component, OnInit } from '@angular/core';
// import * as chartsData from './chartjs';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  chartOptions = {
    responsive: true,
    scales: {
        // yAxes: [{
        //   ticks: {
        //     beginAtZero: true,
        //     callback: label => `${label}%`
        //   }
        // }],
        xAxes: [{
            // type: 'time',
            // time: {
            //     unit: 'day',
            //     unitStepSize: 1,
            //     displayFormats: {
            //         'day': 'MMM DD'
            //     }
            // }
        }]
      }
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Click 1' },
    { data: [120, 455, 100, 340], label: 'Click 2' },
    { data: [45, 67, 800, 500], label: 'Click 3' }
  ];

  chartLabels = ['January', 'February', 'March', 'April'];

  onChartClick(event) {
    console.log(event);
  }

}
