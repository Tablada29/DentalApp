import { Component, OnInit } from '@angular/core';
import { Recetas } from '../../../../../models/recetas.model';
import { PacienteService } from '../../../../../services/paciente.service';
import { Router } from '@angular/router';
import { Medicamentos } from '../../../../../models/medicamentos.model';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.page.html',
  styleUrls: ['./receta.page.scss'],
})
export class RecetaPage implements OnInit {

  constructor(private pacienteService: PacienteService, private router: Router) { }

  receta: Recetas = {
    id_receta: null,
    fecha: "",
    id_paciente: null,
    id_medico: null,
    medicamentos: [],
    nombre_paciente: "",
    nombre_medico: "",
  }

  lista_medicamentos: Medicamentos[] = [];

  ngOnInit() {
    this.receta = JSON.parse(localStorage.getItem('receta_cita'));
    this.cargarMedicamentos();
  }

  cargarMedicamentos(){
    this.pacienteService.cargarMedicamentoRecetaCita(this.receta).subscribe((datos: Medicamentos[]) => {
      this.lista_medicamentos = datos;
    })
  }

}
