import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {

  buscarControl = new FormControl('');
  juegos: Juego[];
  suscripcion: Subscription;

  constructor(private servicio: JuegosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.juegos = new Array();
    const juego = new Juego();
    juego.nombre = '';
    this.juegos.push(juego);
    this.suscripcion = this.buscarControl.valueChanges
    .pipe(debounceTime(500))
    .subscribe(value => {
      if (value !== ''){
        this.servicio.buscarJuegos('.*' + value + '.*').subscribe(j => {
          if (j != null) {
            this.juegos = j;
          }
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  nuevaPartida(juego: string){
    // this.router.navigate(['/crearPartidas', juego]);
    localStorage.setItem('nombreJuego', juego);
    this.router.navigate(['/crearPartidas']);
  }

  partidasJuego(juego: string){
    this.router.navigate(['/listarPartidas', juego]);
  }
}
