import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.page.html',
  styleUrls: ['./select.page.scss'],
})
export class SelectPage implements OnInit {

  valor !: string;

  logs: string[] = [];

  pushLog(msg:any) {
    this.logs.unshift(msg);
  }

  handleChange(e:any) {
    this.pushLog('ionChange fired with value: ' + e.detail.value);
  }

  constructor() { }

  ngOnInit() {
  }

}
