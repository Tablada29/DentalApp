import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'detalle-cita-medico',
    loadChildren: () => import('./detalle-cita-medico/detalle-cita-medico.module').then( m => m.DetalleCitaMedicoPageModule)
  },
  {
    path: 'nueva-receta-medico',
    loadChildren: () => import('./nueva-receta-medico/nueva-receta-medico.module').then( m => m.NuevaRecetaMedicoPageModule)
  },
  {
    path: 'agregar-medicamento-medico',
    loadChildren: () => import('./agregar-medicamento-medico/agregar-medicamento-medico.module').then( m => m.AgregarMedicamentoMedicoPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
