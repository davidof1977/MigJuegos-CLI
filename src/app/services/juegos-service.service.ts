import { Juego } from './../model/juego';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  nuevoJuego(juego: Juego){
    const api = 'juegos';
    return this.http.post<Juego>(this.url + '/' + api, juego);
  }
}
