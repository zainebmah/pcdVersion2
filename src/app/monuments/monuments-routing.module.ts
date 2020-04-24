import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MonumentsPage } from './monuments.page';

const routes: Routes = [
  {
    path: '',
    component: MonumentsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MonumentsPageRoutingModule {}
