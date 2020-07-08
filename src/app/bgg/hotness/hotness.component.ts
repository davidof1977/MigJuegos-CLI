import { HotList } from './../../model/HotList';
import { JuegosServiceService } from 'src/app/services/juegos-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotness',
  templateUrl: './hotness.component.html',
  styleUrls: ['./hotness.component.css']
})
export class HotnessComponent implements OnInit {
  filas = [1, 2, 3, 4, 5];
  hotlist1: HotList[];
  hotlist2: HotList[];
  hotlist3: HotList[];
  constructor(private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    this.servicio.getTheHotListBgg().subscribe(lista => {
      const numJuegos = lista.length;
      this.hotlist1 = new Array();
      this.hotlist2 = new Array();
      this.hotlist3 = new Array();
      lista.forEach((juego, posicion) => {
        posicion++;
        if (posicion % 3 === 0){
          this.hotlist3.push(juego);
        }else if (posicion % 2 === 0){
          this.hotlist2.push(juego);
        }else{
          this.hotlist1.push(juego);
        }
      });
      console.log(this.hotlist1);
      console.log(this.hotlist2);
      console.log(this.hotlist3);

    });
  }

}
