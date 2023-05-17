import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation3',
  templateUrl: './navigation3.page.html',
  styleUrls: ['./navigation3.page.scss'],
})
export class Navigation3Page implements OnInit {

  receivedText!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.receivedText = this.route.snapshot.queryParams['data'];
  }

}
