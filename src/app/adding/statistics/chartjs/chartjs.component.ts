import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../../services/statistics.service';

@Component({
  selector: 'app-chartjs',
  templateUrl: './chartjs.component.html',
  styleUrls: ['./chartjs.component.scss']
})
export class ChartjsComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
    this.statisticsService.chartConfigStream$.subscribe((arr) => {
      this.chartData = [
        { data: arr[0], label: 'Click 1' },
      ];
      this.chartLabels = arr[1];
      console.log(arr[1]);
      // this.chartLabels = ['Thu Mar 01 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Fri Mar 02 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sat Mar 03 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sun Mar 04 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Mon Mar 05 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Tue Mar 06 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Wed Mar 07 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Thu Mar 08 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Fri Mar 09 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sat Mar 10 2001 00:00:00 GMT+0300 (Belarus Standard Time)'];

      // console.log(this.chartLabels);
    });

  }

  chartOptions = {
    responsive: true,
    scales: {
        xAxes: [{
            type: 'time',
            time: {
                unit: 'day',
                unitStepSize: 1,
                displayFormats: {
                    'day': 'MMM DD'
                }
            }
        }]
      }
  };

  // chartLabels = ["Thu Mar 01 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Fri Mar 02 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Sat Mar 03 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Sun Mar 04 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Mon Mar 05 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Tue Mar 06 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Wed Mar 07 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Thu Mar 08 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Fri Mar 09 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Sat Mar 10 2001 00:00:00 GMT+0300 (Belarus Standard Time)"];

  // chartLabels = ["Thu Mar 01 2001 00:00:00 GMT+0300 (Belarus Standard Time)"];

  // chartLabels = ["a", "z", "x", "f"];
  chartData: Array<any> = [
    { data: [], label: 'Click 1' },
  ];
  chartLabels: Array<any> = [];

  onChartClick(event) {
    console.log(event);
  }

}
