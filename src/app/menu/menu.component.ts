import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  navegarColeccion(){
    localStorage.setItem('origenPeticion', 'listadoColeccion');
  }

  navegarDeseos(){
    localStorage.setItem('origenPeticion', 'listadoDeseos');
  }

  navegarSeguimiento(){
    localStorage.setItem('origenPeticion', 'listadoSeguimiento');
  }

  navegarGanadas(){
    localStorage.setItem('tipo', 'ganadas');
  }

  navegarTodas(){
    localStorage.setItem('tipo', 'todas');
  }
}
