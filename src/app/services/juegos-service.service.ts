import { Jugador } from './../model/jugador';
import { EstadisiticasJuego } from './../model/estadisticasJuego';
import { Juego } from './../model/juego';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Partida } from '../model/partida';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';

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
    return this.http.get(this.url + '/' + api + '/' + regex)
      .catch((err: HttpErrorResponse) => {
        return err.error.message as string;
      });
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
    const api = 'juegos/listadeseos';
    return this.http.get<Juego[]>(this.url + '/' + api);
  }

  guardarJuego(juego: Juego){
    const api = 'juegos';
    return this.http.post<Juego>(this.url + '/' + api, juego);
  }

  getPartidas(juego: string){
    const api = 'juegos';
    return this.http.get(this.url + '/' + api + '/' + juego + '/partidas')
    .catch((err: HttpErrorResponse) => {
      return err.error.message as string;
    });
  }

  getPartidasJuegoGanadas(juego: string){
    const api = 'juegos';
    return this.http.get(this.url + '/' + api + '/' + juego + '/ganadas')
    .catch((err: HttpErrorResponse) => {
      return err.error.message as string;
    });
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

  getPartidasMes(mes: number){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/partidas/mes/' + mes);
  }

  getPartidasAnio(anio: number){
    const api = 'juegos';
    return this.http.get<Partida[]>(this.url + '/' + api + '/partidas/anio/' + anio);
  }

  getJugadores(regex: string){
    const api = 'juegos/partidas/jugadores';
    return this.http.get<string[]>(this.url + '/' + api + '/' + regex);
  }

  eliminarJuego(nombre: string){
    const api = 'juegos';
    console.log(this.url + '/' + api + '/' + nombre);
    return this.http.delete<void>(this.url + '/' + api + '/' + nombre);
  }

  getEstadisticasJugadores(juego: string){
    const api = 'juegos/';
    return this.http.get<EstadisiticasJuego[]>(this.url + '/' + api + '/' + juego + '/estadisticas');
  }

  getRecordsJuego(juego: string){
    const api = 'juegos/';
    return this.http.get<Jugador>(this.url + '/' + api + '/' + juego + '/records');
  }
}
