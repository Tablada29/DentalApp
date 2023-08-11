import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../../services/paciente.service';
import { Router } from '@angular/router';
import { Telefonos } from '../../../../../models/telefonos.model';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-nuevo-telefono',
  templateUrl: './nuevo-telefono.page.html',
  styleUrls: ['./nuevo-telefono.page.scss'],
})
export class NuevoTelefonoPage implements OnInit {

  telefono: Telefonos = {
    id_telefono: null,
    telefono: null,
    referencia: null,
    id_usuario: null
  }

  constructor(private pacienteService: PacienteService, private router: Router, private toast: ToastController) { }

  ngOnInit() {
    

  }

  guardarTelefono(){
    const usuario = this.pacienteService.recuperarDatosUsuario();
    this.telefono.id_usuario = usuario.id_usuario;
    this.pacienteService.guardarTelefono(this.telefono).subscribe(datos => {
      console.log(datos);
      if(datos == 'OK'){
        this.telefonoGuardado();
        this.router.navigateByUrl('telefonos');
      }
      else{
        console.log("Algo salio mal");
      }
    })
  }

  async telefonoGuardado(){
    const mensaje = await this.toast.create({
      message: 'Telefono guardado correctamente',
      duration: 3000,
      color: 'secundario'
    });
    await mensaje.present();
  }

}
