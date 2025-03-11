import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PageContentComponent } from './components/page-content/page-content.component';
import { Ejercicio01Component } from './ejercicio01/ejercicio01.component';
export const routes: Routes = [
  { path: '', component: PageContentComponent, pathMatch: 'full' },
  { path: 'ejercicio1', component: Ejercicio01Component },
  { path: '**', redirectTo: '' }
];
