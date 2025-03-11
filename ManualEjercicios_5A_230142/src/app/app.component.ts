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
    BreadcrumbComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public authService: AuthService) {}

  title = 'ManualEjercicios_5A_230142';
}
