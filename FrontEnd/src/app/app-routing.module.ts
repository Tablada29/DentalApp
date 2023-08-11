import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  /* Admin */
  {
    path: 'admin',
    loadChildren: () => import('./paginas/admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/admin/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'detalle-cita-admin',
    loadChildren: () => import('./paginas/admin/inicio/detalle-cita-admin/detalle-cita-admin.module').then(m => m.DetalleCitaAdminPageModule)
  },
  {
    path: 'agendar-cita-admin',
    loadChildren: () => import('./paginas/admin/inicio/agendar-cita-admin/agendar-cita-admin.module').then(m => m.AgendarCitaAdminPageModule)
  },
  {
    path: 'detalle-usuario-admin',
    loadChildren: () => import('./paginas/admin/usuarios/detalle-usuario-admin/detalle-usuario-admin.module').then(m => m.DetalleUsuarioAdminPageModule)
  },
  {
    path: 'usuarios',
    loadChildren: () => import('./paginas/admin/usuarios/usuarios.module').then(m => m.UsuariosPageModule)
  },
  /* Paciente */
  {
    path: 'paciente',
    loadChildren: () => import('./paginas/paciente/paciente.module').then( m => m.PacientePageModule)
  },
  // {
  //   path: 'citas',
  //   loadChildren: () => import('./paginas/paciente/citas/citas.module').then(m => m.CitasPageModule)
  // },
  {
    path: 'detalles-cita',
    loadChildren: () => import('./paginas/paciente/citas/detalles-cita/detalles-cita.module').then( m => m.DetallesCitaPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/paciente/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'direcciones',
    loadChildren: () => import('./paginas/paciente/inicio/direcciones/direcciones.module').then(m => m.DireccionesPageModule)
  },
  {
    path: 'nueva-direccion',
    loadChildren: () => import('./paginas/paciente/inicio/nueva-direccion/nueva-direccion.module').then(m => m.NuevaDireccionPageModule)
  },
  {
    path: 'detalle-direccion',
    loadChildren: () => import('./paginas/paciente/inicio/detalle-direccion/detalle-direccion.module').then(m => m.DetalleDireccionPageModule)
  },
  {
    path: 'telefonos',
    loadChildren: () => import('./paginas/paciente/inicio/telefonos/telefonos.module').then(m => m.TelefonosPageModule)
  },
  {
    path: 'nuevo-telefono',
    loadChildren: () => import('./paginas/paciente/inicio/telefonos/nuevo-telefono/nuevo-telefono.module').then(m => m.NuevoTelefonoPageModule)
  },
  {
    path: 'recetas',
    loadChildren: () => import('./paginas/paciente/recetas/recetas.module').then(m => m.RecetasPageModule)
  },
  {
    path: 'detalle-receta',
    loadChildren: () => import('./paginas/paciente/recetas/detalle-receta/detalle-receta.module').then(m => m.DetalleRecetaPageModule)
  },
  {
    path: 'medicamentos',
    loadChildren: () => import('./paginas/paciente/recetas/medicamentos/medicamentos.module').then(m => m.MedicamentosPageModule)
  },
  // {
  //   path: 'nueva-cita',
  //   loadChildren: () => import('./paginas/paciente/citas/nueva-cita/nueva-cita.module').then(m => m.NuevaCitaPageModule)
  // },
  {
    path: 'receta',
    loadChildren: () => import('./paginas/paciente/citas/detalles-cita/receta/receta.module').then(m => m.RecetaPageModule)
  },
  {
    path: 'nuevo-usuario',
    loadChildren: () => import('./paginas/admin/usuarios/nuevo-usuario/nuevo-usuario.module').then(m => m.NuevoUsuarioPageModule)
  },
  {
    path: 'actualizar-datos-paciente',
    loadChildren: () => import('./paginas/paciente/inicio/actualizar-datos-paciente/actualizar-datos-paciente.module').then(m => m.ActualizarDatosPacientePageModule)
  },
  /* Medico */
  {
    path: 'medico',
    loadChildren: () => import('./paginas/medico/medico.module').then( m => m.MedicoPageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/medico/inicio/inicio.module').then(m => m.InicioPageModule)
  },
  {
    path: 'detalle-cita-medico',
    loadChildren: () => import('./paginas/medico/inicio/detalle-cita-medico/detalle-cita-medico.module').then(m => m.DetalleCitaMedicoPageModule)
  },
  {
    path: 'nueva-receta-medico',
    loadChildren: () => import('./paginas/medico/inicio/nueva-receta-medico/nueva-receta-medico.module').then(m => m.NuevaRecetaMedicoPageModule)
  },
  {
    path: 'agregar-medicamento-medico',
    loadChildren: () => import('./paginas/medico/inicio/agregar-medicamento-medico/agregar-medicamento-medico.module').then(m => m.AgregarMedicamentoMedicoPageModule)
  },
  {
    path: 'detalle-receta-medico',
    loadChildren: () => import('./paginas/medico/inicio/detalle-cita-medico/detalle-receta-medico/detalle-receta-medico.module').then(m => m.DetalleRecetaMedicoPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
