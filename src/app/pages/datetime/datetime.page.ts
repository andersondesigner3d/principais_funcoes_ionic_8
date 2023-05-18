import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.page.html',
  styleUrls: ['./datetime.page.scss'],
})
export class DatetimePage implements OnInit {

  minhadata !: string;
  isModalOpen = false;

  constructor() { }

  ngOnInit() {
  }

  isWeekday = (dateString: string) => {
    const date = new Date(dateString);
    const utcDay = date.getUTCDay();

    /**
     * data ficará disponível se não for
     * Domingo ou sábado
     */
    return utcDay !== 0 && utcDay !== 6;
  };

  clicou(){
    console.log(this.minhadata);
  }

  setOpen(isOpen: boolean) {
    console.log(isOpen);
    this.isModalOpen = isOpen;
  }

}
