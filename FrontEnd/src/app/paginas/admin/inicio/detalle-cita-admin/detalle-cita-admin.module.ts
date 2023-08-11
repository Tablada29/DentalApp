import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetalleCitaAdminPageRoutingModule } from './detalle-cita-admin-routing.module';

import { DetalleCitaAdminPage } from './detalle-cita-admin.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetalleCitaAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [DetalleCitaAdminPage]
})
export class DetalleCitaAdminPageModule {}
