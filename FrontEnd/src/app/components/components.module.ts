import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';
import { TitulosMenuComponent } from './titulos-menu/titulos-menu.component';
import { TabsPacienteComponent } from './tabs-paciente/tabs-paciente.component';
import { TabsAdminComponent } from './tabs-admin/tabs-admin.component';

@NgModule({
    declarations: [
        MenuComponent,
        HeaderComponent,
        SubHeaderComponent,
        TitulosMenuComponent,
        TabsPacienteComponent,
        TabsAdminComponent
    ],
    exports: [
        MenuComponent,
        HeaderComponent,
        SubHeaderComponent,
        TitulosMenuComponent,
        TabsPacienteComponent,
        TabsAdminComponent

    ],
    imports: [
        CommonModule,
        IonicModule
    ]
})

export class ComponentsModule { }