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
    this.chartData = [
      { data: this.statisticsService.totalArr[0] || [], label: 'Click 1' },
      { data: this.statisticsService.totalArr[1] || [], label: 'Click 2' },
      { data: this.statisticsService.totalArr[2] || [], label: 'Click 3' },
    ];

    this.statisticsService.chartConfigStream$.subscribe((totalArr) => {
          this.chartData = [
            { data: totalArr[0], label: 'Click 1' },
            { data: totalArr[1], label: 'Click 2' },
            { data: totalArr[2], label: 'Click 3' },
          ];

      // setTimeout(() => {
      //   let dateStart: Array<any>= [];
      //   let dateFinish: Array<any>= [];
      //   for (let j = 0; j < 3; j++) {
      //     if (totalArr[j][1]) {
      //       dateStart[j] = totalArr[j][1][0];
      //       dateFinish[j] = totalArr[j][1][totalArr[j][1].length - 1];
      //     } else {
      //       dateStart[j] = 0;
      //       dateFinish[j] = 0;
      //     }
      //   }
      //   let dateStartFilter: Array<any>= [];
      //   let dateFinishFilter: Array<any>= [];
      //   dateStartFilter = dateStart.filter((item) => {
      //     return item !== 0;
      //   });
      //   dateFinishFilter = dateFinish.filter((item) => {
      //     return item !== 0;
      //   });
      //   console.log(dateStartFilter);
      //   console.log(dateFinishFilter);
      //   let minDateStart: any = new Date(dateStartFilter[0]);
      //   for (let i = 1; i < dateStartFilter.length; i++) {
      //     if (new Date(dateStartFilter[i]) < minDateStart) {
      //       minDateStart = new Date(dateStartFilter[i]);
      //     } 
      //   }
      //   let maxDateFinish: any = new Date(dateFinishFilter[0]);
      //   for (let k = 1; k < dateFinishFilter.length; k++) {
      //     if (new Date(dateFinishFilter[k]) > maxDateFinish) {
      //       maxDateFinish = new Date(dateFinishFilter[k]);
      //     } 
      //   }
      //   console.log(minDateStart);
      //   console.log(maxDateFinish);
      //   let totalPeriod: any = (maxDateFinish - minDateStart)/86400000 + 1;
      //   console.log(totalPeriod);
      //   let totalLabels: Array<any> = [];
      //   for (let j =0; j < totalPeriod; j++) {
      //     totalLabels.push(minDateStart);
      //     let year = minDateStart.getFullYear();
      //     let month = minDateStart.getMonth();
      //     let day = minDateStart.getDate();
      //     minDateStart = new Date(year, month, day + 1);
      //   }
      //   console.log(totalLabels);
      //   this.chartLabels = totalLabels;
      // }, 50);
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
                  'millisecond': 'MMM DD',
                  'second': 'MMM DD',
                  'minute': 'MMM DD',
                  'hour': 'MMM DD',
                  'day': 'MMM DD',
                  'week': 'MMM DD',
                  'month': 'MMM DD',
                  'quarter': 'MMM DD',
                  'year': 'MMM DD',
                }
            }
        }]
      }
  };

  chartData: Array<any> = [
    { data: [], label: 'Click 1' },
    { data: [], label: 'Click 2' },
    { data: [], label: 'Click 3' },
  ];
  chartLabels: Array<any> = [];

  onChartClick(event) {
    console.log(event);
  }

}
