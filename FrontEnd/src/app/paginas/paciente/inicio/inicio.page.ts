import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuarios.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

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

  constructor( private pacienteService: PacienteService, private router: Router,
    private navCtrl: NavController) { 
      console.log("Se estan cargando los datos en el constructor");
      this.cargarDatosPaciente();
    }

  ngOnInit() {
    console.log("Se estan cargando los datos en el OnInit");
    this.cargarDatosPaciente();
  }

  ionViewWillEnter(){
    console.log("Se están cargando los datos en el ViewWillEnter");
    this.cargarDatosPaciente();
  }

  ngOnDestroy(): void {
    console.log('Se destruye inicio');
  }



  cargarDatosPaciente(){

    this.usuario = JSON.parse(localStorage.getItem('usuario_login'));
    /* console.log(this.usuario); */
  }

  mostrarDirecciones(){
    this.router.navigateByUrl('/direcciones');
  }

  mostrarTelefonos(){
    this.router.navigateByUrl('/telefonos');
  }

  actualizarDatosPaciente(){
    localStorage.setItem('datos_usuario', JSON.stringify(this.usuario));
    /* this.router.navigateByUrl('paciente/inicio/actualizar-datos-paciente'); */
    this.navCtrl.navigateForward('paciente/inicio/actualizar-datos-paciente');
  }
}
