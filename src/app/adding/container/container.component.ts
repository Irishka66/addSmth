import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isActiveMain: boolean;
  isActiveExit: boolean;
  constructor() { }

  ngOnInit() {
    this.isActiveMain = true;
    this.isActiveExit = false;
  }

  toggleButtonClass() {
    this.isActiveMain = !this.isActiveMain;
    this.isActiveExit = !this.isActiveExit;
  }
}
