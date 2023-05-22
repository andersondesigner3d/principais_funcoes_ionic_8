import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
})
export class RefresherPage implements OnInit {

  texto : string = "";

  handleRefresh(event:any) {
    setTimeout(() => {
      // chama qualquer função aqui
      this.mudaTexto();
      event.target.complete();
    }, 2000);
  }

  constructor() { }

  ngOnInit() {
  }

  mudaTexto(){
    this.texto = "Parabéns você entendeu o funcionamento do Ion Refresher!"
  }

}
