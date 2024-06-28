import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-geolocalizacao',
  templateUrl: './geolocalizacao.page.html',
  styleUrls: ['./geolocalizacao.page.scss'],
})
export class GeolocalizacaoPage implements OnInit {

  public latitude: number = 0;
  public longitude: number = 0;

  constructor(private alertController: AlertController) { }

  ngOnInit() {
    this.getCurrentPosition();
  }

  async getCurrentPosition() {
    try {
      const coordinates = await Geolocation.getCurrentPosition();
      console.log('Current', coordinates);
      this.latitude = coordinates.coords.latitude;
      this.longitude = coordinates.coords.longitude;
    } catch (error) {
      console.error('Error getting location', error);
      this.showAlert('Erro', 'Não foi possível obter a localização. Por favor, verifique suas configurações de GPS.');
    }
  }

  watchPosition() {
    const wait = Geolocation.watchPosition({}, (position, err) => {
      if (err) {
        console.error('Error watching position', err);
        this.showAlert('Erro', 'Erro ao assistir a posição.');
      } else {
        if (position) {
          this.latitude = position.coords.latitude;
          this.longitude = position.coords.longitude;
        }
      }
    });
  }

  async showAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });

    await alert.present();
  }

}