import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-page-content',
  standalone: true,
  imports: [CommonModule, MatButtonModule], // Importa el módulo de botones
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent {
  constructor(public authService: AuthService) {}

  logout() {
    // Implementa la lógica de cierre de sesión aquí, como limpiar la sesión, redirigir a la página de login, etc.
    this.authService.logout(); // Asegúrate de que el servicio limpie el estado
    window.location.reload();
  }
}
