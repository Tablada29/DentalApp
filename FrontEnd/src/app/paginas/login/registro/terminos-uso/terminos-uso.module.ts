import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TerminosUsoPageRoutingModule } from './terminos-uso-routing.module';

import { TerminosUsoPage } from './terminos-uso.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TerminosUsoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [TerminosUsoPage]
})
export class TerminosUsoPageModule {}
