import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router'; // 🔹 Importa RouterModule

@Component({
  selector: 'app-navbar',
  standalone: true,  
  imports: [RouterModule],  
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit {
  
  constructor(
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: object,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initNavbar();
    }
  }

  logout() {
    // Llama al método de logout del AuthService y redirige al login
    this.authService.logout();  // Se asume que este método elimina el token o estado de autenticación
    this.router.navigate(['/login']); // Redirige a la página de login
  }

  // Navegación a Ejercicio 1
  navigateToEjercicio1() {
    this.router.navigate(['/ejercicio1']);
  }
  navigateToEjercicio2() {
    this.router.navigate(['/ejercicio2']);
  }
  navigateToEjercicio3() {
    this.router.navigate(['/ejercicio3']);
  }
  navigateToEjercicio4() {
    this.router.navigate(['/ejercicio4']);
  }
  navigateToEjercicio5() {
    this.router.navigate(['/ejercicio5']);
  }
  navigateToEjercicio6() {
    this.router.navigate(['/ejercicio6']);
  }
  navigateToEjercicio7() {
    this.router.navigate(['/ejercicio7']);
  }
  navigateToEjercicio8() {
    this.router.navigate(['/ejercicio8']);
  }
  navigateToEjercicio9() {
    this.router.navigate(['/ejercicio9']);
  }
  navigateToEjercicio10() {
    this.router.navigate(['/ejercicio10']);
  }
  navigateToEjercicio11() {
    this.router.navigate(['/ejercicio11']);  // 🔹 Corregido
  }
  navigateToEjercicio12() {
    this.router.navigate(['/ejercicio12']);
  }
  

  // Función para inicializar el comportamiento de los dropdowns
  initNavbar() {
    const dropdownButtons = document.querySelectorAll<HTMLButtonElement>('.dropbtn');

    dropdownButtons.forEach((btn) => {
      this.renderer.listen(btn, 'click', (event) => {
        event.stopPropagation();
        const dropdownContent = btn.nextElementSibling as HTMLElement;

        if (dropdownContent) {
          document.querySelectorAll('.dropdown-content.show').forEach((openDropdown) => {
            if (openDropdown !== dropdownContent) {
              openDropdown.classList.remove('show');
            }
          });

          dropdownContent.classList.toggle('show');
        }
      });
    });

    // Cerrar dropdowns si el usuario hace clic fuera
    this.renderer.listen(window, 'click', () => {
      document.querySelectorAll('.dropdown-content.show').forEach((dropdown) => {
        dropdown.classList.remove('show');
      });
    });
  }
}
