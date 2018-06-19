import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { NgForm} from '@angular/forms';
import {GuardService} from '../services/guard.service';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  public code: string;
  public neededCode: string;

  constructor(private router: Router, private guardService: GuardService) { }

  ngOnInit() {
    this.neededCode = (Math.random().toString(36).substr(2, 5)).toLowerCase().substr(0, 3);
  }
  submit() {
    this.guardService.code = this.code;
    this.guardService.neededCode = this.neededCode;
    // this.code = '';

    // console.log(this.guardService.code);

    // after this peace of code guard will start work
    this.router.navigate(['/adding']);
    this.code = '';
  }
}
