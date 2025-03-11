import { Component, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../auth.service';

declare function initFlowbite(): void; // Declara la función

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object // Detecta si es navegador o servidor
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      initFlowbite(); // Solo ejecuta si está en el navegador
    }
  }

  logout() {
    this.authService.logout();
  }
}
