import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-partidas',
  templateUrl: './crear-partidas.component.html',
  styleUrls: ['./crear-partidas.component.css']
})
export class CrearPartidasComponent implements OnInit {

  juego: string;
  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.ruta.paramMap.subscribe(params => this.juego = params.get('juego'));
  }

}
