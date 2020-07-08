import { BggGame } from './../../model/bggGame';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-detalle-juego',
  templateUrl: './detalle-juego.component.html',
  styleUrls: ['./detalle-juego.component.css']
})
export class DetalleJuegoComponent implements OnInit {

  constructor(private ruta: ActivatedRoute, private servicio: JuegosServiceService) { }

  idJuego: string;
  bggJuego: any;
  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => this.idJuego = params.get('idJuego'));
    this.servicio.getBggGame(+this.idJuego).subscribe(juego => {
      this.bggJuego = juego;
      console.log(this.bggJuego.name);
    });


  }

}
