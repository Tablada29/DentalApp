import { Component, OnInit } from '@angular/core';
import { Direcciones } from '../../../../models/direcciones.model';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../../models/usuarios.model';

@Component({
  selector: 'app-direcciones',
  templateUrl: './direcciones.page.html',
  styleUrls: ['./direcciones.page.scss'],
})
export class DireccionesPage implements OnInit {

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
  };

  direcciones: Direcciones[] = [];

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit() {
    this.usuario = this.pacienteService.recuperarDatosUsuario();
    this.cargarDirecciones();
  }

  ionViewWillEnter(){
    this.cargarDirecciones();
  }

  cargarDirecciones(){

    this.pacienteService.cargarDireccionesPaciente(this.usuario).subscribe((datos:Direcciones[]) => {
      this.direcciones = datos;
      console.log("Direcciones en el arreglo");
      console.log(this.direcciones);
    })
  }

  nuevaDireccion(){
    this.router.navigateByUrl('/nueva-direccion');
  }

  detalleDireccion(index){
    let direccion_seleccionada: Direcciones = this.direcciones[index];
    localStorage.setItem("direccion_seleccionada", JSON.stringify(direccion_seleccionada));
    this.router.navigateByUrl('/detalle-direccion');
  }
}
