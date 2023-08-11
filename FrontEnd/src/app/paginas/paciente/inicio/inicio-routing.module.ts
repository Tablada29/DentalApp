import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./direcciones/direcciones.module').then( m => m.DireccionesPageModule)
  },
  {
    path: 'nueva-direccion',
    loadChildren: () => import('./nueva-direccion/nueva-direccion.module').then( m => m.NuevaDireccionPageModule)
  },
  {
    path: 'detalle-direccion',
    loadChildren: () => import('./detalle-direccion/detalle-direccion.module').then( m => m.DetalleDireccionPageModule)
  },
  {
    path: 'telefonos',
    loadChildren: () => import('./telefonos/telefonos.module').then( m => m.TelefonosPageModule)
  },
  {
    path: 'actualizar-datos-paciente',
    loadChildren: () => import('./actualizar-datos-paciente/actualizar-datos-paciente.module').then( m => m.ActualizarDatosPacientePageModule)
  },
  {
    path: 'citas',
    loadChildren: () => import('../citas/citas.module').then( m => m.CitasPageModule)
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
