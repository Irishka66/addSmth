import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {MapService} from '../../services/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor(private mapService: MapService) { }

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('markers')) !== null) {
      this.markers = JSON.parse(localStorage.getItem('markers'));
      this.mapService.markers = this.markers;
    }
  }
  zoom: number = 12;
  // initial center position for the map
  lat: number = 44.04607127363113;
  lng: number = 12.605696990932529;
  markers: marker[] = [];

  clickedMarker(marker: string, index: number) {
  }
  
  mapClicked($event: MouseEvent) {
    let id: string = (Date.now().toString(36) + Math.random().toString(36).substr(2, 5)).toUpperCase(); 
    this.markers.push({
      id: id, 
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      text: 'Nice place',
      imgShow: false,
      draggable: false,
    });
    this.mapService.markers = this.markers;
    this.mapService.saveLocalMarkers();
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    // console.log('dragEnd', m, $event);
  }

  deleteImg(i) {
    this.markers[i]['imgShow'] = false;
    this.mapService.saveLocalMarkers();
  }

  editInfoText(event, i) {
    this.markers[i]['text'] = event.srcElement.innerText;
    this.mapService.saveLocalMarkers();
  }

  readURL(event, i){
    this.markers[i]['imgShow'] = true;
    var getImagePath = URL.createObjectURL(event.target.files[0]);
    this.markers[i]['imgPath'] = getImagePath;
    this.mapService.saveLocalMarkers();
   }

  deleteMarker(i) {
    this.markers.splice(i, 1);
    this.mapService.saveLocalMarkers();
  }

  clickInfo() {
    console.log('777');
  }
}


interface marker {
  id: any;
	lat: number;
	lng: number;
  label?: string;
  text?: string;
  imgShow?: boolean;
  imgPath?: any;
	draggable: boolean;
}