import { Injectable } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation';

@Injectable()
export class LocationService {
  constructor(private geolocation: Geolocation) {}
  start() {
    let options = { enableHighAccuracy: true, maximumAge: 3000 }; // timeout
    let watch = this.geolocation.watchPosition(options);
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
      console.log('watch position: ', data);
    });
    this.geolocation.getCurrentPosition(options).then((data) => {
      console.log('current position: ', data);
    });
  }
}