import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navigation2',
  templateUrl: './navigation2.page.html',
  styleUrls: ['./navigation2.page.scss'],
})
export class Navigation2Page implements OnInit {

  receivedText!: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.receivedText = this.route.snapshot.queryParams['data'];
  }

}
