import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulos-menu',
  templateUrl: './titulos-menu.component.html',
  styleUrls: ['./titulos-menu.component.scss'],
})
export class TitulosMenuComponent implements OnInit {

  nombre_usuario: string;
  constructor() { }

  ngOnInit() {
    this.nombre_usuario = localStorage.getItem("nombre_usuario");
  }

}
