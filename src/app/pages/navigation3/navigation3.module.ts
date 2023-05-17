import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Navigation3PageRoutingModule } from './navigation3-routing.module';

import { Navigation3Page } from './navigation3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Navigation3PageRoutingModule
  ],
  declarations: [Navigation3Page]
})
export class Navigation3PageModule {}
