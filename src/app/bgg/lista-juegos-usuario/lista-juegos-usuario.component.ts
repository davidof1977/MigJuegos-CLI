import { Subscription } from 'rxjs';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { stringify } from 'querystring';

@Component({
  selector: 'app-lista-juegos-usuario',
  templateUrl: './lista-juegos-usuario.component.html',
  styleUrls: ['./lista-juegos-usuario.component.css']
})
export class ListaJuegosUsuarioComponent implements OnInit, OnDestroy  {

  listaJuegos: any;
  buscarControl = new FormControl('');
  errorMessage: string;
  inicializacion = true;
  suscripcion: Subscription;

  constructor(private servicio: JuegosServiceService) {
    if (localStorage.getItem('listaJuegosUsuarioBGG') != null){
      this.listaJuegos = JSON.parse(localStorage.getItem('listaJuegosUsuarioBGG'));
      this.inicializacion = false;
    }
   }

  ngOnInit(): void {


    this.errorMessage = '';
    this.suscripcion = this.buscarControl.valueChanges
    .pipe(debounceTime(1000))
    .subscribe(value => {
      if (value !== ''){
        this.servicio.getXMLBggUsersCollection(value).subscribe(xml => {
          console.log(xml);
          const parseString = require('xml2js').parseString;
          parseString(xml, (err, result) => {
          this.listaJuegos = result;
          this.inicializacion = false;
          localStorage.setItem('listaJuegosUsuarioBGG', JSON.stringify(this.listaJuegos));
          });
        });
      }
    });
    console.log(this.listaJuegos.items.item[1].$);

  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }
}
