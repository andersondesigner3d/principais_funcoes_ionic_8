import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  @ViewChild('popover') popover: any;
  isOpen = false;  
  texto!: string;

  constructor() { }

  ngOnInit() {
  }

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
    if(this.isOpen){
      this.texto = "O popover abriu";
    }
  }

  fecharPopover() {
    // Feche o popover e forneça quaisquer dados necessários
    this.isOpen = false;
    this.texto = "O popover fechou";
  }

}
