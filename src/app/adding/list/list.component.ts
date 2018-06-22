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
//on event that call function like() in child: the event printLikes will be emited
  like(varFromChild: any) {
    this.printLikes.emit(varFromChild);
  }

  iFromEdit: number;
  jFromEditSub: number;
  iFromEditSub: number;

  inBounds = true;
  edge = {
    top: true,
    bottom: true,
    left: true,
    right: true
  };
  movingOffset = { x: 0, y: 0 };
  endOffset = { x: 0, y: 0 };
  dragBlock: any;
  dragBlockLeft: any;
  dragBlockTransform: any;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.iFromEdit = -1;
    this.jFromEditSub = -1;
    this.iFromEditSub = -1;
    if (JSON.parse(localStorage.getItem('doneRecords')) !== null) {
      this.dataService.arrDoneRecords = JSON.parse(localStorage.getItem('doneRecords'));
    }

    // this.dragBlock = document.querySelector('.drag-block');
    // console.log(document.querySelector('.drag-block'));
    // this.dragBlockLeft = this.dragBlock.getBoundingClientRect().left;


  }

  checkEdge(event) {
    this.edge = event;
    console.log('edge:', event);
  }

  onStart(event) {
    console.log('started output:', event);
    console.log(event.style.transform);
    this.dragBlockTransform = event.style.transform;
    console.log(this.dragBlockTransform);

  }

  onStop(event) {
    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
    console.log('stopped output:', event);

    console.log('stopped output onStop:', event);
    console.log(event.style);
    console.log(event.style.transform);
    // console.log(event.style.transform);
    // console.log(getComputedStyle(event).transform);

    // var computedStyle = getComputedStyle(document.body);
  }

  onMoveEnd(event) {

    this.endOffset.x = event.x;
    this.endOffset.y = event.y;
    console.log('stopped output:', event);

    if (this.endOffset.x > -75) {
      console.log('stopped output:', event);
    }

  }
  // mouseUpDraggable() {
  //
  // }

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
    // console.log('editedRecord ' + editedRecord);
    let currentIndex = this.dataService.arrAddedText[i]['indexRecord'];
    let currentRecord = this.dataService.arrAddedText[i];
    currentRecord['text'] = editedRecord;

    this.dataService.arrAddedText.splice(i, 1, currentRecord);

    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (currentIndex === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy.splice(m, 1, currentRecord);
      }
    }

    this.iFromEdit = -1;
    this.dataService.saveLocalRecords();
  }

  addSub(i) {

    let currentIndex = this.dataService.arrAddedText[i]['indexRecord'];
    this.dataService.arrAddedText[i]['subtree'].push('');


    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (currentIndex === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy[m]['subtree'].push('');
      }
    }


    this.dataService.saveLocalRecords();
  }

  deleteSub(i, j) {
    this.dataService.arrAddedText[i]['subtree'].splice(j, 1);
    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (this.dataService.arrAddedText[i]['indexRecord'] === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy[m]['subtree'].splice(j, 1);
      }
    }

    this.dataService.saveLocalRecords();
  }

  editSub(i, j) {
    this.jFromEditSub = j;
    this.iFromEditSub = i;
  }

  blurFromSubRecord(i, j) {
    let editedSubRecord = document.getElementsByClassName("editableSub")['0'].innerText;
    let currentIndex = this.dataService.arrAddedText[i]['indexRecord'];

    this.dataService.arrAddedText[i]['subtree'].splice(j, 1, editedSubRecord);

    for (let m = 0; m < this.dataService.arrAddedTextCopy.length; m++) {
      if (currentIndex === this.dataService.arrAddedTextCopy[m]['indexRecord']) {
        this.dataService.arrAddedTextCopy[m]['subtree'].splice(j, 1, editedSubRecord);
      }
    }

    console.log('arrAddedText');
    console.log(this.dataService.arrAddedText);
    console.log('arrAddedTextCopy');
    console.log(this.dataService.arrAddedTextCopy);


    this.jFromEditSub = -1;
    this.dataService.saveLocalRecords();
  }
}
