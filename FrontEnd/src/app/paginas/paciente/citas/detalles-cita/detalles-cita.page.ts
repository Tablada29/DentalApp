import { Component, OnInit } from '@angular/core';
import { Citas } from '../../../../models/citas.model';
import { Recetas } from '../../../../models/recetas.model';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalles-cita',
  templateUrl: './detalles-cita.page.html',
  styleUrls: ['./detalles-cita.page.scss'],
})
export class DetallesCitaPage implements OnInit {

  cita_seleccionada: Citas;

  receta: Recetas = {
    id_receta: null,
    fecha: "",
    id_paciente: null,
    id_medico: null,
    medicamentos: [],
    nombre_paciente: "",
    nombre_medico: "",
  }

  constructor(private pacienteService: PacienteService, private router:Router) { }

  ngOnInit() {
    this.cargarCitaSeleccionada();
    this.cargarReceta();
  }

  cargarCitaSeleccionada(){
    let cita = JSON.parse(localStorage.getItem('cita_seleccionada'));
    this.cita_seleccionada = cita;
    /* console.log(this.cita_seleccionada); */
    
  }

  cargarReceta(){
    this.pacienteService.cargarRecetaCitaPaciente(this.cita_seleccionada).subscribe(datos => {
      if(datos != []){
        this.receta = datos[0];
        localStorage.setItem('receta_cita', JSON.stringify(this.receta));
      }
    })
  }

  /* cargarMedicamentos(){
    this.pacienteService.cargarMedicamentoRecetaCita(this.receta).subscribe(datos => {
      console.log(datos);
    })
  } */

  mostrarDetalleRecetaCita(){
    this.router.navigateByUrl('/receta');
  }
}
