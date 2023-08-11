import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoTelefonoPageRoutingModule } from './nuevo-telefono-routing.module';

import { NuevoTelefonoPage } from './nuevo-telefono.page';
import { ComponentsModule } from '../../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoTelefonoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [NuevoTelefonoPage]
})
export class NuevoTelefonoPageModule {}
