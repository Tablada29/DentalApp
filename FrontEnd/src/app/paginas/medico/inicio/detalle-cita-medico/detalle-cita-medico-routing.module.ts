import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetalleCitaMedicoPage } from './detalle-cita-medico.page';

const routes: Routes = [
  {
    path: '',
    component: DetalleCitaMedicoPage
  },
  {
    path: 'detalle-receta-medico',
    loadChildren: () => import('./detalle-receta-medico/detalle-receta-medico.module').then( m => m.DetalleRecetaMedicoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetalleCitaMedicoPageRoutingModule {}
