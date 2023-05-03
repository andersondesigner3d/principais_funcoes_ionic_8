import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  public homem:	any = false;
  public mulher:	any = false;
  public asexuado:	any = false;

  constructor() { }

  ngOnInit() {
  }

  mostraSexo(){
    console.log("Homem: "+this.homem+" , Mulher: "+this.mulher+" , Asexuado: "+this.asexuado);
  }

}
