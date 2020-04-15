import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlusProchePage } from './plus-proche.page';

const routes: Routes = [
  {
    path: '',
    component: PlusProchePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlusProchePageRoutingModule {}
