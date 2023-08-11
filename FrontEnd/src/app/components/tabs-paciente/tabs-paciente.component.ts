import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuarios.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-paciente',
  templateUrl: './tabs-paciente.component.html',
  styleUrls: ['./tabs-paciente.component.scss'],
})
export class TabsPacienteComponent implements OnInit {

  nombre_usuario: string;

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
    cedula: ""
  }
  
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario_login'));
  }

  home(){
    this.navCtrl.navigateForward("paciente/inicio");
  }

}
