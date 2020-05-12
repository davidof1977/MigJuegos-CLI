import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  origenPeticion: string;
  juegos: Juego[];
  p = 1;
  pageSize = 5;

  constructor(private service: JuegosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.origenPeticion = localStorage.getItem('origenPeticion');
    // tslint:disable-next-line:align

    if (this.origenPeticion === 'listadoColeccion'){
      this.service.getJuegosEnColeccion().subscribe(data => this.juegos = data);
    }else if (this.origenPeticion === 'listadoSeguimiento'){
      this.service.getJuegosSeguimiento().subscribe(data => this.juegos = data);
    }else if (this.origenPeticion === 'listadoDeseos'){
      this.service.getJuegosListaDeseos().subscribe(data => this.juegos = data);
    }else{
      this.service.getJuegos().subscribe(data => this.juegos = data);
    }
    localStorage.removeItem('origenPeticion');
  }

  nuevaPartida(juego: string){
    // this.router.navigate(['/crearPartidas', juego]);
    localStorage.setItem('nombreJuego', juego);
    this.router.navigate(['/crearPartidas']);
  }

  editarJuego(juego: string){
    localStorage.setItem('nombreJuego', juego);
    this.router.navigate(['/editarJuego']);
  }

}
