import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { ListaJuegosUsuarioComponent } from './bgg/lista-juegos-usuario/lista-juegos-usuario.component';
import { HotnessComponent } from './bgg/hotness/hotness.component';
import { EstadisticasPersonalesComponent } from './estadisticas-personales/estadisticas-personales.component';
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
import { DetalleJuegoComponent } from './bgg/detalle-juego/detalle-juego.component';


const routes: Routes = [
  {path: 'listarJuegos', component: ListarComponent, canActivate: [AuthGuardService] },
  {path: 'nuevoJuego', component: CrearComponent, canActivate: [AuthGuardService]},
  {path: 'editarJuego/:juego', component: EditarComponent, canActivate: [AuthGuardService]},
  {path: 'listarPartidas/:juego', component: ListarPartidasComponent, canActivate: [AuthGuardService]},
  {path: 'crearPartidas', component: CrearPartidasComponent, canActivate: [AuthGuardService]},
  {path: 'listarPartidas', component: ListarPartidasComponent, canActivate: [AuthGuardService]},
  {path: 'buscarJuego', component: BuscarComponent, canActivate: [AuthGuardService]},
  {path: '', component: EstadisticasComponent, canActivate: [AuthGuardService]},
  {path: 'cuadromando', component: PrincipalComponent, canActivate: [AuthGuardService]},
  {path: 'pruebas', component: PruebasComponent, canActivate: [AuthGuardService]},
  {path: 'detallePartida', component: DetallePartidaComponent, canActivate: [AuthGuardService]},
  {path: 'estadisticasPersonales', component: EstadisticasPersonalesComponent, canActivate: [AuthGuardService]},
  {path: 'hotness', component: HotnessComponent, canActivate: [AuthGuardService]},
  {path: 'detalleJuegoBGG/:idJuego', component: DetalleJuegoComponent, canActivate: [AuthGuardService]},
  {path: 'listasJuegosAmigosBGG', component: ListaJuegosUsuarioComponent, canActivate: [AuthGuardService]},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},

  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
