import { JuegosServiceService } from './services/juegos-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './juegos/listar/listar.component';
import { CrearComponent } from './juegos/crear/crear.component';
import { EditarComponent } from './juegos/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    CrearComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [JuegosServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
