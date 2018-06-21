import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public arrAddedText: Array<any> = [];
  public arrAddedTextCopy: Array<any> = [];
  public arrDoneRecords: Array<any> = [];

  constructor() { }

  public saveLocalRecords() {
    let localRecords = JSON.stringify(this.arrAddedTextCopy);
    localStorage.setItem('records', localRecords);
  }
  public saveLocalDoneRecords() {
    let localDoneRecords = JSON.stringify(this.arrDoneRecords);
    localStorage.setItem('doneRecords', localDoneRecords);
  }
}
