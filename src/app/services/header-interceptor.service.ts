import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderInterceptorService implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('jwt') !== null ){
          return next.handle(req.clone({
            setHeaders: {
                authorization: localStorage.getItem('jwt'),
            }
          }));
        }else{
          return next.handle(req);
        }

  }
}
