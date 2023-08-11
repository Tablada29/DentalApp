import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleUsuarioAdminPageRoutingModule } from './detalle-usuario-admin-routing.module';

import { DetalleUsuarioAdminPage } from './detalle-usuario-admin.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleUsuarioAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleUsuarioAdminPage]
})
export class DetalleUsuarioAdminPageModule {}
