import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

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

  constructor() {
    this.numero = 0;
   }

  ngOnInit(): void {
  this.cajaTexto = new FormControl('');
  this.cajaTexto.valueChanges.pipe().subscribe(dato => this.textoCopiado = dato);

  this.eventoRuedaRaton();
  this.eventoMouseMove();
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