import { Juego } from './../../model/juego';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent implements OnInit {

  formGrupo: FormGroup;
  // controlNombre = new FormControl('', [Validators.required]);
  juego: Juego = new Juego();

  constructor(private router: Router, private servicio: JuegosServiceService) {
    this.formGrupo = new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      rutaImg: new FormControl(''),
      lista: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    const nombreJuego = localStorage.getItem('nombreJuego');
    if(nombreJuego != null){
      this.servicio.getJuego(nombreJuego).subscribe(j => {
        this.juego = j;
      });
    }

  }

  guardar(event: Event){
    event.preventDefault();
    if(!this.formGrupo.invalid){
      this.juego.img = 'assets/img/' + this.formGrupo.get('rutaImg').value;
      this.juego.nombre = this.formGrupo.get('nombre').value;
      this.juego.usuario = sessionStorage.getItem('usuario');
      if (this.formGrupo.get('lista').value === 'coleccion'){
        this.juego.enColeccion = true;
      }
      else if (this.formGrupo.get('lista').value === 'seguimiento'){
        this.juego.enSeguimiento = true;
      }else if (this.formGrupo.get('lista').value === 'deseos'){
        this.juego.enListaDeseos = true;
      }
      this.servicio.guardarJuego(this.juego).subscribe(data => {
        alert('Nuevo juego creado');
      });
    }else{
      this.formGrupo.markAllAsTouched();
    }
  }
}
