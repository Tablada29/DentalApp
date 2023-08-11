import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuarios.model';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-usuario',
  templateUrl: './nuevo-usuario.page.html',
  styleUrls: ['./nuevo-usuario.page.scss'],
})
export class NuevoUsuarioPage implements OnInit {

  nuevo_usuario: Usuario = {
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

  constructor(private adminService: AdminService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
  }

  agregarUsuario(){
    console.log(this.nuevo_usuario);
    this.adminService.agregarUsuario(this.nuevo_usuario).subscribe(datos => {
      if(datos == 'OK'){
        this.usuarioCreado();
        this.router.navigateByUrl('/admin/inicio/usuarios');
      }
      else{
        console.log("Error al guardar");
      }
    })

  }

  async usuarioCreado(){
    const mensaje = await this.toast.create({
      message: 'Usuario creado correctamente',
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present();
  }
}
