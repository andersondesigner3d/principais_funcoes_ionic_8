import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IonfabPageRoutingModule } from './ionfab-routing.module';

import { IonfabPage } from './ionfab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonfabPageRoutingModule
  ],
  declarations: [IonfabPage]
})
export class IonfabPageModule {}
