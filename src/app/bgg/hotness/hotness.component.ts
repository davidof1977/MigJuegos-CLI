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
  hotlist: HotList[];
  constructor(private servicio: JuegosServiceService) { }

  ngOnInit(): void {
    this.servicio.getTheHotListBgg().subscribe(lista => {
      this.hotlist = lista;
    });
  }

}
