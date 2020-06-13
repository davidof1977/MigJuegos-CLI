import { EstadisiticasPersonales } from './../model/estadisticasPersonales';
import { Jugador } from './../model/jugador';
import { EstadisiticasJuego } from './../model/estadisticasJuego';
import { Juego } from './../model/juego';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Partida } from '../model/partida';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs';
import { ErrorPruebas } from '../model/errorPruebas';
import { HotList } from '../model/HotList';
import { BggGame } from '../model/bggGame';

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

  getEstadisticasPersonales(){
    const api = 'juegos/estadisticas/personales';
    return this.http.get<EstadisiticasPersonales[]>(this.url + '/' + api);
  }

  getRecordsJuego(juego: string){
    const api = 'juegos/';
    return this.http.get<Jugador>(this.url + '/' + api + '/' + juego + '/records');
  }

  getJuegosDistintosMes(mes: number){
    const api = 'juegos';
    return this.http.get<number>(this.url + '/' + api + '/partidas/distintos/mes/' + mes);
  }

  getJuegosDistintosAnio(anio: number){
    const api = 'juegos';
    return this.http.get<number>(this.url + '/' + api + '/partidas/distintos/anio/' + anio);
  }

  getMensajeError(){
    const api = 'juegos';
    return this.http.get<ErrorPruebas>(this.url + '/' + api + '/errorpruebas');
  }

  getTheHotListBgg(){
    const api = 'http://bgg-json.azurewebsites.net/hot';
    return this.http.get<HotList[]>(api);
  }

  getBggGame(id: number){
    console.log(id);

    const api = '	http://bgg-json.azurewebsites.net/thing';
    return this.http.get<BggGame>(api + '/' + id);
  }

}
