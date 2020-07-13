import { Subscription } from 'rxjs';
import { UsuarioService } from './../services/usuario.service';
import { ServicioMensajeriaService } from 'src/app/services/servicio-mensajeria.service';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private route: Router, private servicio: JuegosServiceService,
              private mensajeria: ServicioMensajeriaService, private servicioUsuario: UsuarioService) { }
  usuario: string;
  subscriptionUsuario: Subscription;
  ngOnInit(): void {
    if (localStorage.getItem('usuario') !== null){
      this.usuario = localStorage.getItem('usuario');
    }
    this.subscriptionUsuario = this.mensajeria.getUsuario().subscribe(nombre => {
      if (nombre) {
        this.usuario = nombre;
      }
    });
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

  navegarNuevoJuego(){
    localStorage.removeItem('nombreJuego');
  }

  cerrarSesion(){
    this.servicioUsuario.logout();
    this.usuario = null;
    this.route.navigate(['/login']);
  }

}
