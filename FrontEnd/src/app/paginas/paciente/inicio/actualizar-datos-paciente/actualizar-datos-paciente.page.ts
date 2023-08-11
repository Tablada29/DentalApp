import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuarios.model';
import { PacienteService } from '../../../../services/paciente.service';
import { ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-datos-paciente',
  templateUrl: './actualizar-datos-paciente.page.html',
  styleUrls: ['./actualizar-datos-paciente.page.scss'],
})
export class ActualizarDatosPacientePage implements OnInit {

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

  constructor(private pacienteService: PacienteService, private toast: ToastController, private router:Router,
    private navCtrl: NavController) { }

  ngOnInit() {
    this.fecha = new Date();
    this.current_year = this.fecha.getFullYear();
    this.cargarDatosUsuario();
  }

  actualizarDatosPaciente(){
    const fecha_nacimiento = new Date(this.usuario.fecha_nacimiento);
    this.usuario.fecha_nacimiento = fecha_nacimiento.getFullYear()+"-"+(fecha_nacimiento.getMonth()+1)+"-"+fecha_nacimiento.getDate();
    /* console.log(this.usuario.fecha_nacimiento); */
    this.pacienteService.actualizarDatosPaciente(this.usuario).subscribe(datos => {
      if(datos == 'OK'){
        /* Esta es una modificación para actualziar datos */
        localStorage.setItem('usuario_login', JSON.stringify(this.usuario));
        this.datosActualizados();
        /* this.router.navigateByUrl('/paciente/inicio'); */
        this.navCtrl.navigateForward('/paciente/inicio');
      }
      else{
        console.log('Problemas al actualizar');
      }
    })
  }

  cargarDatosUsuario(){
    this.usuario = JSON.parse(localStorage.getItem('datos_usuario'));
    console.log(this.usuario);
  }

  async datosActualizados(){
    const mensaje = await this.toast.create({
      message: 'Datos actualizados correctamente',
      duration: 3000,
      color: 'secundario'
    });
    await mensaje.present();
  }
}
