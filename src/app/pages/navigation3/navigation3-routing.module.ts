import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Navigation3Page } from './navigation3.page';

const routes: Routes = [
  {
    path: '',
    component: Navigation3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Navigation3PageRoutingModule {}
