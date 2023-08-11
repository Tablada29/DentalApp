import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarMedicamentoMedicoPageRoutingModule } from './agregar-medicamento-medico-routing.module';

import { AgregarMedicamentoMedicoPage } from './agregar-medicamento-medico.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarMedicamentoMedicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgregarMedicamentoMedicoPage]
})
export class AgregarMedicamentoMedicoPageModule {}
