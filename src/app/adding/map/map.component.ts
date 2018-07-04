import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  zoom: number = 12;
  
  // initial center position for the map
  lat: number = 44.04607127363113;
  lng: number = 12.605696990932529;

  description: Array<any> = [];
  markers: marker[] = [];

  imgShow: Array<any> = [];

  clickedMarker(marker: string, index: number) {
    console.log(marker);
    console.log(index);
    // console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      // label: 'A',
      draggable: false,
    });
    this.description.push({
      'text': 'smth',
    })
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  addImg(i) {
    this.imgShow[i] = true;
  }

  saveDescrChanges(event, i) {
    let descrCurrent = document.getElementsByClassName("agm-info-window-text")[0].innerHTML;
    this.description[i]['text'] = descrCurrent;
    console.log(this.description[i]['text']);
    console.log('i = ' + i);
  }

  deleteDescr(i) {
    this.description.splice(i, 1);
    this.markers.splice(i, 1);
  }
  
  
  // markers: marker[] = [
	//   {
	// 	  lat: 44.04607127363113,
	// 	  lng: 12.60,
	// 	  label: 'A',
	// 	  draggable: true
	//   },
	//   {
	// 	  lat: 44.04607127363113,
	// 	  lng: 12.50,
	// 	  label: 'B',
	// 	  draggable: false
	//   },
	//   {
	// 	  lat: 44.04,
	// 	  lng: 12.605696990932529,
	// 	  label: 'C',
	// 	  draggable: true
	//   }
  // ]
}


interface marker {
	lat: number;
	lng: number;
	label?: string;
	draggable: boolean;
}