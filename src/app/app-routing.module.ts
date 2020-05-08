import { AppComponent } from './app.component';
import { EditarComponent } from './juegos/editar/editar.component';
import { CrearComponent } from './juegos/crear/crear.component';
import { ListarComponent } from './juegos/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPartidasComponent } from './partidas/listar-partidas/listar-partidas.component';
import { CrearPartidasComponent } from './partidas/crear-partidas/crear-partidas.component';


const routes: Routes = [
  {path: 'listarJuegos', component: ListarComponent},
  {path: 'nuevoJuego', component: CrearComponent},
  {path: 'editarJuego', component: EditarComponent},
  {path: 'listarPartidas/:juego', component: ListarPartidasComponent},
  {path: 'crearPartidas', component: CrearPartidasComponent},
  {path: 'listarPartidas', component: ListarPartidasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
