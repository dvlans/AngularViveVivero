
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { SomosComponent } from './components/somos/somos.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'somos', component: SomosComponent },
  { path: 'tienda', component: TiendaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
