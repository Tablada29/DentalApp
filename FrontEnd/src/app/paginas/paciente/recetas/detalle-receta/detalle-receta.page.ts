import { Component, OnInit } from '@angular/core';
import { PacienteService } from '../../../../services/paciente.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Recetas } from '../../../../models/recetas.model';
import { Medicamentos } from '../../../../models/medicamentos.model';

@Component({
  selector: 'app-detalle-receta',
  templateUrl: './detalle-receta.page.html',
  styleUrls: ['./detalle-receta.page.scss'],
})
export class DetalleRecetaPage implements OnInit {

  medicamentos: Medicamentos[] = [];

  receta: Recetas;

  constructor(private pacienteService: PacienteService, private router: Router, private alert: AlertController) { }

  ngOnInit() {
    this.cargarMedicamentos();
  }

  cargarMedicamentos(){
    this.receta = JSON.parse(localStorage.getItem('receta_seleccionada'));
    this.pacienteService.cargarMedicamentosRecetas(this.receta).subscribe((datos: Medicamentos[]) => {
      this.medicamentos = datos;
    })
  }  

  detalleMedicamento(index){
    let medicamento: Medicamentos = this.medicamentos[index];
    localStorage.setItem('medicamento_seleccionado', JSON.stringify(medicamento));
    this.router.navigateByUrl('/medicamentos');
  }
}
