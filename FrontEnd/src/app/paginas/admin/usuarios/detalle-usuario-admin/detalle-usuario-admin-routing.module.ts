import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleUsuarioAdminPage } from './detalle-usuario-admin.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleUsuarioAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleUsuarioAdminPageRoutingModule {}
