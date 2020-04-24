import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MonumentsPageRoutingModule } from './monuments-routing.module';

import { MonumentsPage } from './monuments.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MonumentsPageRoutingModule
  ],
  declarations: [MonumentsPage]
})
export class MonumentsPageModule {}
