import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRecetaMedicoPageRoutingModule } from './detalle-receta-medico-routing.module';

import { DetalleRecetaMedicoPage } from './detalle-receta-medico.page';
import { ComponentsModule } from '../../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRecetaMedicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleRecetaMedicoPage]
})
export class DetalleRecetaMedicoPageModule {}
