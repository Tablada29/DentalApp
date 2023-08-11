import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Direcciones } from '../../../../models/direcciones.model';
import { PacienteService } from '../../../../services/paciente.service';

@Component({
  selector: 'app-nueva-direccion',
  templateUrl: './nueva-direccion.page.html',
  styleUrls: ['./nueva-direccion.page.scss'],
})
export class NuevaDireccionPage implements OnInit {

  nueva_direccion: Direcciones = {
    id_direccion: null,
    calle: null,
    numero_exterior: null,
    numero_interior: null,
    colonia: null,
    ciudad: null,
    codigo_postal: null,
    estado: null,
    pais: null,
    id_usuario: null,
    address_of: null
  }

  constructor(private pacienteService: PacienteService, private router: Router) { }

  ngOnInit() {
  }

  guardarNuevaDireccion(){
    const usuario = this.pacienteService.recuperarDatosUsuario();
    this.nueva_direccion.id_usuario = usuario.id_usuario;
    if(this.nueva_direccion.numero_interior == null){
      this.nueva_direccion.numero_interior = "S/N";
    }
    if(this.nueva_direccion.numero_exterior == null){
      this.nueva_direccion.numero_exterior = "S/N";
    }
    console.log(this.nueva_direccion);
    this.pacienteService.guardarNuevaDireccion(this.nueva_direccion).subscribe(datos => {
      if(datos == 'OK'){
        this.router.navigateByUrl('/direcciones');
        
      }
    });
  }
}
