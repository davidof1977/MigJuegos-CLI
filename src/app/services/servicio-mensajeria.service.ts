import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeriaService {

  private nombre = new Subject<string>();
  private mes = new Subject<string>();

    sendNombreJuego(nombre: string) {
      this.nombre.next(nombre);
    }

    sendMes(mes: string) {
      this.mes.next(mes);
    }

    clearMessages() {
        this.nombre.next();
        this.mes.next();
    }

    getNombre(): Observable<string> {
        return this.nombre.asObservable();
    }

    getMes(): Observable<string> {
      return this.mes.asObservable();
  }
}
