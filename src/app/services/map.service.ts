import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  constructor() { }

  public markers: Array<any> = [];

  public saveLocalMarkers() {
    let localMarkers = JSON.stringify(this.markers);
    localStorage.setItem('markers', localMarkers);
  }
}
