
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { SidevarComponent } from './sidevar/sidevar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatStepperModule} from '@angular/material/stepper';
import {FormBuilder, Validators, FormControl, FormGroupDirective, NgForm} from '@angular/forms';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ListadoComponent } from './listado/listado.component';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { ActuusuarioComponent } from './actualizar/actuusuario/actuusuario.component';
import { EliminarusuarioComponent } from './eliminar/eliminarusuario/eliminarusuario.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { RegistrotareaComponent } from './registrotarea/registrotarea.component';
import {MatSelectModule} from '@angular/material/select';
import { ListadotareasComponent } from './listadotareas/listadotareas.component';
import {MatExpansionModule} from '@angular/material/expansion';










@NgModule({
  declarations: [
    AppComponent,
    SidevarComponent,
    RegistroComponent,
    InicioComponent,
    ListadoComponent,
    ActuusuarioComponent,
    EliminarusuarioComponent,
    RegistrotareaComponent,
    ListadotareasComponent,









  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDividerModule,
    SweetAlert2Module,
    MatSelectModule,
    MatExpansionModule,




  ],
  providers: [FormBuilder,],
  bootstrap: [AppComponent]
})
export class AppModule { }
