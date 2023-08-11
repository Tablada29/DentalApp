import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarMedicamentoMedicoPage } from './agregar-medicamento-medico.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarMedicamentoMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarMedicamentoMedicoPageRoutingModule {}
