import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
})
export class GeolocalizacaoPage implements OnInit {

 public latitude : number = 0;
 public longitude : number = 0;
  constructor() { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.latitude = coordinates.coords.latitude;
    this.longitude = coordinates.coords.longitude;
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {});
  }

}
