import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfinityscrollerPageRoutingModule } from './infinityscroller-routing.module';

import { InfinityscrollerPage } from './infinityscroller.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfinityscrollerPageRoutingModule
  ],
  declarations: [InfinityscrollerPage]
})
export class InfinityscrollerPageModule {}
