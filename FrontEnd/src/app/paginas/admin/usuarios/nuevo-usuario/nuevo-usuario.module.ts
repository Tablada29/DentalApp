import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoUsuarioPageRoutingModule } from './nuevo-usuario-routing.module';

import { NuevoUsuarioPage } from './nuevo-usuario.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoUsuarioPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoUsuarioPage]
})
export class NuevoUsuarioPageModule {}
