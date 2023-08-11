import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';
import { Telefonos } from '../../../../models/telefonos.model';
import { Usuario } from '../../../../models/usuarios.model';

@Component({
  selector: 'app-telefonos',
  templateUrl: './telefonos.page.html',
  styleUrls: ['./telefonos.page.scss'],
})
export class TelefonosPage implements OnInit {

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
  };

  telefonos: Telefonos[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.pacienteService.recuperarDatosUsuario();
    this.cargarTelefonos();
  }

  ionViewWillEnter(){
    this.cargarTelefonos();
  }

  cargarTelefonos(){
    console.log(this.usuario);
    this.pacienteService.cargarTelefonosPaciente(this.usuario).subscribe((datos: Telefonos[]) => {
      this.telefonos = datos;
      console.log(this.telefonos);
    })
  }

  nuevoTelefono(){
    this.router.navigateByUrl('/nuevo-telefono');
  }
}
