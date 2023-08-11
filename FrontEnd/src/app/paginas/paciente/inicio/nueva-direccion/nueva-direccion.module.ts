import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaDireccionPageRoutingModule } from './nueva-direccion-routing.module';

import { NuevaDireccionPage } from './nueva-direccion.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaDireccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevaDireccionPage]
})
export class NuevaDireccionPageModule {}
