import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffichePage } from './affiche.page';

const routes: Routes = [
  {
    path: '',
    component: AffichePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffichePageRoutingModule {}
