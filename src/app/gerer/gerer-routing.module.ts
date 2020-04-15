import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GererPage } from './gerer.page';

const routes: Routes = [
  {
    path: '',
    component: GererPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GererPageRoutingModule {}
