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
  markers: marker[] = [];

  clickedMarker(marker: string, index: number) {
    console.log(marker);
    console.log(index);
    // console.log(`clicked the marker: ${label || index}`)
  }
  
  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      text: 'Nice place',
      imgShow: false,
      draggable: false,
    });
  }
  
  markerDragEnd(m: marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  deleteImg(i) {
    this.markers[i]['imgShow'] = false;
    console.log(this.markers);
  }

  editInfoText(event, i) {
    console.log(i);
    console.log(event);
    console.log(event.srcElement.innerText);
    this.markers[i]['text'] = event.srcElement.innerText;
    console.log(this.markers);
  }

  readURL(event, i){
    console.log(event);
    // this.markers[i]['imgShow'] = true;
    // var getImagePath = URL.createObjectURL(event.target.files[0]);
    // this.markers[i]['imgPath'] = getImagePath;
    // console.log(getImagePath);
    console.log(i);
    // console.log(this.markers);
   }

  deleteDescr(i) {
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
  text?: string;
  imgShow?: boolean;
  imgPath?: any;
	draggable: boolean;
}