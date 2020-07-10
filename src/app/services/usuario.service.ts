import { Usuario } from './../model/usuario';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

   url = 'http://localhost:9083/misjuegos/api';
  // url = 'https://mis-juegos-davidof1977.herokuapp.com/misjuegos/api';

  validarUsuario(usuario: string, password: string){
    const api = 'login';

    return this.http.get<boolean>(this.url + '/' + api + '/' + usuario, {
      headers: new HttpHeaders().set('password', password),
    });
  }

  registrarUsuario(usuario: Usuario){
    const api = 'registro';
    return this.http.post<Usuario>(this.url + '/' + api, usuario);
  }

  logout() {
    // remove user from local storage to log user out
    sessionStorage.removeItem('usuario');
}

}
