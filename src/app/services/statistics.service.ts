import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {
  arrClick1: Array<any> = [];
  arrClick2: Array<any> = [];
  arrClick3: Array<any> = [];

  arrChart1: Array<any> = [];
  arrChartData: Array<any> = [];
  arrChartLabels: Array<any> = [];

  // chartData: Array<any> = [];
  // chartLabels: Array<any> = [];

  // flag: boolean = true;

  constructor() { }

  // chartData = [
  //   { data: [2, 3], label: 'Click 1' }
  // ];

  // chartLabels: Array<any> = ['may', 'june'];

  public chartConfigSubject = new Subject();
  public chartConfigStream$ = this.chartConfigSubject.asObservable();

  // this method controls changes in edit.component
  public setConfigStyle(objEdits) {
    this.chartConfigSubject.next(objEdits);
  }

  fillChartData() {
    this.arrChartData = [];
    this.arrChartLabels = [];
    for (let i = 0; i < this.arrChart1.length; i++) {
      this.arrChartData.push(this.arrChart1[i]['numberOfClicks']);
      let str = this.arrChart1[i]['date'] + '';
      this.arrChartLabels.push(str);
    }
    console.log(this.arrChartData);
    console.log(this.arrChartLabels);

    let arr: Array<any> = [this.arrChartData, this.arrChartLabels];
    console.log(arr);

    this.chartConfigSubject.next(arr);

    // this.chartData = [
    //   { data: this.arrChartData, label: 'Click 1' }
    // ];
    // this.chartLabels = this.arrChartLabels;
    // this.chartData = [
    //   { data: [6, 1, 0, 0, 3, 1, 0, 4, 0, 2], label: 'Click 1' }
    // ];
    // this.chartLabels = ['Thu Mar 01 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Fri Mar 02 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sat Mar 03 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sun Mar 04 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Mon Mar 05 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Tue Mar 06 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Wed Mar 07 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Thu Mar 08 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Fri Mar 09 2001 00:00:00 GMT+0300 (Belarus Standard Time)', 'Sat Mar 10 2001 00:00:00 GMT+0300 (Belarus Standard Time)'];

    // console.log(this.chartData);

    // console.log(this.flag);
    // this.flag = !this.flag;
  }
}
