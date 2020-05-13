import { Partida } from './../../model/partida';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit, OnDestroy{

  juego: Juego;
  partidasGanadas: number;
  partidasGanadasActual: number;
  partidasJugadas: number;
  partidasJugadasActual: number;

  subscriptionNombre: Subscription;
  subscriptionMes: Subscription;

  constructor(private servicio: JuegosServiceService, private mensajeria: ServicioMensajeriaService) {
    this.subscriptionNombre = this.mensajeria.getNombre().subscribe(nombre => {
      if (nombre) {
        this.partidasGanadas = 0;
        this.servicio.getJuego(nombre).subscribe(j => {
          this.juego = j;
          j.partidas.filter(p => p.ganador === true).forEach(pg => this.partidasGanadas = this.partidasGanadas + 1);
          this.partidasJugadas = j.partidas.length;
        });
      }
    });
    this.subscriptionMes = this.mensajeria.getMes().subscribe(anioMes => {
      this.partidasGanadasActual = 0;
      this.partidasJugadasActual = 0;
      this.juego.partidas.forEach(p => {
        const anio = anioMes.substring(0, 4);
        const mes = anioMes.substring(5, 7);
        console.log(anio);
        console.log(mes);
        if (p.fecha.substring(0, 4) === anio && p.fecha.substring(5, 7) === mes){
          this.partidasJugadasActual = this.partidasJugadasActual + 1;
        }
      });
      this.juego.partidas.filter(p => p.ganador === true).forEach(p => {
        const anio = anioMes.substring(0, 4);
        const mes = anioMes.substring(5, 7);
        console.log(anio);
        console.log(mes);
        if (p.fecha.substring(0, 4) === anio && p.fecha.substring(5, 7) === mes){
          this.partidasGanadasActual = this.partidasGanadasActual + 1;
        }
      });
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscriptionNombre.unsubscribe();
    this.subscriptionMes.unsubscribe();
}

}
