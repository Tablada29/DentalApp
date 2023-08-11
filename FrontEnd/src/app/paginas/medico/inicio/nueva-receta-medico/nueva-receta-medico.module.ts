import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaRecetaMedicoPageRoutingModule } from './nueva-receta-medico-routing.module';

import { NuevaRecetaMedicoPage } from './nueva-receta-medico.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaRecetaMedicoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevaRecetaMedicoPage]
})
export class NuevaRecetaMedicoPageModule {}
