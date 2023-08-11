import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../services/login-register.service';
import { AlertController, IonSlides } from '@ionic/angular';
import { empty } from 'rxjs';
import { Usuario } from '../../models/usuarios.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
  }

  datos_correctos = 1;
  correo_confirmado = 1;

  constructor(private router: Router, private loginRegistroService: LoginRegisterService, private alert: AlertController) {  }

  

  ngOnInit() {
  }

  iniciarSesion() {
    this.loginRegistroService.obtenerUsuarios(this.usuario).subscribe(datos => {
        if(datos[0] != null){
          this.usuario = datos[0];
          console.log(this.usuario);
          this.datos_correctos = 1;
          if(this.usuario.estado_actividad == '1'){
            if(this.usuario.rol == '1'){
              this.guardarDatosLocalStorage(this.usuario);
              this.vaciarCamposLogin();
              this.router.navigateByUrl('/admin/inicio');
            }
            if(this.usuario.rol == '2'){
              this.guardarDatosLocalStorage(this.usuario);
              this.vaciarCamposLogin();
              this.router.navigateByUrl('/paciente/inicio');
            }
            if(this.usuario.rol == '3'){
              this.guardarDatosLocalStorage(this.usuario);
              this.vaciarCamposLogin();
              this.router.navigateByUrl('/medico/inicio');
            }
          }
          else{
            this.datos_correctos = 0;
          }
        }
        else {
          this.datos_correctos = 0;
        }
      }
    );
  }

  guardarDatosLocalStorage(usuario: Usuario){
    localStorage.setItem('usuario_login', JSON.stringify(usuario));
  }  

  vaciarCamposLogin() {
    this.usuario.usuario = "";
    this.usuario.pass = "";
  }

  mostrarRegistro() {
    this.router.navigateByUrl('/registro');
  }
}