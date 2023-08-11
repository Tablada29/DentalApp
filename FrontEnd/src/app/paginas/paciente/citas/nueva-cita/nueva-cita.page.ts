import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Citas } from '../../../../models/citas.model';


@Component({
  selector: 'app-nueva-cita',
  templateUrl: './nueva-cita.page.html',
  styleUrls: ['./nueva-cita.page.scss'],
})
export class NuevaCitaPage implements OnInit {

  citas: Citas[] = [];

  nueva_cita: Citas = {
    titulo: ""
  };

  constructor(private pacienteService: PacienteService, 
    private router: Router, private navCtrl: NavController) { }

  ngOnInit() {
    /* this.citas = JSON.parse(localStorage.getItem('lista_citas')); */
  }

  solicitarCita(){
    console.log(this.nueva_cita);
    const usuario = JSON.parse(localStorage.getItem('usuario_login'));
    this.nueva_cita.paciente = usuario.id_usuario;
    /* this.nueva_cita.paciente = parseInt(localStorage.getItem("id_usuario")); */
    this.pacienteService.generarNuevaCita(this.nueva_cita).subscribe(datos => {
      console.log(datos);
      if(datos == 'OK'){
        /* this.pacienteService.saveCitas(); */
        this.navCtrl.navigateForward('/paciente/citas');
        /* this.router.navigateByUrl('/paciente/paciente/citas'); */
      }

    })
  }

}
