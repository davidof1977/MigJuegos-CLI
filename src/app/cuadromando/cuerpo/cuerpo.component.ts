import { Component, OnInit, OnDestroy } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cuerpo',
  templateUrl: './cuerpo.component.html',
  styleUrls: ['./cuerpo.component.css']
})
export class CuerpoComponent implements OnInit, OnDestroy{

  juego: Juego;

  subscription: Subscription;

  constructor(private servicio: JuegosServiceService, private mensajeria: ServicioMensajeriaService) {
    this.subscription = this.mensajeria.getMessage().subscribe(nombre => {
      if (nombre) {
        this.servicio.getJuego(nombre).subscribe(j => this.juego = j);
      }
    });
  }

  ngOnInit(): void {

  }

  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}

}
