import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeriaService {

  private nombre = new Subject<string>();
  private mes = new Subject<string>();
  private usuario = new Subject<string>();

    sendNombreJuego(nombre: string) {
      this.nombre.next(nombre);
    }

    sendUsuario(nombre: string) {
      this.usuario.next(nombre);
    }

    sendMes(mes: string) {
      this.mes.next(mes);
    }

    clearMessages() {
        this.nombre.next();
        this.mes.next();
        this.usuario.next();
    }

    getNombre(): Observable<string> {
        return this.nombre.asObservable();
    }

    getMes(): Observable<string> {
      return this.mes.asObservable();
  }

  getUsuario(): Observable<string> {
    return this.usuario.asObservable();
  }
}
