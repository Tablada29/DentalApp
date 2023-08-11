import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { AdminService } from '../../../services/admin.service';
import { Observable } from 'rxjs';
import { async } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Citas } from '../../../models/citas.model';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  citas: Citas[] = [];

  aceptacion = '';

  fecha: Date;
  hoy = '';
  dia_siguiente = '';
  dos_dias_despues = '';


  constructor(private adminService: AdminService, private router: Router) { }

  ionViewWillEnter(){
    console.log("Carca el ionViewWillEnter");
    this.cargarCitas();
    this.calcularFechas();
  }

  ngOnInit() {
    this.segment.value = 'todos';
    /* this.cargarCitas();
    this.calcularFechas(); */
  }

  cargarCitas() {
    this.adminService.cargarCitas().subscribe((datos: Citas[]) => {
      this.citas = datos;
      console.log(this.citas);
    });
  }

  segmentChanged(event) {
    const valorSegment = event.detail.value;

    if (valorSegment === 'todos') {
      this.aceptacion = '';
      return;
    }
    this.aceptacion = valorSegment;

  }

  detallesCita(index) {
    console.log(this.citas[index]);
    localStorage.setItem('cita_seleccionada', JSON.stringify(this.citas[index]));
    this.router.navigateByUrl('/detalle-cita-admin');
  }

  agendarCita() {
    this.router.navigateByUrl('/agendar-cita-admin');
  }

  calcularFechas() {

    this.fecha = new Date();
    let meses = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
    let day = this.fecha.getDate();
    let month = meses[this.fecha.getMonth()];
    let year = this.fecha.getFullYear();

    let limite = 0;
    const reiniciar = 1;

    if (month == '02') {
      if (year % 4 == 0) {
        if (year % 100 != 0) {
          limite = 29;
        } else {
          if (year % 400 == 0) {
            limite = 29;
          }
          else {
            limite = 28;
          }
        }
      } else {
        limite = 28;
      }
    }
    else if (month == '01' || month == '03' || month == '05' || month == '07' || month == '08' || month == '10' || month == '12') {
      limite = 31;
    }
    else if (month == '04' || month == '06' || month == '09' || month == '11') {
      limite = 30;
    }

    this.hoy = year + "-" + month + "-" + this.formatearDias(day);

    if (day + 1 > limite) {
      day = reiniciar;
      month = meses[this.fecha.getMonth() + 1];
      this.dia_siguiente = year + "-" + month + "-" + this.formatearDias(day);
    }
    else {
      const ddd = day+1;
      this.dia_siguiente = year + "-" + month + "-" + this.formatearDias(ddd);
    }

    if (day + 2 > limite) {
      if (day + 1 >= limite) {
        day = reiniciar;
        month = meses[this.fecha.getMonth() + 1];
        const dia = this.formatearDias(day);
        this.dos_dias_despues = year + "-" + month + "-" + dia;
      } else {
        day = reiniciar + 1;
        month = meses[this.fecha.getMonth() + 1];
        const dia = this.formatearDias(day);
        this.dos_dias_despues = year + "-" + month + "-" + dia;
      }
    }
    else {
      const dddd = day+2;
      this.dos_dias_despues = year + "-" + month + "-" + this.formatearDias(dddd);
    }
  }

  formatearDias(day){
    let dia = '';
    if(day.valueOf().toString().length == 1){
      dia = '0'+day;
      return dia;
    }
    else{
      return day;
    }
  }

}
