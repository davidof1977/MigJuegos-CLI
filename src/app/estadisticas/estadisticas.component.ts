import { JuegosServiceService } from './../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  numJuegosColeccion: number;
  numJuegosSeguimiento: number;
  numJuegosDeseos: number;
  numPartidas: number;
  numVictorias: number;
  numPartidasUltimoMes: number;
  numVictoriasUltimoMes: number;

  constructor(private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    this.numVictoriasUltimoMes = 0;
    this.servicio.getJuegosEnColeccion().subscribe(data => this.numJuegosColeccion = data.length);
    this.servicio.getJuegosListaDeseos().subscribe(data => this.numJuegosDeseos = data.length);
    this.servicio.getJuegosSeguimiento().subscribe(data => this.numJuegosSeguimiento = data.length);
    this.servicio.getTodasPartidas().subscribe(data => this.numPartidas = data.length);
    this.servicio.getPartidasGanadas().subscribe(data => this.numVictorias = data.length);
    this.servicio.getPartidasMes(new Date().getMonth() + 1).subscribe(data => {
      this.numPartidasUltimoMes = data.length;
      data.forEach(p => {
        if (p.ganador){
          this.numVictoriasUltimoMes = this.numVictoriasUltimoMes + 1;
        }
      });
    });

  }

}