import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtítulo qualquer',
      message: 'Por favor, preencha os campos abaixo:',
      inputs: [
        {
          name: 'nome',
          type: 'text',
          placeholder: 'Nome',
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'E-mail',
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('O usuário cancelou o alerta.');
          },
        },
        {
          text: 'OK',
          handler: (data) => {
            console.log(`Nome: ${data.nome}, E-mail: ${data.email}`);
          },
        },
      ],
    });

    await alert.present();
  }

}
