import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import {DataService} from '../../services/data.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() records: Array<string>;
  @Output() printLikes = new EventEmitter<any>();
  public iFromEdit: number;

  //on event that call function like() in child: the event printLikes will be emited
  like(varFromChild: any) {
    this.printLikes.emit(varFromChild);
  }

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.iFromEdit = -1;
    if (JSON.parse(localStorage.getItem('doneRecords')) !== null) {
      this.dataService.arrDoneRecords = JSON.parse(localStorage.getItem('doneRecords'));
    }
  }

  done(i) {
    let doneRecord = this.dataService.arrAddedText.splice(i, 1);
    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (doneRecord[0]['indexRecord'] === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy.splice(m, 1);
      }
    }

    this.iFromEdit = -1;
    this.dataService.saveLocalRecords();

    this.dataService.arrDoneRecords.push(doneRecord[0]);
    this.dataService.saveLocalDoneRecords();
  }

  deleteRecord(i) {
    let deleted = this.dataService.arrAddedText.splice(i, 1);
    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (deleted[0]['indexRecord'] === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy.splice(m, 1);
      }
    }
    this.dataService.saveLocalRecords();
  }

  deleteDoneRecord(i) {
    this.dataService.arrDoneRecords.splice(i, 1);
    this.dataService.saveLocalDoneRecords();
  }

  // we should edit only one record that we choose, so the attribute 'contenteditable' will be true only when iFromEdit == i in li in template
  edit(i) {
    this.iFromEdit = i;
  }

  blurFromRecord(i) {
    let editedRecord = document.getElementsByClassName("editable")['0'].innerText;
    let currentIndex = this.dataService.arrAddedText[i]['indexRecord'];

    this.dataService.arrAddedText.splice(i, 1, {'indexRecord': currentIndex, 'text': editedRecord});

    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (currentIndex === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy.splice(m, 1, {'indexRecord': currentIndex, 'text': editedRecord});
      }
    }

    this.iFromEdit = -1;
    this.dataService.saveLocalRecords();
  }

}
