import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../services/paciente.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recetas } from '../../../models/recetas.model';
import { Usuario } from '../../../models/usuarios.model';

@Component({
  selector: 'app-recetas',
  templateUrl: './recetas.page.html',
  styleUrls: ['./recetas.page.scss'],
})
export class RecetasPage implements OnInit {

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

  recetas: Recetas[] = [];

  constructor(private pacienteService: PacienteService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.cargarRecetas();
  }

  cargarRecetas(){
    this.usuario = this.pacienteService.recuperarDatosUsuario();
    this.pacienteService.cargarRecetasPaciente(this.usuario).subscribe((datos: Recetas[]) => {
      this.recetas = datos;
    })
  }

  detalleReceta(index){
    let receta: Recetas = this.recetas[index];
    localStorage.setItem('receta_seleccionada', JSON.stringify(receta));
    this.router.navigateByUrl('/detalle-receta');
  }
}
