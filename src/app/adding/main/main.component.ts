import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  public addedText: string;
  public clicks: number = 0;
  public searchText: string;

  constructor(private dataService: DataService) {
    // window.onbeforeunload = (e) => {
    //   console.log('onbeforeunload');
    //   this.clearSearchText();
    // };
  }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('records')) !== null) {
      this.dataService.arrAddedText = JSON.parse(localStorage.getItem('records'));
      this.dataService.arrAddedTextCopy = JSON.parse(localStorage.getItem('records'));
    }
  }

  add() {
    this.clearSearchText();
    let indexRecord: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase();
    let obj = {
      'indexRecord': indexRecord,
      'text': this.addedText
    };
    this.dataService.arrAddedText.push(obj);
    this.dataService.arrAddedTextCopy.push(obj);
    this.addedText = '';
    this.dataService.saveLocalRecords();


    this.dataService.arrAddedTextCopy = JSON.parse(JSON.stringify(this.dataService.arrAddedText));

  }

  search(searchText) {
    this.dataService.arrAddedText = this.dataService.arrAddedText.filter(function(item) {
      return (item['text'].toString().toLowerCase().includes(searchText.toLowerCase()));
    });
  }

  clearSearchText() {
    this.searchText = '';
    this.dataService.arrAddedText = JSON.parse(JSON.stringify(this.dataService.arrAddedTextCopy));
    // this.dataService.arrAddedText = this.dataService.arrAddedTextCopy;
    this.dataService.saveLocalRecords();
  }

  //this function is emitted from child: list component
  printLikes(varFromChild: any){
    console.log('varFromChild ' + varFromChild);
    this.clicks++;
  }

  ngOnDestroy() {
    this.clearSearchText();
  }

}
