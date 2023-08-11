import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgendarCitaAdminPageRoutingModule } from './agendar-cita-admin-routing.module';

import { AgendarCitaAdminPage } from './agendar-cita-admin.page';
import { ComponentsModule } from '../../../../components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgendarCitaAdminPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AgendarCitaAdminPage]
})
export class AgendarCitaAdminPageModule {}
