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

  p = 1;
  pageSize = 5;
  partidas: Partida[];
  juego: string;
  tipo: string;
  constructor(private servicio: JuegosServiceService, private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    // tslint:disable-next-line:no-string-literal
    this.ruta.paramMap.subscribe(params => this.juego = params.get('juego'));
    this.tipo = localStorage.getItem('tipo');
    if (this.tipo === 'ganadas'){
      this.listaPartidasGanadas();
    }else if (this.tipo === 'todas'){
      this.listaTodasPartidas();
    }else{
      this.listar(this.juego);
    }
    localStorage.removeItem('tipo');
  }

  listar(juego: string){
      this.servicio.getPartidas(juego).subscribe(p => {
        this.partidas = p;
        p.forEach(par => par.juego = this.juego);
      });
  }

  listaPartidasGanadas(){
    this.servicio.getPartidasGanadas().subscribe(p => this.partidas = p);
  }

  listaTodasPartidas(){
    this.servicio.getTodasPartidas().subscribe(p => this.partidas = p);
  }

  serializarPartida(partida: Partida){
    localStorage.setItem('partida', JSON.stringify(partida));
  }

}
