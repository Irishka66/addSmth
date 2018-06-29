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
    this.statisticsService.chartConfigStream$.subscribe((totalArr) => {
      setTimeout(() => {
        this.chartData = [
          { data: totalArr[0][0] || [], label: 'Click 1' },
          { data: totalArr[1][0] || [], label: 'Click 2' },
          { data: totalArr[2][0] || [], label: 'Click 3' },
        ];
      }, 50);
      setTimeout(() => {

        let dateStart1: any = totalArr[0][1] ? new Date(totalArr[0][1][0]) : '';
        let dateFinish1: any = totalArr[0][1] ? new Date(totalArr[0][1][totalArr[0][1].length - 1]) : '';
        console.log(dateStart1);
        console.log(dateFinish1);
        let dateStart2: any = totalArr[1][1] ? new Date(totalArr[1][1][0]) : '';
        let dateFinish2: any = totalArr[1][1] ? new Date(totalArr[1][1][totalArr[1][1].length - 1]) : '';
        console.log(dateStart2);
        console.log(dateFinish2);
        let dateStart3: any = totalArr[2][1] ? new Date(totalArr[2][1][0]) : '';
        let dateFinish3: any = totalArr[2][1] ? new Date(totalArr[2][1][totalArr[2][1].length - 1]) : '';
        console.log(dateStart3);
        console.log(dateFinish3);

        // var dateFinish1: any = new Date("Fri Mar 02 2001 00:00:00 GMT+0300 (Belarus Standard Time)");
        // console.log(dateStart1);
        // console.log(date2);
        // console.log((date2 - date1)/86400000);
        let min: any;
        let max: any;

        for (let j = 0; j < 2; j++) {
          if (!totalArr[j][1]) {
            continue;
          }
          let dateStart01 = new Date(totalArr[j][1][0]);
          let dateFinish01 = new Date(totalArr[j][1][totalArr[j][1].length - 1]);
          if (!totalArr[j + 1][1]) {
            min = dateStart01;
            max = dateFinish01;
            continue;
          }
          // let dateStart01 = new Date(totalArr[j][1][0]);
          let dateStart02 = new Date(totalArr[j + 1][1][0]);
          if (dateStart01 < dateStart02) {
            min = dateStart01;
          } else {
            min = dateStart02;
          }

          // let dateFinish01 = new Date(totalArr[j][1][totalArr[j][1].length - 1]);
          let dateFinish02 = new Date(totalArr[j + 1][1][totalArr[j + 1][1].length - 1]);
          if (dateFinish01 > dateFinish02) {
            max = dateFinish01;
          } else {
            max = dateFinish02;
          }
        }

        console.log('min ' + min);
        console.log('max ' + max);


        // let minDate: any = new Date(Math.min(dateStart1, dateStart2, dateStart3));
        // let maxDate: any = new Date(Math.max(dateFinish1, dateFinish2, dateFinish3));
        // console.log('min ' + minDate);
        // console.log('max ' + maxDate);

        // let totalPeriod: any = (maxDate - minDate)/86400000 + 1;
        // console.log(totalPeriod);
        // let totalLabels: Array<any> = [];

        // for (let j =0; j < totalPeriod; j++) {
        //   totalLabels.push(minDate);

        //   let year = minDate.getFullYear();
        //   let month = minDate.getMonth();
        //   let day = minDate.getDate();

        //   minDate = new Date(year, month, day + 1);
        //   console.log(totalLabels);
        // }



        this.chartLabels = ["Thu Mar 01 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Fri Mar 02 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Sat Mar 03 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Sun Mar 04 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Mon Mar 05 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Tue Mar 06 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Wed Mar 07 2001 00:00:00 GMT+0300 (Belarus Standard Time)", "Thu Mar 08 2001 00:00:00 GMT+0300 (Belarus Standard Time)"];
      }, 50);
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
