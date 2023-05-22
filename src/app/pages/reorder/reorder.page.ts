import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  public isDisabled = true;
  items = [1, 2, 3, 4, 5];

  constructor(private storage: Storage) { }

  async ngOnInit() {
    // cria o storage e le o que está salvo no darkmode
    await this.storage.create();
    if(this.storage){
        this.storage.get('items').then((valor) => {
          if (valor === null || typeof valor === 'undefined') {
            console.log('A variável não existe no armazenamento.');
            this.items = [1, 2, 3, 4, 5];
          } else {
            console.log('A variável existe no armazenamento e seu valor é:', valor);
            this.items = valor;
          }
        });
    }
  }

  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }

  handleReorder2(ev: CustomEvent<ItemReorderEventDetail>) {
    // Before complete is called with the items they will remain in the
    // order before the drag
    console.log('Before complete', this.items);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. Update the items variable to the
    // new order of items
    this.items = ev.detail.complete(this.items);

    // After complete is called the items will be in the new order
    console.log('After complete', this.items);
    this.storage.set('items', this.items);
  }

  toggleReorder() {
    this.isDisabled = !this.isDisabled;
  }

}
