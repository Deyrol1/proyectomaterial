import { Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListadoComponent } from './listado/listado.component';

const routes: Routes = [{ path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: 'registro',
    component: RegistroComponent,
  },
  {
    path: 'inicio',
    component: InicioComponent,
  },
  {
    path: 'listado',
    component: ListadoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
