import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinityscroller',
  templateUrl: './infinityscroller.page.html',
  styleUrls: ['./infinityscroller.page.scss'],
})
export class InfinityscrollerPage implements OnInit {
  
  items: string[] = [];
  
  constructor() { 
    this.loadData(null);
  }

  ngOnInit() {
    
  }

  loadData(event: any) {
    // simula o carregamento de dados
    setTimeout(() => {
      for (let i = 0; i < 20; i++) {
        this.items.push('Item ' + (this.items.length + 1));
      }

      if (event) {
        event.target.complete();
      }
    }, 500);
  }

  

}
