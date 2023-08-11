import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsuariosPage } from './usuarios.page';

const routes: Routes = [
  {
    path: '',
    component: UsuariosPage
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./nuevo-usuario/nuevo-usuario.module').then( m => m.NuevoUsuarioPageModule)
  },
  {
    path: 'detalle-usuario-admin',
    loadChildren: () => import('./detalle-usuario-admin/detalle-usuario-admin.module').then( m => m.DetalleUsuarioAdminPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsuariosPageRoutingModule {}
