import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrls: ['./dynamic.component.scss']
})
export class DynamicComponent implements OnInit {
  @Input() type: string = "success";
  @Input() count: number = 8;
  constructor() { }

  ngOnInit() {
  }

}

