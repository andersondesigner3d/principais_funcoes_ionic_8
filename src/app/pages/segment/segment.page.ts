import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  selectedSegment: string = 'segment1';

  segmentChanged(event: any) {
    this.selectedSegment = event.detail.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
