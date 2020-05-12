import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioMensajeriaService {

  private subject = new Subject<string>();

    sendMessage(message: string) {
        this.subject.next(message);
    }

    clearMessages() {
        this.subject.next();
    }

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
