import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {
  someHtmlText: string;
  constructor() { }

  ngOnInit() {
    this.someHtmlText = '<b> This is </b> <i>exit page</i>';
  }

}
