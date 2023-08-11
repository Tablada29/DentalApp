import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioPage } from './inicio.page';

const routes: Routes = [
  {
    path: '',
    component: InicioPage,
    children: [
      {
        path: 'detalle-cita-admin',
        loadChildren: () => import('./detalle-cita-admin/detalle-cita-admin.module').then( m => m.DetalleCitaAdminPageModule)
      },
      {
        path: 'agendar-cita-admin',
        loadChildren: () => import('./agendar-cita-admin/agendar-cita-admin.module').then( m => m.AgendarCitaAdminPageModule)
      }
    ]
  },
  {
    path: 'usuarios',
    loadChildren: () => import('../usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'inicio',
    redirectTo: 'admin/inicio',
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioPageRoutingModule {}
