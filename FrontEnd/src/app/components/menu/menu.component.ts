import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  nombre_usuario: string = "";


  constructor(private route: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('Componente sesion destruido');
  }

  perfil() {
    console.log('Perfil');
    this.route.navigateByUrl('/perfil')
  }

  configuracion() {
    console.log('Configuración');
    this.route.navigateByUrl('/configuracion');
  }

  cerrarSesion() {
    console.log('Cerrar sesión');
    localStorage.removeItem("nombre_usuario");
    localStorage.removeItem("id_usuario");
    localStorage.clear();
    this.route.navigateByUrl('/login')
  }
}
