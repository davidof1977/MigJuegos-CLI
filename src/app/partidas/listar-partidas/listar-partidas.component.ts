import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { Partida } from './../../model/partida';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-listar-partidas',
  templateUrl: './listar-partidas.component.html',
  styleUrls: ['./listar-partidas.component.css']
})
export class ListarPartidasComponent implements OnInit {

  partidas: Partida[];
  juego: string;
  constructor(private servicio: JuegosServiceService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.ruta.paramMap.subscribe(params => this.juego = params.get('juego'));
    this.listar(this.juego);
  }

  listar(juego: string){
    console.log('Juego ' + juego);
    this.servicio.getPartidas(juego).subscribe(p => this.partidas = p);
  }

}
