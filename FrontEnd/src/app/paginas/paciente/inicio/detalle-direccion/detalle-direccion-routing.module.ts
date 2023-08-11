import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleDireccionPage } from './detalle-direccion.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleDireccionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleDireccionPageRoutingModule {}
