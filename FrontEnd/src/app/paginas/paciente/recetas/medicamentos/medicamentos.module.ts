import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicamentosPageRoutingModule } from './medicamentos-routing.module';

import { MedicamentosPage } from './medicamentos.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicamentosPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MedicamentosPage]
})
export class MedicamentosPageModule {}
