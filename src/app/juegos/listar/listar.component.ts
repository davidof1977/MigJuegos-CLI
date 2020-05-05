import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { stringify } from 'querystring';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  juegos: Juego[];
  constructor(private service: JuegosServiceService, private router: Router) { }

  ngOnInit(): void {
    this.service.getJuegos().subscribe(data => this.juegos = data);
  }

  nuevaPartida(juego: string){
    this.router.navigate(['/crearPartidas', juego]);
  }

}
