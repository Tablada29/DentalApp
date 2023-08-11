import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgendarCitaAdminPage } from './agendar-cita-admin.page';

const routes: Routes = [
  {
    path: '',
    component: AgendarCitaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgendarCitaAdminPageRoutingModule {}
