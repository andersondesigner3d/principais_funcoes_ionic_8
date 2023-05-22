import { Component, OnInit } from '@angular/core';
import { RangeCustomEvent } from '@ionic/angular';
import { RangeValue } from '@ionic/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {

  pinFormatter(value: number) {
    return `${value}%`;
  }

  valor : number = 0;
  valorPin : number = 0;

  moveStart !: RangeValue;
  moveEnd !: RangeValue;

  onIonKnobMoveStart(ev: Event) {
    this.moveStart = (ev as RangeCustomEvent).detail.value;
  }

  onIonKnobMoveEnd(ev: Event) {
    this.moveEnd = (ev as RangeCustomEvent).detail.value;
  }

  constructor() { }

  ngOnInit() {
  }

}
