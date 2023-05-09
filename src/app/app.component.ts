import { Component  } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
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
    { title: 'Chip', url: '/chip', icon: 'cube' },
    { title: 'Content Scrollable', url: '/content', icon: 'cube' },
    { title: 'Datetime', url: '/datetime', icon: 'cube' },
  ];
  
  
  darkMode = false;

  constructor(private storage: Storage) {
  }

  async ngOnInit() {
    // cria o storage e le o que está salvo no darkmode
    await this.storage.create();
    if(this.storage){
        this.storage.get('darkmode').then((valor) => {
          this.darkMode = valor;
        });
    }
  }

  toggleDarkMode() {
    //troca o valor do darkmode e salva na memoria
    this.darkMode = !this.darkMode;
    this.storage.set('darkmode', this.darkMode);
  }

}


