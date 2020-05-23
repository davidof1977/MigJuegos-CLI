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
  partidasJugadas: number;
  partidasGanadas: number;
  juego: string;
  tipo: string;
  constructor(private servicio: JuegosServiceService, private ruta: ActivatedRoute,
              private router: Router) { }

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
        this.partidasJugadas = p.length;
        this.partidasGanadas = p.filter(partida => partida.ganador === true).length;
        p.forEach(par => par.juego = this.juego);
      });
  }

  listaPartidasGanadas(){
    this.servicio.getPartidasGanadas().subscribe(p => {
      this.partidas = p;
      this.partidasGanadas = p.filter(partida => partida.ganador === true).length;
    });
  }

  listaTodasPartidas(){
    this.servicio.getTodasPartidas().subscribe(p => {
      this.partidas = p;
      this.partidasJugadas = p.length;
      this.partidasGanadas = p.filter(partida => partida.ganador === true).length;
    });
  }

  serializarPartida(partida: Partida){
    localStorage.setItem('partida', JSON.stringify(partida));
  }

  eliminar(posicion: number){
    if(this.p > 1){
      posicion = posicion + ((this.p - 1) * this.pageSize);
    }
    console.log(posicion);

    this.servicio.getJuego(this.juego).subscribe(j => {
      j.partidas.sort((f1, f2) => f1.fecha.localeCompare(f2.fecha));
      j.partidas.splice(posicion, 1);
      this.servicio.guardarJuego(j).subscribe(o => {
        this.listar(this.juego);
      });
    });
  }

}
