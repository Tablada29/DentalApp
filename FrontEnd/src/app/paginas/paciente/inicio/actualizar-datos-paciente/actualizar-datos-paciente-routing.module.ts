import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ActualizarDatosPacientePage } from './actualizar-datos-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ActualizarDatosPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarDatosPacientePageRoutingModule {}
