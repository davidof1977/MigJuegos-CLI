import { DetallePartidaComponent } from './partidas/detalle-partida/detalle-partida.component';
import { PrincipalComponent } from './cuadromando/principal/principal.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { BuscarComponent } from './juegos/buscar/buscar.component';
import { AppComponent } from './app.component';
import { EditarComponent } from './juegos/editar/editar.component';
import { CrearComponent } from './juegos/crear/crear.component';
import { ListarComponent } from './juegos/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarPartidasComponent } from './partidas/listar-partidas/listar-partidas.component';
import { CrearPartidasComponent } from './partidas/crear-partidas/crear-partidas.component';
import { PruebasComponent } from './utilidades/pruebas/pruebas.component';


const routes: Routes = [
  {path: 'listarJuegos', component: ListarComponent},
  {path: 'nuevoJuego', component: CrearComponent},
  {path: 'editarJuego', component: EditarComponent},
  {path: 'listarPartidas/:juego', component: ListarPartidasComponent},
  {path: 'crearPartidas', component: CrearPartidasComponent},
  {path: 'listarPartidas', component: ListarPartidasComponent},
  {path: 'buscarJuego', component: BuscarComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'cuadromando', component: PrincipalComponent},
  {path: 'pruebas', component: PruebasComponent},
  {path: 'detallePartida', component: DetallePartidaComponent},
  { path: '**', redirectTo: 'estadisticas', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
