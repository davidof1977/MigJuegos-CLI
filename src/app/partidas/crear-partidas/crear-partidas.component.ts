import { JuegosServiceService } from './../../services/juegos-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Partida } from 'src/app/model/partida';
import { Juego } from 'src/app/model/juego';

@Component({
  selector: 'app-crear-partidas',
  templateUrl: './crear-partidas.component.html',
  styleUrls: ['./crear-partidas.component.css']
})
export class CrearPartidasComponent implements OnInit {

  nombreJuego: string;
  juego: Juego;
  partida: Partida;
  constructor(private ruta: ActivatedRoute,
              private servicio: JuegosServiceService,
              private router: Router) { }

  ngOnInit(): void {
    // this.ruta.paramMap.subscribe(params => this.nombreJuego = params.get('juego'));
    this.nombreJuego = localStorage.getItem('nombreJuego');
    this.partida = new Partida();
    this.servicio.getJuego(this.nombreJuego).subscribe(j => {
      this.juego = j;
      if (this.juego.partidas == null){
        const partidas: Partida[] = new Array();
        this.juego.partidas = partidas;
      }
    });
  }

  guardarPartida(){
    if (this.partida.ganador == null){
      this.partida.ganador = false;
    }
    this.juego.partidas.push(this.partida);
    this.servicio.guardarJuego(this.juego).subscribe(data => {
      alert('Partida guardada.');
      this.router.navigate(['/listarJuegos']);
    });
  }

}
