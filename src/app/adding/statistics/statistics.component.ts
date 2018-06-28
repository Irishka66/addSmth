import { Component, OnInit } from '@angular/core';
import {StatisticsService} from '../../services/statistics.service';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  constructor(private statisticsService: StatisticsService) { }

  ngOnInit() {
  }

  addedDay: number = 1;

  click1() {
    let obj = {
      'data': 1,
      'time': new Date(2001, 2, this.addedDay, 5)
    }
    this.statisticsService.arrClick1.push(obj);
    console.log(this.statisticsService.arrClick1);
    
    let random = Math.floor(Math.random() * 10);
    let helpRandom = random > 3 ? 0 : random;  
    this.addedDay = this.addedDay + helpRandom;
    
    this.setChartArr1();
  }

  setChartArr1() {
    let length = this.statisticsService.arrClick1.length;
    let firstDate = this.statisticsService.arrClick1[0]['time'];
    let firstYear = this.statisticsService.arrClick1[0]['time'].getFullYear();
    let firstMonth = this.statisticsService.arrClick1[0]['time'].getMonth();
    let firstDay = this.statisticsService.arrClick1[0]['time'].getDate();
   
    let lastDate = this.statisticsService.arrClick1[length - 1]['time'];
    let lastYear = this.statisticsService.arrClick1[length - 1]['time'].getFullYear();
    let lastMonth = this.statisticsService.arrClick1[length - 1]['time'].getMonth();
    let lastDay = this.statisticsService.arrClick1[length - 1]['time'].getDate();
    
    let start: any = new Date(firstYear, firstMonth, firstDay);
    let finish: any = new Date(lastYear, lastMonth, lastDay + 1);
    let period = (finish - start) / 86400000;
    
    let clicks = 0;
    let arrChart: Array<any> = [];
    let jj: number = 0;
    let j: number;

    // debugger;
    for (let i = 0; i < period; i++) {
      clicks = 0;
      for (j = jj; j < this.statisticsService.arrClick1.length; j++) {
        if (this.statisticsService.arrClick1[j]['time'] >= new Date(firstYear, firstMonth, firstDay + i) && 
            this.statisticsService.arrClick1[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 1)) {
            clicks ++;
            arrChart[i] = {
              'numberOfClicks': clicks,
              'date': new Date(firstYear, firstMonth, firstDay + i)
            }
        } else if (this.statisticsService.arrClick1[j]['time'] >= new Date(firstYear, firstMonth, firstDay + i + 1) && 
                   this.statisticsService.arrClick1[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 2)) {
                    jj = j;
                    break;
        } else {
          arrChart[i+1] = {
            'numberOfClicks': 0,
            'date': new Date(firstYear, firstMonth, firstDay + i + 1)
          };
          jj = j;
          break;
        }
      }
    }

    console.log(arrChart);
    this.statisticsService.arrChart1 = arrChart;
    this.statisticsService.fillChartData();
  }

  click2() {
    let obj = {
      'data': 1,
      'time': new Date()
    }
    this.statisticsService.arrClick2.push(obj);
    console.log(this.statisticsService.arrClick2);
  }

  click3() {
    let obj = {
      'data': 1,
      'time': new Date()
    }
    this.statisticsService.arrClick3.push(obj);
    console.log(this.statisticsService.arrClick3);
  }
}
