import { Component, OnInit } from '@angular/core';
import { Direcciones } from '../../../../models/direcciones.model';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Button } from 'protractor';

@Component({
  selector: 'app-detalle-direccion',
  templateUrl: './detalle-direccion.page.html',
  styleUrls: ['./detalle-direccion.page.scss'],
})
export class DetalleDireccionPage implements OnInit {

  direccion: Direcciones;

  constructor(private pacienteService: PacienteService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.cargarDireccionSeleccionada();
  }

  cargarDireccionSeleccionada(){

    this.direccion = JSON.parse(localStorage.getItem('direccion_seleccionada'));
  }

  eliminarDireccion(){
    this.pacienteService.eliminarDireccion(this.direccion).subscribe(datos => {
      if(datos == 'OK'){

        this.direccionEliminada();
      }
    })
  }

  actualizarDireccion(){
    this.pacienteService.actualizarDireccion(this.direccion).subscribe(datos => {
      if(datos == 'OK'){
        this.direccionActualizada();
      }
    })
  }

  async direccionEliminada(){
    const alerta = await this.alert.create({
      header: 'Exito!',
      message: "Dirección eliminada correctamente.",
      buttons: [
        {
          text: 'Aceptar',
          handler: (blah) => {
            this.router.navigateByUrl('/direcciones');
          }
        }
      ]
    });
    await alerta.present();
  }

  async direccionActualizada(){
    const alerta = await this.alert.create({
      header: 'Actualización exitosa',
      message: 'Dirección actualizada con exito.',
      buttons: ['Ok']
    });
    await alerta.present();
  }
}
