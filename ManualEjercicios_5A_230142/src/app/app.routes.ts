import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageContentComponent } from './components/page-content/page-content.component';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
import { Ejercicio02Component } from './ejercicio02/ejercicio02.component';
import { Ejercicio03Component } from './ejercicio03/ejercicio03.component';
import { Ejercicio04Component } from './ejercicio04/ejercicio04.component';
import { Ejercicio05Component } from './ejercicio05/ejercicio05.component';
import { Ejercicio06Component } from './ejercicio06/ejercicio06.component';
import { Ejercicio07Component } from './ejercicio07/ejercicio07.component';
import { Ejercicio08Component } from './ejercicio08/ejercicio08.component';
import { Ejercicio09Component } from './ejercicio09/ejercicio09.component';
import { Ejercicio10Component } from './ejercicio10/ejercicio10.component';
import { Ejercicio11Component } from './ejercicio11/ejercicio11.component';
import { Ejercicio12Component } from './ejercicio12/ejercicio12.component';

export const routes: Routes = [
  { path: '', component: PageContentComponent, pathMatch: 'full' },
  { path: 'ejercicio1', component: Ejercicio01Component },
  { path: 'ejercicio2', component: Ejercicio02Component },
  { path: 'ejercicio3', component: Ejercicio03Component },
  { path: 'ejercicio4', component: Ejercicio04Component },
  { path: 'ejercicio5', component: Ejercicio05Component },
  { path: 'ejercicio6', component: Ejercicio06Component },
  { path: 'ejercicio7', component: Ejercicio07Component },
  { path: 'ejercicio8', component: Ejercicio08Component },
  { path: 'ejercicio9', component: Ejercicio09Component },
  { path: 'ejercicio10', component: Ejercicio10Component },
  { path: 'ejercicio11', component: Ejercicio11Component },
  { path: 'ejercicio12', component: Ejercicio12Component },
  
  { path: '**', redirectTo: '' }
];
