import { Component, OnInit } from '@angular/core';
import { Medicamentos } from '../../../../models/medicamentos.model';

@Component({
  selector: 'app-medicamentos',
  templateUrl: './medicamentos.page.html',
  styleUrls: ['./medicamentos.page.scss'],
})
export class MedicamentosPage implements OnInit {

  medicamento: Medicamentos;

  constructor() { }

  ngOnInit() {
    this.cargarMedicamento();
  }

  cargarMedicamento(){
    this.medicamento = JSON.parse(localStorage.getItem('medicamento_seleccionado'));
  }
}
