import { Routes } from '@angular/router';
import { PageContentComponent } from './components/page-content/page-content.component';
import { Ejercicio01Component } from './components/ejercicio01/ejercicio01.component';

export const routes: Routes = [
  { path: '', component: PageContentComponent }, // Página principal
  { path: 'ejercicio01', component: Ejercicio01Component }, // Ruta para Ejercicio 01
  { path: '**', redirectTo: '', pathMatch: 'full' } // Redirige rutas desconocidas al inicio
];
