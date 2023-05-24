import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ToobarPage } from './toobar.page';

const routes: Routes = [
  {
    path: '',
    component: ToobarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ToobarPageRoutingModule {}
