import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PacienteService } from '../../../services/paciente.service';
import { AlertController } from '@ionic/angular';
import { Citas } from '../../../models/citas.model';
import { Usuario } from '../../../models/usuarios.model';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  constructor(private router: Router,
    private pacienteService: PacienteService,
    private alert: AlertController) {
  }

  datos_usuario: Usuario = {
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

  citas: Citas[] = [];
  cita_seleccionada: Citas;
  sus: any;

  ngOnInit() {
    console.log('Se abre el init de las citas');
    this.cargarLocalStorage();
    this.consultarCitas();

  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter--- cargando datos antes de cargar el modulo--');
    this.cargarLocalStorage();
    this.consultarCitas();

  }

  ngOnDestroy(): void {
    /* console.log('Se destruye las citas'); */
    /* console.log(this.sus); */
    this.sus.unsubscribe();

  }


  cargarLocalStorage() {
    this.datos_usuario = JSON.parse(localStorage.getItem('usuario_login'));
  }

  consultarCitas() {

    const consulta_citas = this.pacienteService.cargarCitasPaciente(this.datos_usuario).subscribe((datos: Citas[]) => {
        if (JSON.stringify(datos) != '{}') {
          localStorage.setItem('lista_citas', JSON.stringify(datos));
          this.citas = JSON.parse(localStorage.getItem('lista_citas'));
          console.log(this.citas);

        } else {
          console.log('No entra');
        }
      })

    this.sus = consulta_citas;
  }

  detallesCita(cita: Citas) {
    this.cita_seleccionada = cita;
    localStorage.setItem('cita_seleccionada', JSON.stringify(cita));
    this.router.navigateByUrl('/detalles-cita');
  }

  generarCita() {
    this.sus.unsubscribe();
    this.router.navigateByUrl('/paciente/inicio/citas/new-date');
  }
}
