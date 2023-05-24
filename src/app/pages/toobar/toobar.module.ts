import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ToobarPageRoutingModule } from './toobar-routing.module';

import { ToobarPage } from './toobar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ToobarPageRoutingModule
  ],
  declarations: [ToobarPage]
})
export class ToobarPageModule {}
