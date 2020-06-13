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
  numPartidasAnioActual: number;
  numVictoriasAnioActual: number;
  numJuegosNuevosMes: number;
  numJuegosNuevosAnio: number;
  numJuegosDistintosMes: number;
  numJuegosDistintosAnio: number;

  constructor(private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    this.numVictoriasUltimoMes = 0;
    this.servicio.getJuegosEnColeccion().subscribe(data => this.numJuegosColeccion = data.length);
    this.servicio.getJuegosListaDeseos().subscribe(data => this.numJuegosDeseos = data.length);
    this.servicio.getJuegosSeguimiento().subscribe(data => this.numJuegosSeguimiento = data.length);
    this.servicio.getTodasPartidas().subscribe(data => this.numPartidas = data.length);
    this.servicio.getPartidasGanadas().subscribe(data => this.numVictorias = data.length);
    this.servicio.getJuegosDistintosMes(new Date().getMonth() + 1).subscribe(data => this.numJuegosDistintosMes = data);
    this.servicio.getJuegosDistintosAnio(new Date().getFullYear()).subscribe(data => this.numJuegosDistintosAnio = data);
    this.servicio.getPartidasMes(new Date().getMonth() + 1).subscribe(data => {
      this.numPartidasUltimoMes = data.length;
      this.numVictoriasUltimoMes = data.filter(p => p.ganador).length;
      this.numJuegosNuevosMes = data.filter(p => p.primeraPartida).length;
    });
    this.servicio.getPartidasAnio(new Date().getFullYear()).subscribe(data => {
      this.numPartidasAnioActual = data.length;
      this.numVictoriasAnioActual = data.filter(p => p.ganador).length;
      this.numJuegosNuevosAnio = data.filter(p => p.primeraPartida).length;
    });

  }
  navegarColeccion(){
    localStorage.setItem('origenPeticion', 'listadoColeccion');
  }

  navegarDeseos(){
    localStorage.setItem('origenPeticion', 'listadoDeseos');
  }

  navegarSeguimiento(){
    localStorage.setItem('origenPeticion', 'listadoSeguimiento');
  }

  navegarGanadas(){
    localStorage.setItem('tipo', 'ganadas');
  }

  navegarTodas(){
    localStorage.setItem('tipo', 'todas');
  }
}
