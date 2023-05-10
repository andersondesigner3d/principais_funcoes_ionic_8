import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfinityscrollerPage } from './infinityscroller.page';

const routes: Routes = [
  {
    path: '',
    component: InfinityscrollerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfinityscrollerPageRoutingModule {}
