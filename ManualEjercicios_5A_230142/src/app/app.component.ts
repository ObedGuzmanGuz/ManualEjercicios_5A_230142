import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';  // Asegúrate de importar RouterModule también
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';


import { BasicDatatableComponent } from './basic-datatable/basic-datatable.component';
import { OptionsDatatableComponent } from './options-datatable/options-datatable.component';
import { JsonDatatableComponent } from './json-datatable/json-datatable.component';
 import { AjaxDatatableComponent } from './ajax-datatable/ajax-datatable.component';

import { BasicDatagraphComponent } from './basic-datagraph/basic-datagraph.component';
import { OptionsDatagraphComponent } from './options-datagraph/options-datagraph.component';
import { AjaxDatagraphComponent } from './ajax-datagraph/ajax-datagraph.component';
import { JsonDatagraphComponent } from './json-datagraph/json-datagraph.component';


// import { NgxEchartsModule } from 'ngx-echarts';
 @Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    CommonModule,
    RouterModule,  // Agregar RouterModule aquí
    RouterOutlet,
    NavbarComponent,
    SidebarComponent,
    PageContentComponent,
    FooterComponent,
    BreadcrumbComponent,
    BasicDatatableComponent,OptionsDatatableComponent,
    JsonDatatableComponent,AjaxDatatableComponent,
    BasicDatagraphComponent,
    OptionsDatagraphComponent,
    AjaxDatagraphComponent,
    JsonDatagraphComponent,

    
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ManualEjercicios_5A_230142';
  constructor(public authService: AuthService) {}
  isSidebarVisible = true;

// toggleSidebar() {
//   this.isSidebarVisible = !this.isSidebarVisible;
// }

}
