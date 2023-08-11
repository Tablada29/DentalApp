import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewDatePageRoutingModule } from './new-date-routing.module';

import { NewDatePage } from './new-date.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewDatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [NewDatePage]
})
export class NewDatePageModule {}
