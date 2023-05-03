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
    { title: 'Alert', url: '/alert', icon: 'cube' },
    { title: 'Badge', url: '/badge', icon: 'cube' },
    { title: 'Breadcrumb', url: '/breadcrumbs', icon: 'cube' },
    { title: 'Button', url: '/button', icon: 'cube' },
    { title: 'Cards', url: '/cards', icon: 'cube' },
    { title: 'Checkbox', url: '/checkbox', icon: 'cube' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
