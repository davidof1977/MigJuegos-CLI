import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { Juego } from 'src/app/model/juego';
import { Subject, Observable } from 'rxjs';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';

@Component({
  selector: 'app-margen',
  templateUrl: './margen.component.html',
  styleUrls: ['./margen.component.css']
})
export class MargenComponent implements OnInit {

  buscarControl = new FormControl('');
  mes = new FormControl('');
  juegos: Juego[];
  errorMessage: string;
  constructor(private servicio: JuegosServiceService, private mensajeria: ServicioMensajeriaService) { }

  ngOnInit(): void {
    this.errorMessage = '';
    const fechaActual = new Date();
    const month = '0' + (fechaActual.getMonth() + 1);
    this.mes.setValue(fechaActual.getFullYear() + '-' + month.slice(-2));
    this.buscarControl.valueChanges
    .pipe(debounceTime(200))
    .subscribe(value => {
      if (value !== ''){
        this.servicio.buscarJuegos('.*' + value + '.*').subscribe(j => {
          if (j instanceof Array){
            this.errorMessage = '';
            this.juegos = j as Juego[];
          }else{
            this.errorMessage = this.errorMessage.concat(j as string);
            this.juegos = undefined;
          }
        });
      }
    });
  }

  dameJuego(nombre: string){
    this.mensajeria.sendNombreJuego(nombre);
    this.mensajeria.sendMes(this.mes.value);
  }

  emitirMes(){
    this.mensajeria.sendMes(this.mes.value);
  }

}
