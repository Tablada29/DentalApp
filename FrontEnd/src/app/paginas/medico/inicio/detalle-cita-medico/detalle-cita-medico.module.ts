import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCitaMedicoPageRoutingModule } from './detalle-cita-medico-routing.module';

import { DetalleCitaMedicoPage } from './detalle-cita-medico.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCitaMedicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleCitaMedicoPage]
})
export class DetalleCitaMedicoPageModule {}
