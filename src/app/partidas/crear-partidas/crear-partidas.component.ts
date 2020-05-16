import { Subscription } from 'rxjs';
import { Partida } from './../../model/partida';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { ToastService } from './../../services/toast.service';
import { JuegosServiceService } from './../../services/juegos-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { Juego } from 'src/app/model/juego';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-crear-partidas',
  templateUrl: './crear-partidas.component.html',
  styleUrls: ['./crear-partidas.component.css']
})
export class CrearPartidasComponent implements OnInit {

  nombreJuego: string;
  juego: Juego;
  partida: Partida;
  index: number;
  submitted = false;
  formularioDinamico: FormGroup;
  suscripcion: Subscription;

  constructor(private ruta: ActivatedRoute,
              private servicio: JuegosServiceService,
              private router: Router,
              public toastService: ToastService,
              private fb: FormBuilder) { }


  ngOnInit(): void {
    this.index = 0;
    // this.ruta.paramMap.subscribe(params => this.nombreJuego = params.get('juego'));
    this.nombreJuego = localStorage.getItem('nombreJuego');
    this.partida = new Partida();
    this.servicio.getJuego(this.nombreJuego).subscribe(j => {
      this.juego = j;
      if (this.juego.partidas == null){
        const partidas: Partida[] = new Array();
        this.juego.partidas = partidas;
      }
    });
    this.crearFormulario();
  }
  crearFormulario() {
    this.formularioDinamico = this.fb.group({
      fecha: new FormControl('', [Validators.required]),
      puntos: new FormControl('', [Validators.required]),
      ganador: new FormControl(''),
      nuevoJugador: new FormArray([])
    });
  }

  get f() { return this.formularioDinamico.controls; }
  get j() { return this.f.nuevoJugador as FormArray; }
  get getFormularioDinamico(): FormArray {
    return this.formularioDinamico.get('nuevoJugador') as FormArray;
  }

  addNuevoJugador(event: Event){
    event.preventDefault();
    const jugador = this.fb.group({
      nombre: new FormControl('', [Validators.required]),
      puntosJugador: new FormControl('', [Validators.required])
    });
    this.getFormularioDinamico.push(jugador);

    this.suscripcion = jugador.get('nombre').valueChanges
    .pipe()
    .subscribe(value => {
      if (value !== ''){
        this.servicio.getJugadores('.*' + value + '.*').subscribe(j => {
          if (j.length === 1){
            jugador.get('nombre').setValue(j[0]);
          }
        });
      }
    });
  }


  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formularioDinamico.invalid) {
        this.formularioDinamico.markAllAsTouched();
        return;
    }

    // display form values on success
    console.log(JSON.stringify(this.formularioDinamico.value, null, 4));
    this.guardarPartida();
}

  onBlurEvento(){
    this.suscripcion.unsubscribe();
  }

  guardarPartida(){
    this.partida = new Partida();
    if (this.formularioDinamico.get('ganador').value === ''){
      this.partida.ganador = false;
    }else{
      this.partida.ganador = this.formularioDinamico.get('ganador').value;
    }

    this.partida.fecha = this.formularioDinamico.get('fecha').value;
    this.partida.puntos = this.formularioDinamico.get('puntos').value;
    this.partida.jugadores = this.formularioDinamico.get('nuevoJugador').value;

    this.juego.partidas.push(this.partida);
    this.servicio.guardarJuego(this.juego).subscribe(data => {
      this.toastService.show('Partida guardada con exito', {
        delay: 2000,
        autohide: true,
        classname: 'bg-success text-light',
        headertext: 'Partida guardada'
      });

      this.router.navigate(['/listarJuegos']);
    });
  }
}
