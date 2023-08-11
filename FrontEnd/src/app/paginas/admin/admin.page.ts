import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {

  nombre_usuario: string;

  constructor() { }

  ngOnInit() {
    const usuario = JSON.parse(localStorage.getItem('usuario_login'));
    this.nombre_usuario = usuario.nombre;
  }


}
