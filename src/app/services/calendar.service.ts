import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  events: Array<any> = [];
  constructor() { }

  public saveLocalEvents() {
    let localEvents = JSON.stringify(this.events);
    localStorage.setItem('events', localEvents);
  }
}
