import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (true) { // e.g. if token exists, otherwise use incomming request.
        if (sessionStorage.getItem('usuario') !== null ){
          return next.handle(req.clone({
            setHeaders: {
                usuario: sessionStorage.getItem('usuario'),
            }
          }));
        }else{
          return next.handle(req.clone({
            setHeaders: {
                usuario: '',
            }
          }));
        }
      }
      else {
          return next.handle(req);
      }
  }
}
