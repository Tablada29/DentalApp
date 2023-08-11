import { Component, OnInit, ViewChild } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Citas } from '../../../../models/citas.model';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Usuario } from '../../../../models/usuarios.model';
import { Consultorio } from '../../../../models/consultorios.model';

@Component({
  selector: 'app-detalle-cita-admin',
  templateUrl: './detalle-cita-admin.page.html',
  styleUrls: ['./detalle-cita-admin.page.scss'],
})
export class DetalleCitaAdminPage implements OnInit {

  cita: Citas;

  fecha: Date;
  current_year: number;

  dentistas: Usuario[] = [];
  consultorios: Consultorio[] = [];

  constructor(private adminService: AdminService, private toast: ToastController, private router: Router) { }


  ngOnInit() {
    this.cita = JSON.parse(localStorage.getItem('cita_seleccionada'));
    this.fecha = new Date();
    this.current_year = this.fecha.getFullYear();
    this.cargarConsultorios();
    this.cargarDentistas();
  }

  ngOnDestroy(): void {
  localStorage.removeItem('cita_seleccionada');    
  }

  confirmarCita(){
    this.cita.aceptacion = "1";
    this.cita.estatus = "1";
    this.adminService.confirmarCita(this.cita).subscribe(datos => {
      if(datos == 'OK'){
        this.citaReagendada();
        this.router.navigateByUrl('/admin/inicio');

      }
      else{
        console.log("Problemas al confirmar");
      }
    })
  }

  cancelarCita(){
    this.adminService.cancelarCita(this.cita).subscribe(datos => {
      if(datos == 'OK'){
        this.citaCancelada();
        this.router.navigateByUrl('/admin/inicio');
      }
      else{
        console.log("Error al cancelar");
      }
    })
  }

  finalizarCita(){
    this.adminService.finalizarCita(this.cita).subscribe(datos => {
      if(datos = 'OK'){
        this.citaFinalizada()
        this.router.navigateByUrl('/admin/inicio');
      }
      else{
        console.log("Error al finalizar la cita");
      }
    })
  }

  cargarDentistas(){
    this.adminService.cargarDentistas().subscribe((datos: Usuario[]) => {
      this.dentistas = datos
    })
  }

  cargarConsultorios(){
    this.adminService.cargarConsultorios().subscribe((datos: Consultorio[]) => {
      this.consultorios = datos;
    })
  }

  async citaReagendada() {
    const toast = await this.toast.create({
      message: 'Cita confirmada correctamente',
      duration: 2000,
      color: 'secundario'
    });
    await toast.present();
  }

  async citaCancelada(){
    const mensaje = await this.toast.create({
      message: 'Cita cancelada correctamente',
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present();
  }

  async citaFinalizada(){
    const mensaje = await this.toast.create({
      message: 'La cita ha finalizado',
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present();
  }
}
