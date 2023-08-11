import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaCitaPageRoutingModule } from './nueva-cita-routing.module';

import { NuevaCitaPage } from './nueva-cita.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaCitaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevaCitaPage]
})
export class NuevaCitaPageModule {}
