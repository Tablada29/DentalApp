import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PacientePage } from './paciente.page';

const routes: Routes = [
  {
    path: '',
    component: PacientePage,
    children: [
      {
        path: 'citas',
        loadChildren: () => import('./citas/citas.module').then(m => m.CitasPageModule)
      },
      {
        path: '',
        redirectTo: 'paciente/inicio',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'paciente',
    redirectTo: 'paciente/inicio',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PacientePageRoutingModule { }
