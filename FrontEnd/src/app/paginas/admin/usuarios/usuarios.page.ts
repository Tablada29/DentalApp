import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';
import { Usuario } from '../../../models/usuarios.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.page.html',
  styleUrls: ['./usuarios.page.scss'],
})
export class UsuariosPage implements OnInit {

  @ViewChild(IonSegment, { static: true }) segment: IonSegment;

  lista_usuarios: Usuario[] = [];

  /* usuarios: Observable<any>; */

  rol = '';

  constructor(private adminService: AdminService, private router: Router) { }

  ionViewWillEnter(){
    console.log("IonViewWillEnter de USUARIOS");
    this.cargarUsuarios();
  }

  ngOnInit() {
    this.segment.value = 'todos';
    /* this.usuarios = this.adminService.cargarUsuarios(); */
    /* this.cargarUsuarios(); */
  }

  cargarUsuarios() {
    this.adminService.cargarUsuarios().subscribe((datos: Usuario[]) => {
      this.lista_usuarios = datos;
      console.log(this.lista_usuarios);
    });
  }

  segmentChanged(event) {

    const valorSegmento = event.detail.value;

    if (valorSegmento === 'todos') {
      this.rol = '';
      return;
    }
    this.rol = valorSegmento;
  }

  agregarUsuario() {
    this.router.navigateByUrl('/nuevo-usuario');
  }

  detalleUsuario(index) {
    const usuario_seleccionado = this.lista_usuarios.filter(datos => datos.id_usuario == index);
    localStorage.setItem('usuario_seleccionado', JSON.stringify(usuario_seleccionado[0]));
    this.router.navigateByUrl('/detalle-usuario-admin');
  }
}
