import { Component, OnInit, ViewChild } from '@angular/core';
import { Usuario } from '../../../models/usuarios.model';
import { Router } from '@angular/router';
import { LoginRegisterService } from '../../../services/login-register.service';
import { AlertController, ToastController, IonCheckbox } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  @ViewChild(IonCheckbox) aceptar_terminos : IonCheckbox;

  registro: Usuario = {
    id_usuario: null,
    usuario: "",
    correo: "",
    pass: "",
    estatus_registro: "",
    estado_actividad: "",
    rol: "2",
    nombre: "",
    apellido_materno: "",
    apellido_paterno: "",
    sexo: "",
    edad: null,
    fecha_nacimiento: "",
    curp: "",
    cedula: ""
  };

  confirmar_pass = "";

  estado_password = 0;
  estado_confirmar_pass = 0;


  constructor(private router: Router, private loginRegistroService: LoginRegisterService, private alert: AlertController, private toast: ToastController) { }

  ngOnInit() {
  }

  /* Metodos principales */
  registrarse() {
    if (this.registro.nombre == "" || this.registro.apellido_paterno == "" || this.registro.apellido_materno == "" ||
      this.registro.correo == "" || this.registro.pass == "" || this.registro.usuario == "") {
      this.llenaCampos();
    }
    else if (this.registro.nombre == null || this.registro.apellido_paterno == null || this.registro.apellido_materno == null ||
      this.registro.correo == null || this.registro.pass == null || this.registro.usuario == null) {
      this.llenaCampos();
    } 
    else {
      if(this.estado_password == 2){
        if(this.estado_confirmar_pass == 2){
          this.loginRegistroService.verificarUsuarioDisponible(this.registro).subscribe(datos => {
            if (JSON.stringify(datos) == '[]') {
              this.loginRegistroService.verificarCorreoDisponible(this.registro).subscribe(data => {
                if (JSON.stringify(data) == '[]') {
                  if(this.aceptar_terminos.checked == true){
                    this.loginRegistroService.registrarUsuarios(this.registro).subscribe(nuevoUsuario => {
                      if (nuevoUsuario == "OK") {
                        this.usuarioRegistrado();
                        this.mostrarLogin();
                        this.vaciarCamposRegistro();
                      } else {
                        console.log("Que siempre no se guardo");
                      }
                    })
                  }
                  else{
                    this.aceptarTerminos();
                  }
                } else {
                  this.correoNoDisponible();
                }
              })
            } else {
              this.usuarioNoDisponible();
            }
          });
        }
        else{
          this.confirmarPass();
        }
      }
      else{
        this.passIncorrecta();
      }
    }
  }

  /* Alerts */
  async llenaCampos() {
    const alert = await this.alert.create({
      header: 'Campos obligatorios',
      message: 'LLena todos los campos',
      buttons: [
        {
          text: 'Ok',
          handler: (blah) => {
            
          }
        }
      ]
    });
    await alert.present();
  }

  async usuarioRegistrado() {
    const mensaje = await this.toast.create({
      message: `${this.registro.usuario} registrado correctamente`,
      duration: 2000,
      color: 'secundario'
    });
    await mensaje.present()
  }

  async correoNoDisponible() {
    const alerta = await this.alert.create({
      header: 'Error de correo',
      message: 'Ya existe una cuenta con ese correo',
      buttons: [
        {
          text: 'Aceptar',
          handler: (blah) => {
            this.registro.correo = "";
          }
        }
      ]
    });
    await alerta.present();
  }

  async usuarioNoDisponible() {
    const alerta = await this.alert.create({
      header: 'Error de usuario',
      message: 'Nombre de usuario no disponible',
      buttons: [{
        text: 'Aceptar',
        handler: (blah) => {
          this.registro.usuario = "";
        }
      }]
    });
    await alerta.present();
  }

  async passIncorrecta(){
    const alerta = await this.alert.create({
      header: 'verificar contraseña',
      message: 'La contraseña debe tener entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula, al menos una mayúscula y al menos un caracter no alfanumérico.',
      buttons: [
        {
          text: 'Aceptar',
          handler: (blah) => {
            this.registro.pass = "";
            this.confirmar_pass = "";
          }
        }
      ]
    });
    await alerta.present();
  }

  async confirmarPass(){
    const alerta = await this.alert.create({
      header: 'Verificar contraseñas',
      message: 'Las contraseñas no coinciden',
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    await alerta.present();
  }

  async aceptarTerminos(){
    const alerta = await this.alert.create({
      header: 'Terminos y condiciones',
      message: 'Acepte los terminos y condiciones',
      buttons: [
        {
          text: 'Aceptar'
        }
      ]
    });
    await alerta.present();
  }

  /* Focus: Habilitado y Deshabilitado */
  focusPass(){
    this.estado_password = 1;
  }

  blurPass(){
    let regExp = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/;

    if(regExp.test(this.registro.pass)){
      this.estado_password = 2;

    }
    else{
      this.estado_password = 3;
    }

    
  }

  focusConfirmPass(){
    if(this.estado_confirmar_pass == 1){
      this.confirmar_pass = "";
    }
  }

  blufConfirmPass(){
    if(this.confirmar_pass != this.registro.pass){
      this.estado_confirmar_pass = 1;
    }
    else{
      this.estado_confirmar_pass = 2;
    }
  }

  /* Metodos de navegación */
  mostrarLogin() {
    this.router.navigateByUrl('/login');
  }

  /* Otros */
  vaciarCamposRegistro() {
    this.registro.nombre = "";
    this.registro.apellido_paterno = "";
    this.registro.apellido_materno = "";
    this.registro.usuario = "";
    this.registro.pass = "";
    this.registro.correo = "";
    this.confirmar_pass = "";
  }
}
