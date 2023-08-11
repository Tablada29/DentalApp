import { Component, OnInit, ViewChild } from '@angular/core';
import { Citas } from '../../../models/citas.model';
import { Usuario } from '../../../models/usuarios.model';
import { MedicoService } from '../../../services/medico.service';
import { Router } from '@angular/router';
import { IonSegment } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonSegment, {static: true}) segment: IonSegment;

  lista_citas: Citas[] = [];

  usuario: Usuario = {
    id_usuario: 0,
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
    edad: 0,
    fecha_nacimiento: "",
    curp: "",
    cedula: ""
  };

  estatus = '';

  constructor(private medicoService: MedicoService, private router: Router) { }

  ionViewWillEnter(){
    this.cargarCitas();
  }

  ngOnInit() {
    this.segment.value = 'todos';
    this.usuario = JSON.parse(localStorage.getItem('usuario_login'));
    
  }

  cargarCitas(){
    this.medicoService.cargarCitas(this.usuario).subscribe((datos: Citas[]) => {
      this.lista_citas = datos;
    });
  }

  segmentChanged(event) {
    const valorSegment = event.detail.value;
    if(valorSegment === 'todos'){
      this.estatus = '';
      return;
    }
    this.estatus = valorSegment;
  }

  detallesCita(index){
    const lista_seleccionada = this.lista_citas.filter(datos => datos.id_cita == index)[0];
    localStorage.setItem('cita_seleccionada', JSON.stringify(lista_seleccionada));
    this.router.navigateByUrl('/detalle-cita-medico');
  }
}
