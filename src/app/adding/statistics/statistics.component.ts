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

  help: number = 1;
  addedDay: number = 1;

  click1() {
    let obj = {
      'data': 1,
      'time': new Date(2001, 2, this.addedDay, 5)
    }
    this.statisticsService.arrClick1.push(obj);
    console.log(this.statisticsService.arrClick1);
    // this.help = this.help + 2;
    

    let random = Math.floor(Math.random() * 10);
    let helpRandom = random > 3 ? 0 : random;  
    console.log('helpRandom ' + helpRandom);
    this.addedDay = this.addedDay + helpRandom;
    console.log('addedDay ' + helpRandom);
    this.setChartArr1();
  }

  setChartArr1() {
    let length = this.statisticsService.arrClick1.length;
    let firstDate = this.statisticsService.arrClick1[0]['time'];
    let firstYear = this.statisticsService.arrClick1[0]['time'].getFullYear();
    let firstMonth = this.statisticsService.arrClick1[0]['time'].getMonth();
    let firstDay = this.statisticsService.arrClick1[0]['time'].getDate();
    console.log('firstDate ' + firstDate);
    // console.log(firstYear);
    // console.log(firstMonth);
    // console.log(firstDay);
    let lastDate = this.statisticsService.arrClick1[length - 1]['time'];
    let lastYear = this.statisticsService.arrClick1[length - 1]['time'].getFullYear();
    let lastMonth = this.statisticsService.arrClick1[length - 1]['time'].getMonth();
    let lastDay = this.statisticsService.arrClick1[length - 1]['time'].getDate();
    console.log('lastDate ' + lastDate);
    // console.log(lastYear);
    // console.log(lastMonth);
    // console.log(lastDay);
    
    let start = new Date(firstYear, firstMonth, firstDay);
    console.log('start ' + start);
    let finish = new Date(lastYear, lastMonth, lastDay + 1);
    console.log('finish ' + finish);
    let period = (finish - start) / 86400000;
    console.log('period ' + period);
    
    // let i = 0;
    let clicks = 0;
    let arrChart: Array<any> = [];
    let jj: number = 0;
    let j: number;

    // debugger;
    for (let i = 0; i < period; i++) {
      clicks = 0;
      for (j = jj; j < this.statisticsService.arrClick1.length; j++) {
        if (this.statisticsService.arrClick1[j]['time'] > new Date(firstYear, firstMonth, firstDay + i) && 
            this.statisticsService.arrClick1[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 1)) {
            clicks ++;
            arrChart[i] = {
              'numberOfClicks': clicks,
              'date': new Date(firstYear, firstMonth, firstDay + i)
            }
        } else if (this.statisticsService.arrClick1[j]['time'] > new Date(firstYear, firstMonth, firstDay + i + 1) && 
                   this.statisticsService.arrClick1[j]['time'] < new Date(firstYear, firstMonth, firstDay + i + 2)) {


                    jj = j;
                    break;
        } else {
          arrChart[i+1] = {
            'numberOfClicks': 0,
            'date': new Date(firstYear, firstMonth, firstDay + i)
          };
          i++;
          jj = j;
          break;
        }
      
      
      
      }

    }

  console.log(arrChart);
    
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
