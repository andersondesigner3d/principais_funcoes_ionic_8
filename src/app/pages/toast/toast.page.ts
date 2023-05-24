import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.page.html',
  styleUrls: ['./toast.page.scss'],
})
export class ToastPage implements OnInit {

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom') {
    const toast = await this.toastController.create({
      message: 'Hello World!',
      duration: 1500,
      position: position,
      
    });

    await toast.present();
  }

  fechouToast(){
    console.log("Fechou o Toast!");
  }

  public toastButtons = [
    {
      text: 'More Info',
      role: 'info',
      handler: () => {
        this.handlerMessage = 'More Info clicked';
      },
    },
    {
      text: 'Dismiss',
      role: 'cancel',
      handler: () => {
        this.handlerMessage = 'Dismiss clicked';
      },
    },
  ];
  handlerMessage = '';
  roleMessage = '';

  setRoleMessage(ev:any) {
    const { role } = ev.detail;
    this.roleMessage = `Dismissed with role: ${role}`;
  }


}
