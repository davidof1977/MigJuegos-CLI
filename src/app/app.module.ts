import { BuscarComponent } from './juegos/buscar/buscar.component';
import { JuegosServiceService } from './services/juegos-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    EstadisticasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [JuegosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
