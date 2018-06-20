import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { fromEvent } from 'rxjs/observable/fromEvent';
import {from} from 'rxjs';

const clicks = fromEvent(document, 'click');
clicks.subscribe(
  x => console.log(x)
);

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {
  isActiveMain: boolean;
  isActiveExit: boolean;

  public smth = new Observable<string>((obs) => {
    setTimeout(() => {obs.next('someValue')}, 1000);
  });

  public observable = from([ { a: 1, b: 2 }, { c: 3 } ]);

  public anArray: Array<any> = [1, 2, 3, 4, 5];
  public anArray$ = from(this.anArray);

  constructor() { }

  ngOnInit() {
    this.isActiveMain = true;
    this.isActiveExit = false;
  }

  toggleButtonClass() {
    this.isActiveMain = !this.isActiveMain;
    this.isActiveExit = !this.isActiveExit;

    this.smth.subscribe((mess) => {console.log(mess);});
    this.observable.subscribe((zz) => {console.log(zz);});
    this.anArray$.subscribe((cc) => {console.log(cc);});
  }



}
