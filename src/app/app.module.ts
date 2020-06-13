import { BuscarComponent } from './juegos/buscar/buscar.component';
import { JuegosServiceService } from './services/juegos-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './juegos/listar/listar.component';
import { CrearComponent } from './juegos/crear/crear.component';
import { EditarComponent } from './juegos/editar/editar.component';
import { ListarPartidasComponent } from './partidas/listar-partidas/listar-partidas.component';
import { CrearPartidasComponent } from './partidas/crear-partidas/crear-partidas.component';
import { MenuComponent } from './menu/menu.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import {NgxPaginationModule} from 'ngx-pagination';
import { PrincipalComponent } from './cuadromando/principal/principal.component';
import { CuerpoComponent } from './cuadromando/cuerpo/cuerpo.component';
import { MargenComponent } from './cuadromando/margen/margen.component';
import { PieComponent } from './cuadromando/pie/pie.component';
import { ServicioMensajeriaService } from './services/servicio-mensajeria.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './utilidades/toast/toast.component';
import { PruebasComponent } from './utilidades/pruebas/pruebas.component';
import { DetallePartidaComponent } from './partidas/detalle-partida/detalle-partida.component';
import { EstadisticasPersonalesComponent } from './estadisticas-personales/estadisticas-personales.component';
import { HotnessComponent } from './bgg/hotness/hotness.component';
import { DetalleJuegoComponent } from './bgg/detalle-juego/detalle-juego.component';
registerLocaleData(localeES, 'es');

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent,
    ListarPartidasComponent,
    CrearPartidasComponent,
    MenuComponent,
    BuscarComponent,
    EstadisticasComponent,
    PrincipalComponent,
    CuerpoComponent,
    MargenComponent,
    PieComponent,
    ToastComponent,
    PruebasComponent,
    DetallePartidaComponent,
    EstadisticasPersonalesComponent,
    HotnessComponent,
    DetalleJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgbModule
  ],
  providers: [JuegosServiceService, ServicioMensajeriaService,  { provide: LOCALE_ID, useValue: 'es-ES' }, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
