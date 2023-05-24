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
    { title: 'Ionfab', url: '/ionfab', icon: 'cube' },
    { title: 'Grid Layout', url: '/grid', icon: 'cube' },
    { title: 'Infinity Scroller', url: '/infinityscroller', icon: 'cube' },
    { title: 'Ion Icon', url: '/icons', icon: 'cube' },
    { title: 'Input', url: '/input', icon: 'cube' },
    { title: 'Ion Item', url: '/item', icon: 'cube' },
    { title: 'Ion List', url: '/list', icon: 'cube' },
    { title: 'Media', url: '/media', icon: 'cube' },
    { title: 'Menu', url: '/menu', icon: 'cube' },
    { title: 'Modal', url: '/modal', icon: 'cube' },
    { title: 'Navigation', url: '/navigation', icon: 'cube' },
    { title: 'Popover', url: '/popover', icon: 'cube' },
    { title: 'Loading e Spinners', url: '/loading', icon: 'cube' },
    { title: 'Radio', url: '/radio', icon: 'cube' },
    { title: 'Range', url: '/range', icon: 'cube' },
    { title: 'Refresher', url: '/refresher', icon: 'cube' },
    { title: 'Reorder', url: '/reorder', icon: 'cube' },
    { title: 'Segment', url: '/segment', icon: 'cube' },
    { title: 'Select', url: '/select', icon: 'cube' },
    { title: 'Toast', url: '/toast', icon: 'cube' },
  ];
  
  darkMode = false;
  public menuType: string = 'overlay';

  public results = [...this.appPages];

  handleInput(event:any) {
    const query = event.target.value.toLowerCase();
    //this.results = this.appPages.filter((d) => d.toLowerCase().indexOf(query) > -1);
    this.results = this.appPages.filter((d) => d.title.toLowerCase().indexOf(query.toLowerCase()) > -1);
  }

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


