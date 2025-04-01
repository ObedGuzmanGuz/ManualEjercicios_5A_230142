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
import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { OptionsDatatableComponent } from './options-datatable/options-datatable.component';
import { JsonDatatableComponent } from './json-datatable/json-datatable.component';
import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';
import { BasicDatagraphComponent } from './basic-datagraph/basic-datagraph.component';
import { OptionsDatagraphComponent } from './options-datagraph/options-datagraph.component';
import { JsonDatagraphComponent } from './json-datagraph/json-datagraph.component';
import { AjaxDatagraphComponent } from './ajax-datagraph/ajax-datagraph.component';

export const routes: Routes = [
  { 
    path: '', 
    component: PageContentComponent, 
    pathMatch: 'full',
    data: { breadcrumb: 'Inicio' } 
  },
  { 
    path: 'ejercicio1', 
    component: Ejercicio01Component,
    data: { breadcrumb: 'Components in Angular' } 
  },
  { 
    path: 'ejercicio2', 
    component: Ejercicio02Component,
    data: { breadcrumb: 'Component Class' } 
  },
  { 
    path: 'ejercicio3', 
    component: Ejercicio03Component,
    data: { breadcrumb: 'Composing Components' } 
  },
  { 
    path: 'ejercicio4', 
    component: Ejercicio04Component,
    data: { breadcrumb: 'Control Flow @if' } 
  },
  { 
    path: 'ejercicio5', 
    component: Ejercicio05Component,
    data: { breadcrumb: 'Control Flow @for' } 
  },
  { 
    path: 'ejercicio6', 
    component: Ejercicio06Component,
    data: { breadcrumb: 'Property Binding' } 
  },
  { 
    path: 'ejercicio7', 
    component: Ejercicio07Component,
    data: { breadcrumb: 'Event Handling' } 
  },
  { 
    path: 'ejercicio8', 
    component: Ejercicio08Component,
    data: { breadcrumb: '@Input Communication' } 
  },
  { 
    path: 'ejercicio9', 
    component: Ejercicio09Component,
    data: { breadcrumb: '@Output Communication' } 
  },
  { 
    path: 'ejercicio10', 
    component: Ejercicio10Component,
    data: { breadcrumb: 'Deferrable Views' } 
  },
  { 
    path: 'ejercicio11', 
    component: Ejercicio11Component,
    data: { breadcrumb: 'Image Optimization' } 
  },
  { 
    path: 'ejercicio12', 
    component: Ejercicio12Component,
    data: { breadcrumb: 'Routing Overview' } 
  },
  { 
    path: 'tareas', 
    component: BasicDatatableComponent,
    data: { breadcrumb: 'Tabla Básica' } 
  },
  { 
    path: 'tareas2', 
    component: OptionsDatatableComponent,
    data: { breadcrumb: 'Tabla Options' } 
  },
  { 
    path: 'tareas3', 
    component: JsonDatatableComponent,
    data: { breadcrumb: 'Tabla JSON' } 
  },
  { 
    path: 'tareas4', 
    component: AjaxDatatableComponent,
    data: { breadcrumb: 'Tabla AJAX' } 
  },
  { 
    path: 'tareas5', 
    component: BasicDatagraphComponent,
    data: { breadcrumb: 'Gráfica Básica' } 
  },
  { 
    path: 'tareas6', 
    component: OptionsDatagraphComponent,
    data: { breadcrumb: 'Gráfica Options' } 
  },
  { 
    path: 'tareas7', 
    component: JsonDatagraphComponent,
    data: { breadcrumb: 'Gráfica JSON' } 
  },
  { 
    path: 'tareas8', 
    component: AjaxDatagraphComponent,
    data: { breadcrumb: 'Gráfica AJAX' } 
  },
  { 
    path: '**', 
    redirectTo: '',
    data: { breadcrumb: 'Inicio' } 
  }
];