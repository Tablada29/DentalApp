import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.page.html',
  styleUrls: ['./paciente.page.scss'],
})
export class PacientePage implements OnInit {

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
  
  constructor() { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario_login'));
  }

}
