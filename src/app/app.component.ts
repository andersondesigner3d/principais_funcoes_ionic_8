import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Index', url: '/folder/index', icon: 'home' },
    { title: 'Action Sheet', url: '/action-sheet', icon: 'cube' },
    { title: 'Accordion', url: '/accordion', icon: 'cube' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
