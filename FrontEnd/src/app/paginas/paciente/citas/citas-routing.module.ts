import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CitasPage } from './citas.page';

const routes: Routes = [
  {
    path: '',
    component: CitasPage,

    children: [
      {
        path: 'detalles-cita',
        loadChildren: () => import('./detalles-cita/detalles-cita.module').then(m => m.DetallesCitaPageModule)
      },
      {
        path: 'nueva-cita',
        loadChildren: () => import('./nueva-cita/nueva-cita.module').then(m => m.NuevaCitaPageModule)
      },
      // {
      //   path: '',
      //   redirectTo: 'paciente/citas/nueva-cita',
      //   pathMatch: 'full'
      // }
    ]
  },  {
    path: 'new-date',
    loadChildren: () => import('./new-date/new-date.module').then( m => m.NewDatePageModule)
  },

  // {
  //   path: '',
  //   redirectTo: 'paciente/citas/nueva-cita',
  //   pathMatch: 'full'
  // }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CitasPageRoutingModule { }
