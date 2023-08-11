import { Component, OnInit } from '@angular/core';
import { MedicoService } from '../../../../../services/medico.service';
import { Router } from '@angular/router';
import { Medicamentos } from 'src/app/models/medicamentos.model';
import { Recetas } from '../../../../../models/recetas.model';

@Component({
  selector: 'app-detalle-receta-medico',
  templateUrl: './detalle-receta-medico.page.html',
  styleUrls: ['./detalle-receta-medico.page.scss'],
})
export class DetalleRecetaMedicoPage implements OnInit {

  lista_medicamentos: Medicamentos[] = [];
  receta: Recetas = {
    id_receta: null,
    fecha: "",
    id_paciente: null,
    id_medico: null,
    id_cita: null,
    medicamentos: [],
    nombre_paciente: "",
    nombre_medico: ""
  }

  constructor(private medicoService: MedicoService, private route: Router) { }

  ngOnInit() {
    this.receta = JSON.parse(localStorage.getItem('datos_receta'));
    this.cargarMedicamentos();
  }

  cargarMedicamentos(){
    this.medicoService.cargarMedicamentos(this.receta).subscribe((datos: Medicamentos[]) => {
      if(datos.length > 0){
        console.log("Hay datos ", datos);
        this.lista_medicamentos = datos;
      }
      else{
        console.log("No hay datos");
      }
    })
  }
}
