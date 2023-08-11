import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuarios.model';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tabs-admin',
  templateUrl: './tabs-admin.component.html',
  styleUrls: ['./tabs-admin.component.scss'],
})
export class TabsAdminComponent implements OnInit {

  usuario: Usuario = {
    
  }

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
    this.usuario = JSON.parse(localStorage.getItem('usuario_login'));
  }

  home(){
    this.navCtrl.navigateForward("admin/inicio");
  }
}
