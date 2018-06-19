import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {
  someHtmlText: string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.someHtmlText = '<b> This is </b> <i>exit page</i>';
  }

  exit() {
    this.router.navigate(['/']);
  }
}
