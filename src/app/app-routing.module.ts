import { AppComponent } from './app.component';
import { EditarComponent } from './juegos/editar/editar.component';
import { CrearComponent } from './juegos/crear/crear.component';
import { ListarComponent } from './juegos/listar/listar.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'crear', component: CrearComponent},
  {path: 'editar', component: EditarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
