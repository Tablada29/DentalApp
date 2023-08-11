import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuarios.model';
import { AdminService } from '../../../../services/admin.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-detalle-usuario-admin',
  templateUrl: './detalle-usuario-admin.page.html',
  styleUrls: ['./detalle-usuario-admin.page.scss'],
})
export class DetalleUsuarioAdminPage implements OnInit {

  usuario: Usuario = {
    id_usuario: null,
    usuario: "",
    correo: "",
    pass: "",
    estatus_registro: "",
    estado_actividad: "",
    rol: "",
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    sexo: "",
    edad: null,
    fecha_nacimiento: "",
    curp: "",
    cedula: "",
  }

  fecha: Date;
  current_year: number;

  constructor(private adminService: AdminService, private toast: ToastController, private router: Router) { }

  ngOnInit() {
    this.fecha = new Date();
    this.current_year = this.fecha.getFullYear();
    this.usuario = JSON.parse(localStorage.getItem('usuario_seleccionado'));
  }

  ngOnDestroy(): void {
  localStorage.removeItem('usuario_seleccionado');    
  }

  eliminarUsuario(){
    this.adminService.eliminarUsuario(this.usuario).subscribe(datos => {
      if(datos == 'OK'){
        this.usuarioEliminado();
        this.router.navigateByUrl('/admin/inicio/usuarios');
      }
    })
  }

  actualizarUsuarios(){
    this.adminService.actalizarUsuario(this.usuario).subscribe(datos => {
      if(datos == 'OK'){
        this.usuarioActualizado();
        this.router.navigateByUrl('/admin/inicio/usuarios');
      }
    })
  }

  async usuarioActualizado(){
      const mensaje = await this.toast.create({
        message: 'Usuario actualizado correctamente',
        duration: 2000,
        color: 'secundario'
      });
      await mensaje.present();
  }

  async usuarioEliminado(){
    const mensaje = await this.toast.create({
      message: 'Usuario eliminado',
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present();
  }
}
