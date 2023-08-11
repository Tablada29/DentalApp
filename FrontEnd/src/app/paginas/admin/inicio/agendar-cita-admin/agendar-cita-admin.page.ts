import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../models/usuarios.model';
import { AdminService } from '../../../../services/admin.service';
import { Citas } from '../../../../models/citas.model';
import { Router } from '@angular/router';
import { ToastController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-agendar-cita-admin',
  templateUrl: './agendar-cita-admin.page.html',
  styleUrls: ['./agendar-cita-admin.page.scss'],
})
export class AgendarCitaAdminPage implements OnInit {

  cita: Citas = {
    id_cita: null,
    titulo: "",
    fecha: "",
    hora: "",
    comentarios: "",
    aceptacion: "",
    estatus: "",
    paciente: null,
    nombre_paciente: "",
    medico: null,
    nombre_medico: "",
    dia_preferencia: "Cualquiera",
    horario_preferente: "Matutino",
  };

  fecha: Date;
  current_year: number;

  dentistas: Usuario[] = [];
  pacientes: Usuario[] = [];

  constructor(private adminService: AdminService, private router: Router, private toast: ToastController, private navCtrl: NavController) { }

  ngOnInit() {
    this.fecha = new Date();
    this.current_year = this.fecha.getFullYear();
    this.cargarDentistas();
    this.cargarPacientes();
  }

  agendarCita(){
    this.cita.aceptacion = "1";
    this.cita.estatus = "1";
    this.cita.dia_preferencia = "Cualquiera";
    this.cita.horario_preferente = "Cualquiera";
    const fecha_actual = new Date(this.cita.fecha);
    const hora_actual = new Date(this.cita.hora);
    this.cita.fecha = fecha_actual.getFullYear()+"-"+(fecha_actual.getMonth()+1)+"-"+fecha_actual.getDate();
    this.cita.hora = hora_actual.getHours()+":"+hora_actual.getMinutes()+":"+hora_actual.getSeconds();
    console.log(this.cita);
    this.adminService.agendarCita(this.cita).subscribe(datos => {
      console.log(datos);
      if(datos == 'OK'){
        this.citaCreada();
        /* this.router.navigateByUrl('admin/inicio'); */
        this.navCtrl.navigateForward('admin/inicio');
      }
      else{
        console.log("Problemas al guardar");
      }
    })
  }

  

  cargarDentistas(){
    this.adminService.cargarDentistas().subscribe((datos: Usuario[]) => {
      this.dentistas = datos
    })
  }

  cargarPacientes(){
    this.adminService.cargarPacientes().subscribe((datos: Usuario[]) => {
      this.pacientes = datos;
    })
  }

  async citaCreada(){
    const mensaje = await this.toast.create({
      message: 'Cita creada correctamente',
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present();
  }
}
