import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radio',
  templateUrl: './radio.page.html',
  styleUrls: ['./radio.page.scss'],
})
export class RadioPage implements OnInit {

  frutas : string = "strawberries";

  constructor() { }

  ngOnInit() {
  }

  selecionaFrutas(){
    console.log(this.frutas);
  }

}
