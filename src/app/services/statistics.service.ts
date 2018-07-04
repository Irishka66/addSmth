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
  resArr1: Array<any> = [];
  resArr2: Array<any> = [];
  resArr3: Array<any> = [];
  totalArr: Array<any> = [];

  constructor() { }

  public chartConfigSubject = new Subject();
  public chartConfigStream$ = this.chartConfigSubject.asObservable();

  fillChartData1(arrChart) {
    // this.resArr1 = this.fillChartData(arrChart);
    this.resArr1 = arrChart;
    this.fillTotalArr();
  }

  fillChartData2(arrChart) {
    // this.resArr2 = this.fillChartData(arrChart);
    this.resArr2 = arrChart;
    this.fillTotalArr();
  }

  fillChartData3(arrChart) {
    // this.resArr3 = this.fillChartData(arrChart);
    this.resArr3 = arrChart;
    this.fillTotalArr();
  }

  fillTotalArr() {
    this.totalArr = [this.resArr1, this.resArr2, this.resArr3];
    // console.log(totalArr);
    this.chartConfigSubject.next(this.totalArr);
  }

  // fillChartData(arrChart) {
  //   console.log(arrChart);
  //   let arrChartData: Array<any> = [];
  //   let arrChartLabels: Array<any> = [];
  //   for (let i = 0; i < arrChart.length; i++) {
  //     arrChartData.push(arrChart[i]['numberOfClicks']);
  //     let str = arrChart[i]['date'] + '';
  //     arrChartLabels.push(str);
  //   }
  //   let arr: Array<any> = [arrChartData, arrChartLabels];
  //   console.log(arr);
  //   return(arr);
  // }
}
