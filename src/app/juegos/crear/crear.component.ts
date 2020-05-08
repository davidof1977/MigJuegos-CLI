import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  juego: Juego = new Juego();
  constructor(private router: Router, private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    const nombreJuego = localStorage.getItem('nombreJuego');
    this.servicio.getJuego(nombreJuego).subscribe(j => {
      this.juego = j;
    });
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
    this.servicio.guardarJuego(this.juego).subscribe(data => {
      alert('Nuevo juego creado');
      this.router.navigate(['home']);
    });
  }
}
