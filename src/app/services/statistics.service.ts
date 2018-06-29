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
  arrChart2: Array<any> = [];
  arrChart3: Array<any> = [];

  resArr1: Array<any> = [];
  resArr2: Array<any> = [];
  resArr3: Array<any> = [];

  constructor() { }

  public chart1ConfigSubject = new Subject();
  public chart1ConfigStream$ = this.chart1ConfigSubject.asObservable();

  public chart2ConfigSubject = new Subject();
  public chart2ConfigStream$ = this.chart2ConfigSubject.asObservable();

  public chart3ConfigSubject = new Subject();
  public chart3ConfigStream$ = this.chart3ConfigSubject.asObservable();

  public chartConfigSubject = new Subject();
  public chartConfigStream$ = this.chartConfigSubject.asObservable();

  fillChartData1(arrChart) {
    this.resArr1 = this.fillChartData(arrChart);
    // this.chart1ConfigSubject.next(this.resArr1);
    this.fillTotalArr();
  }

  fillChartData2(arrChart) {
    this.resArr2 = this.fillChartData(arrChart);
    // this.chart1ConfigSubject.next(this.resArr2);
    this.fillTotalArr();
  }

  fillChartData3(arrChart) {
    this.resArr3 = this.fillChartData(arrChart);
    // this.chart1ConfigSubject.next(this.resArr3);
    this.fillTotalArr();
  }

  fillTotalArr() {
    let totalArr = [this.resArr1, this.resArr2, this.resArr3];
    console.log(totalArr);
    this.chartConfigSubject.next(totalArr);
  }

  fillChartData(arrChart) {
    console.log(arrChart.length);
    let arrChartData: Array<any> = [];
    let arrChartLabels: Array<any> = [];
    for (let i = 0; i < arrChart.length; i++) {
      arrChartData.push(arrChart[i]['numberOfClicks']);
      let str = arrChart[i]['date'] + '';
      arrChartLabels.push(str);
    }
    let arr: Array<any> = [arrChartData, arrChartLabels];
    console.log(arr);
    return(arr);
  }
}
