import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import { APP_ROUTING } from './app.routes';


//Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import {ContactoComponent} from './components/contacto/contacto.component';
import {FooterComponent} from './components/footer/footer.component';
import {M2o2Component} from './components/m2o2/m2o2.component';
import {ProyectosComponent} from './components/proyectos/proyectos.component';
import {SomosComponent} from './components/somos/somos.component';
import {TiendaComponent} from './components/tienda/tienda.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactoComponent,
    FooterComponent,
    M2o2Component,
    ProyectosComponent,
    SomosComponent,
    TiendaComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
