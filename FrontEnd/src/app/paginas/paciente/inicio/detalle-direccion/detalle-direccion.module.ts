import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleDireccionPageRoutingModule } from './detalle-direccion-routing.module';

import { DetalleDireccionPage } from './detalle-direccion.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleDireccionPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleDireccionPage]
})
export class DetalleDireccionPageModule {}
