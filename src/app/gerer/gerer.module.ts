import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { GererPageRoutingModule } from './gerer-routing.module';

import { GererPage } from './gerer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GererPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [GererPage]
})
export class GererPageModule {}
