import { Observable, from } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Partida } from './../../model/partida';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-partida',
  templateUrl: './detalle-partida.component.html',
  styleUrls: ['./detalle-partida.component.css']
})
export class DetallePartidaComponent implements OnInit {

  partida: Partida;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.partida = JSON.parse(localStorage.getItem('partida'));
    console.log(this.partida);
  }

  getGanador(){
    const ganador = this.partida.jugadores.reduce((p, c) => p.puntosJugador > c.puntosJugador ? p : c);
    if (ganador.puntosJugador > this.partida.puntos) {
      return ganador.nombre;
    }else{
      return 'Tu';
    }
   }

}
