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
  }

  delete(i) {
    this.dataService.arrAddedText.splice(i, 1);
    // console.log(this.dataService.arrAddedText);
    this.iFromEdit = -1;
  }

  // we should edit only one record that we choose, so the attribute 'contenteditable' will be true only when iFromEdit == i in li in template
  edit(i) {
    this.iFromEdit = i;
  }

  blurFromRecord(i) {
    let editedRecord = document.getElementsByClassName("editable")['0'].innerText;
    this.dataService.arrAddedText.splice(i, 1, editedRecord);
    this.iFromEdit = -1;
  }

}
