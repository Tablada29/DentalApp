import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleRecetaMedicoPage } from './detalle-receta-medico.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleRecetaMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleRecetaMedicoPageRoutingModule {}
