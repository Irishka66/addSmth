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

  addedDay1: number = 1;
  addedDay2: number = 4;
  addedDay3: number = 7;

  click1() {
    let obj = {
      'data': 1,
      'time': new Date(2001, 2, this.addedDay1, 5)
    }
    this.statisticsService.arrClick1.push(obj);
    
    let random = Math.floor(Math.random() * 10);
    let helpRandom = random > 5 ? 0 : random;  
    this.addedDay1 = this.addedDay1 + helpRandom;
    
    let arrChart = this.setChartArr(this.statisticsService.arrClick1);
    this.statisticsService.fillChartData1(arrChart);
  }
  click2() {
    let obj = {
      'data': 1,
      'time': new Date(2001, 2, this.addedDay2, 5)
    }
    this.statisticsService.arrClick2.push(obj);
    
    let random = Math.floor(Math.random() * 10);
    let helpRandom = random > 5 ? 0 : random;  
    this.addedDay2 = this.addedDay2 + helpRandom;

    let arrChart = this.setChartArr(this.statisticsService.arrClick2);
    this.statisticsService.fillChartData2(arrChart);
    
  }

  click3() {
    let obj = {
      'data': 1,
      'time': new Date(2001, 2, this.addedDay3, 5)
    }
    this.statisticsService.arrClick3.push(obj);
    
    let random = Math.floor(Math.random() * 10);
    let helpRandom = random > 5 ? 0 : random;  
    this.addedDay3 = this.addedDay3 + helpRandom;
    
    let arrChart = this.setChartArr(this.statisticsService.arrClick3);
    this.statisticsService.fillChartData3(arrChart);
}

  setChartArr(arrClick: Array<any>) {
    let length = arrClick.length;
    let firstDate = arrClick[0]['time'];
    let firstYear = arrClick[0]['time'].getFullYear();
    let firstMonth = arrClick[0]['time'].getMonth();
    let firstDay = arrClick[0]['time'].getDate();
   
    let lastDate = arrClick[length - 1]['time'];
    let lastYear = arrClick[length - 1]['time'].getFullYear();
    let lastMonth = arrClick[length - 1]['time'].getMonth();
    let lastDay = arrClick[length - 1]['time'].getDate();
    
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
      for (j = jj; j < arrClick.length; j++) {
        if (arrClick[j]['time'] >= new Date(firstYear, firstMonth, firstDay + i) && 
        arrClick[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 1)) {
            clicks ++;
            arrChart[i] = {
              'numberOfClicks': clicks,
              'date': new Date(firstYear, firstMonth, firstDay + i)
            }
        } else if (arrClick[j]['time'] >= new Date(firstYear, firstMonth, firstDay + i + 1) && 
                   arrClick[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 2)) {
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
    return arrChart;
  }

  

  

}
