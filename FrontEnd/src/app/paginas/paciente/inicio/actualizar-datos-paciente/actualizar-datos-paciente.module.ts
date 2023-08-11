import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ActualizarDatosPacientePageRoutingModule } from './actualizar-datos-paciente-routing.module';

import { ActualizarDatosPacientePage } from './actualizar-datos-paciente.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ActualizarDatosPacientePageRoutingModule,
    ComponentsModule
  ],
  declarations: [ActualizarDatosPacientePage]
})
export class ActualizarDatosPacientePageModule {}
