import { Component, OnInit } from '@angular/core';
import { EstadisiticasPersonales } from '../model/estadisticasPersonales';
import { Router, ActivatedRoute } from '@angular/router';
import { JuegosServiceService } from '../services/juegos-service.service';

@Component({
  selector: 'app-estadisticas-personales',
  templateUrl: './estadisticas-personales.component.html',
  styleUrls: ['./estadisticas-personales.component.css']
})
export class EstadisticasPersonalesComponent implements OnInit {

  estadisticas: EstadisiticasPersonales[];
  p = 1;
  pageSize = 5;

  constructor(private router: Router, private servicio: JuegosServiceService,
              private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.servicio.getEstadisticasPersonales().subscribe(e => this.estadisticas = e);
  }

}
