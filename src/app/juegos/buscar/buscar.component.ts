import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { stringify } from 'querystring';


@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit, OnDestroy {

  buscarControl = new FormControl('');
  juegos: Juego[];
  suscripcion: Subscription;
  errorMessage: string;
  inicializacion = true;
  constructor(private servicio: JuegosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.errorMessage = '';
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
            if (j instanceof Array){
              this.errorMessage = '';
              this.juegos = j as Juego[];
              this.inicializacion = false;
            }else{
              this.errorMessage = this.errorMessage.concat(j as string);
              this.juegos = undefined;
            }
          }
        });
      }
    });
  }
  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
  nuevaPartida(juego: string){
    console.log(this.errorMessage);

    // this.router.navigate(['/crearPartidas', juego]);
    localStorage.setItem('nombreJuego', juego);
    this.router.navigate(['/crearPartidas']);
  }

  partidasJuego(juego: string){
    this.router.navigate(['/listarPartidas', juego]);
  }
}
