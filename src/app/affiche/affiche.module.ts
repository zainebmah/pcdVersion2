import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffichePageRoutingModule } from './affiche-routing.module';

import { AffichePage } from './affiche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AffichePageRoutingModule
  ],
  declarations: [AffichePage]
})
export class AffichePageModule {}
