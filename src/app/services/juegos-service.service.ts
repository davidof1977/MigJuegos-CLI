import { Juego } from './../model/juego';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Partida } from '../model/partida';

@Injectable({
  providedIn: 'root'
})
export class JuegosServiceService {

  constructor(private http: HttpClient) { }

  url = 'http://localhost:9083/misjuegos/api';

  getJuegos(){
    const api = 'juegos';
    return this.http.get<Juego[]>(this.url + '/' + api);
  }

  buscarJuegos(regex: string){
    const api = 'juegos/buscar';
    return this.http.get<Juego[]>(this.url + '/' + api + '/' + regex);
  }

  getJuegosEnColeccion(){
    const api = 'juegos/coleccion';
    return this.http.get<Juego[]>(this.url + '/' + api);
  }

  getJuegosSeguimiento(){
    const api = 'juegos/seguimiento';
    return this.http.get<Juego[]>(this.url + '/' + api);
  }

  getJuegosListaDeseos(){
    const api = 'juegos/listaDeseos';
    return this.http.get<Juego[]>(this.url + '/' + api);
  }

  guardarJuego(juego: Juego){
    const api = 'juegos';
    return this.http.post<Juego>(this.url + '/' + api, juego);
  }

  getPartidas(juego: string){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/' + juego + '/partidas');
  }

  getPartidasJuegoGanadas(juego: string){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/' + juego + '/ganadas');
  }

  getJuego(nombre: string){
    const api = 'juegos';
    return this.http.get<Juego>(this.url + '/' + api + '/' + nombre);
  }

  getTodasPartidas(){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/partidas');
  }

  getPartidasGanadas(){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/partidas/ganadas');
  }

  getPartidasMes(mes: string){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/partidas/' + mes);
  }
}
