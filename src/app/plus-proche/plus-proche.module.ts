import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlusProchePageRoutingModule } from './plus-proche-routing.module';

import { PlusProchePage } from './plus-proche.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlusProchePageRoutingModule
  ],
  declarations: [PlusProchePage]
})
export class PlusProchePageModule {}
