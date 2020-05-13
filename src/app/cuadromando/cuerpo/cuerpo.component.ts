import { Partida } from './../../model/partida';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit, OnDestroy{

  juego: Juego;
  partidasGanadas: number;
  partidasGanadasMesActual: number;
  partidasGanadasAnioActual: number;
  partidasJugadas: number;
  partidasJugadasMesActual: number;
  partidasJugadasAnioActual: number;
  puntosMax: number;
  puntosMaxMesActual: number;
  puntosMaxAnioActual: number;
  mes: string;
  anio: string;

  subscriptionNombre: Subscription;
  subscriptionMes: Subscription;

  constructor(private servicio: JuegosServiceService, private mensajeria: ServicioMensajeriaService) {
    this.subscriptionNombre = this.mensajeria.getNombre().subscribe(nombre => {
      if (nombre) {
        this.partidasGanadas = 0;
        this.servicio.getJuego(nombre).subscribe(j => {
          this.juego = j;
          if (j.partidas !== null){
            j.partidas.filter(p => p.ganador === true).forEach(pg => this.partidasGanadas = this.partidasGanadas + 1);
            this.partidasJugadas = j.partidas.length;
            this.puntosMax = j.partidas.reduce((a, c) => a.puntos > c.puntos ? a : c).puntos;
          }
        });
      }
    });
    this.subscriptionMes = this.mensajeria.getMes()
    .pipe(debounceTime(200))
    .subscribe(anioMes => {
      this.puntosMaxMesActual = 0;
      this.partidasGanadasMesActual = 0;
      this.partidasJugadasMesActual = 0;
      this.puntosMaxAnioActual = 0;
      this.partidasGanadasAnioActual = 0;
      this.partidasJugadasAnioActual = 0;
      this.anio = anioMes.substring(0, 4);
      const mesNumerico = anioMes.substring(5, 7);
      this.mes = this.getNombreMes(mesNumerico);
      if (this.juego.partidas !== null){
        this.juego.partidas.forEach(p => {
          if (p.fecha.substring(0, 4) === this.anio && p.fecha.substring(5, 7) === mesNumerico){
            this.partidasJugadasMesActual = this.partidasJugadasMesActual + 1;
          }
          if (p.fecha.substring(0, 4) === this.anio){
            this.partidasJugadasAnioActual = this.partidasJugadasAnioActual + 1;
          }
        });
        this.juego.partidas.filter(p => p.ganador === true).forEach(p => {
          if (p.fecha.substring(0, 4) === this.anio && p.fecha.substring(5, 7) === mesNumerico){
            this.partidasGanadasMesActual = this.partidasGanadasMesActual + 1;
          }
          if (p.fecha.substring(0, 4) === this.anio){
            this.partidasGanadasAnioActual = this.partidasGanadasAnioActual + 1;
          }
        });
        if (this.partidasJugadasMesActual > 0){
          this.puntosMaxMesActual = this.juego.partidas
          .filter(p => p.fecha.substring(0, 4) === this.anio && p.fecha.substring(5, 7) === mesNumerico)
          .reduce((a, c) => a.puntos > c.puntos ? a : c).puntos;
        }
        if (this.partidasJugadasAnioActual > 0){
          this.puntosMaxAnioActual = this.juego.partidas
          .filter(p => p.fecha.substring(0, 4) === this.anio)
          .reduce((a, c) => a.puntos > c.puntos ? a : c).puntos;
        }
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscriptionNombre.unsubscribe();
    this.subscriptionMes.unsubscribe();
}

getNombreMes(mesNumerico: string){
  const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];
  console.log(mesNumerico);

  return monthNames[+mesNumerico];
}
}
