import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCitaAdminPage } from './detalle-cita-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCitaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCitaAdminPageRoutingModule {}
