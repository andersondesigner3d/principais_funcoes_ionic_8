import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  menuType2: string = 'overlay';
  constructor(private app_component : AppComponent) { }

  ngOnInit() {
  }

  capturarValor(){
     this.app_component.menuType = this.menuType2;
  }

}
