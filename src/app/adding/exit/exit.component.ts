import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpService} from '../../services/http.service';
import { Observable, throwError } from 'rxjs';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.scss']
})
export class ExitComponent implements OnInit {
  someHtmlText: string;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit() {
    this.someHtmlText = '<b> This is </b> <i>exit page</i>';
  }

  exit() {
    this.router.navigate(['/']);
  }


  postRequestToRmsys() {
    this.httpService.postRequestToRmsys().subscribe(result => console.log(result));;
  }
}
