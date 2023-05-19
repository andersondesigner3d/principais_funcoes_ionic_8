import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage implements OnInit {

  public progress = 0;
  public buffer = 0.06;
  public progress_buffer = 0;
  public loaded = false;

  constructor(private loadingCtrl: LoadingController) { 
    this.progressBar();
    this.progressBar2();

    
  }

  progressBar(){
    setInterval(() => {
      this.progress += 0.01;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress > 1) {
        setTimeout(() => {
          this.progress = 0;
        }, 1000);
      }
    }, 50);
  }

  progressBar2(){
    //buffer
    setInterval(() => {
      this.buffer += 0.06;
      this.progress_buffer += 0.06;

      // Reset the progress bar when it reaches 100%
      // to continuously show the demo
      if (this.progress_buffer > 1) {
        setTimeout(() => {
          this.buffer = 0.06;
          this.progress_buffer = 0;
        }, 1000);
      }
    }, 1000);
  }

  ngOnInit() {
  }

  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Fechando depois de 3 segundos...',
      duration: 3000,
    });

    loading.onDidDismiss().then(() => {
      console.log('Loading dismissed');
    });

    loading.present();
  }

}