import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewDatePage } from './new-date.page';

const routes: Routes = [
  {
    path: '',
    component: NewDatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewDatePageRoutingModule {}
