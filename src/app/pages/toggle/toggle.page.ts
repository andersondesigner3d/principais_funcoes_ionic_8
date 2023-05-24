import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.page.html',
  styleUrls: ['./toggle.page.scss'],
})
export class TogglePage implements OnInit {

  email : boolean = true;
  expertise : boolean = false;
  opinion : boolean = false;

  constructor() { }

  ngOnInit() {
  }

  toggleEmailChanged() {
    console.log('Email:', this.email,'Expertise:',this.expertise,'Opinion:',this.opinion);
  }

}
