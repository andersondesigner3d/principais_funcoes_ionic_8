import { Component, OnInit, ViewChild } from '@angular/core';
import type { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  inputModel = '';
  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  constructor() { }

  ngOnInit() {
  }

  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }

  onInput(ev : any) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.inputModel = filteredValue;
  }

}
