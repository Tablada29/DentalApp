import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleRecetaPageRoutingModule } from './detalle-receta-routing.module';

import { DetalleRecetaPage } from './detalle-receta.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleRecetaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleRecetaPage]
})
export class DetalleRecetaPageModule {}
