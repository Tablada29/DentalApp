import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.page.html',
  styleUrls: ['./medico.page.scss'],
})
export class MedicoPage implements OnInit {

  nombre_usuario: string;
  constructor() { }

  ngOnInit() {
    const usuario_login = JSON.parse(localStorage.getItem('usuario_login'));
    this.nombre_usuario = usuario_login.nombre+" "+usuario_login.apellido_paterno+" "+usuario_login.apellido_materno;
  }

}
