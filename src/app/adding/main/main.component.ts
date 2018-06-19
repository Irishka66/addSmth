import { Component, OnInit } from '@angular/core';
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
export class MainComponent implements OnInit {

  public addedText: string;
  public arrAddedText: Array<string> = [];
  public clicks: number = 0;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('records')) !== null) {
      this.dataService.arrAddedText = JSON.parse(localStorage.getItem('records'));
      this.arrAddedText = this.dataService.arrAddedText;
    }
  }

  add() {
    this.dataService.arrAddedText.push(this.addedText);
    this.arrAddedText = this.dataService.arrAddedText;
    this.addedText = '';
    this.dataService.saveLocalRecords();
  }

  //this function is emmited from child: list component
  printLikes(varFromChild: any){
    console.log('varFromChild ' + varFromChild);
    this.clicks++;
  }
}
