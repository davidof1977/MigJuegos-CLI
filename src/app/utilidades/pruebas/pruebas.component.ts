import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  ejeX: number;
  ejeY: number;
  textoCopiado: string;
  cajaTexto: FormControl;
  numero: number;
  nombres: string[];
  suscripcion: Subscription;
  jugador: FormControl;
  seleccionado: string;

  constructor(private servicio: JuegosServiceService) {
    this.numero = 0;
   }

  ngOnInit(): void {
  this.cajaTexto = new FormControl('');
  this.cajaTexto.valueChanges.pipe().subscribe(dato => this.textoCopiado = dato);
  this.jugador = new FormControl('');
  this.suscripcion = this.jugador.valueChanges
  .pipe()
  .subscribe(value => {
    if (value !== ''){
      this.servicio.getJugadores('.*' + value + '.*').subscribe(j => {
        if (j.length > 1){
          this.nombres = j;
        }
      });
    }
  });
  this.eventoRuedaRaton();
  this.eventoMouseMove();
}

valorSeleccionado(env){
  console.log(this.jugador.value);
}

eventoMouseMove(){
  const el = document.getElementById('my-element');
  const mouseMoves = fromEvent(el, 'mousemove');
  const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
    // Log coords of mouse movements
    this.ejeX = evt.clientX;
    this.ejeY = evt.clientY;
    // When the mouse is over the upper-left of the screen,
    // unsubscribe to stop listening for mouse movements
    if (evt.clientX < 1 && evt.clientY < 1) {
      subscription.unsubscribe();
    }
  });
}

eventoRuedaRaton(): void{
  const el = document.getElementById('my-element');
  const mouseMoves = fromEvent(el, 'wheel');
  const subscription = mouseMoves.subscribe((evt: WheelEvent) => {
    // Log coords of mouse movements

    if(evt.deltaY  < 0){
      this.numero = this.numero + 1;
    }else{
      this.numero = this.numero - 1;
    }


    // When the mouse is over the upper-left of the screen,
    // unsubscribe to stop listening for mouse movements

  });
}

}
