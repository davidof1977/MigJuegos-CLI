import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Juego } from 'src/app/model/juego';
import { Router, ActivatedRoute } from '@angular/router';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  controlNombre = new FormControl('', [Validators.required]);
  juego: Juego = new Juego();
  nombreJuego: string;
  partidasJugadas = 0;
  partidasGanadas = 0;
  maximaPuntuacion = 0;

  constructor(private router: Router, private servicio: JuegosServiceService,
              private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => this.nombreJuego = params.get('juego'));
    if(this.nombreJuego != null){
      this.servicio.getJuego(this.nombreJuego).subscribe(j => {
        this.juego = j;
        if (j.partidas !== null){
          this.partidasGanadas = j.partidas.filter(p => p.ganador === true).length;
          this.partidasJugadas = j.partidas.length;
          this.maximaPuntuacion = j.partidas.reduce((a, c) => a.puntos > c.puntos ? a : c).puntos;
        }
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
