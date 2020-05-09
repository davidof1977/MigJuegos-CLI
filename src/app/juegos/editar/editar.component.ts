import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Juego } from 'src/app/model/juego';
import { Router } from '@angular/router';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  controlNombre = new FormControl('', [Validators.required]);
  juego: Juego = new Juego();
  constructor(private router: Router, private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    const nombreJuego = localStorage.getItem('nombreJuego');
    if(nombreJuego != null){
      this.servicio.getJuego(nombreJuego).subscribe(j => {
        this.juego = j;
      });
    }

  }

  guardar(){
    if (!this.juego.enColeccion){
      this.juego.enColeccion = false;
    }
    if (!this.juego.enSeguimiento){
      this.juego.enSeguimiento = false;
    }
    if (!this.juego.enListaDeseos){
      this.juego.enListaDeseos = false;
    }
    this.juego.img = 'assets/img/' + this.juego.img;
    this.servicio.guardarJuego(this.juego).subscribe(data => {
      alert('Nuevo juego creado');
    });
  }

}
