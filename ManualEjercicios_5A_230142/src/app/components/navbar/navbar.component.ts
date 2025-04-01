// src/app/components/navbar/navbar.component.ts
import { Component, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { EjercicioService, Ejercicio } from '../../services/ejercicio.service';  // Importa el servicio

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
    private router: Router,
    private ejercicioService: EjercicioService   // Inyecta el servicio
  ) {}

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.initNavbar();
    }
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  navigateToEjercicio1() {
    const ejercicio: Ejercicio = {
      id: 1,
      titulo: 'Components in Angular 1',
      descripcion: 'cómo modificar la plantilla HTML y los estilos CSS de un componente en Angular. ',
      objetivo: 'Actualizar la plantilla y los estilos de un componente en Angular.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio1']);
  }
  navigateToEjercicio2() {
    const ejercicio: Ejercicio = {
      id: 2,
      titulo: 'Updating the Component Class 2',
      descripcion: 'En esta actividad, aprenderás cómo agregar una propiedad en la clase TypeScript de un componente y cómo usar interpolación en la plantilla para mostrar dinámicamente el valor de esa propiedad.',
      objetivo: ' Actualizar la clase de un componente en Angular y usar interpolación.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio2']);
  }
  // Repite lo mismo para los demás ejercicios...
  navigateToEjercicio3() {
    const ejercicio: Ejercicio = {
      id: 3,
      titulo: 'Composing Components 3',
      descripcion: 'En esta actividad, aprenderás a utilizar un componente dentro de otro mediante el uso del selector en la plantilla.',
      objetivo: 'Aprender a componer componentes en Angular'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio3']);
  }
  navigateToEjercicio4() {
    const ejercicio: Ejercicio = {
      id: 4,
      titulo: 'Control Flow in Components - @if 4',
      descripcion: 'En esta actividad, aprenderás a mostrar elementos condicionalmente en una plantilla usando la sintaxis @if y @else.',
      objetivo: 'Aprender a usar condicionales en las plantillas de Angular con la sintaxis @if'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio4']);
  }
  navigateToEjercicio5() {
    const ejercicio: Ejercicio = {
      id: 5,
      titulo: 'Control Flow in Components - @for 5',
      descripcion: 'Aprender a usar la sintaxis @for en Angular para repetir elementos en una plantilla.',
      objetivo: 'En esta actividad, aprenderás a iterar sobre un arreglo de elementos utilizando la sintaxis @for en Angular.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio5']);
  }
  navigateToEjercicio6() {
    const ejercicio: Ejercicio = {
      id: 6,
      titulo: 'Property Binding in Angular 6',
      descripcion: 'En esta actividad, aprenderás a vincular dinámicamente propiedades de elementos HTML o componentes de Angular mediante la sintaxis de corchetes []. ',
      objetivo: 'Aprender a usar la vinculación de propiedades en Angular.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio6']);
  }
  navigateToEjercicio7() {
    const ejercicio: Ejercicio = {
      id: 7,
      titulo: 'Event handling 7',
      descripcion: ' En esta actividad, aprenderás a vincular un evento en Angular utilizando la sintaxis de paréntesis ().',
      objetivo: 'Aprender a manejar eventos en Angular.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio7']);
  }
  navigateToEjercicio8() {
    const ejercicio: Ejercicio = {
      id: 8,
      titulo: 'Component Communication with @Input 8',
      descripcion: 'En esta actividad, practicarás cómo pasar datos desde un componente padre (AppComponent) a un componente hijo (UserComponent) utilizando @Input.',
      objetivo: 'Aprender a utilizar el decorador @Input en Angular para comunicar datos de un componente padre a un componente hijo.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio8']);
  }
  navigateToEjercicio9() {
    const ejercicio: Ejercicio = {
      id: 9,
      titulo: 'Component Communication with @Output 9',
      descripcion: 'En esta actividad, practicarás cómo comunicar acciones realizadas en un componente hijo (ChildComponent) a un componente padre (AppComponent) mediante @Output y EventEmitter.',
      objetivo: 'Aprender a utilizar el decorador @Output en Angular para emitir eventos desde un componente hijo hacia un componente padre.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio9']);
  }
  navigateToEjercicio10() {
    const ejercicio: Ejercicio = {
      id: 10,
      titulo: 'Deferrable Views 10',
      descripcion: ' Retrasar la carga de componentes no críticos (como comentarios en un blog) hasta que sean necesarios.',
      objetivo: 'Aprender a utilizar Deferrable Views en Angular para cargar componentes de manera diferida y optimizar el rendimiento de la aplicación'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio10']);
  }
  navigateToEjercicio11() {
    const ejercicio: Ejercicio = {
      id: 11,
      titulo: 'Optimizing images 11',
      descripcion: ' Reducir el desplazamiento de diseño con atributos width y height, priorizar imágenes críticas  con priority',
      objetivo: 'Aprender a optimizar imágenes en Angular usando la directiva NgOptimizedImage para mejorar el rendimiento y los Core Web Vitals.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio11']);
  }
  navigateToEjercicio12() {
    const ejercicio: Ejercicio = {
      id: 12,
      titulo: 'Routing Overview 12',
      descripcion: 'Definir rutas en un archivo dedicado (app.routes.ts),configurar el Router en el appConfig de Angular.',
      objetivo: 'Configurar el Angular Router para manejar múltiples páginas en una aplicación SPA (Single Page Application), optimizando la navegación y la carga de componentes.'
    };
    this.ejercicioService.setEjercicio(ejercicio);
    this.router.navigate(['/ejercicio12']);
  }

  
  navigateToTarea1() {
    const tarea: Ejercicio = {
      id: 101,
      titulo: 'Tabla Basica',
      descripcion: 'Tabla relacionadad con los gustos de equipo de Marvel',
      objetivo: 'Saber que prefieren los comapeñeros Team America o Iroman'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas']);
  }
  navigateToTarea2() {
    const tarea: Ejercicio = {
      id: 102,
      titulo: 'Tabla options 2',
      descripcion: 'Demostracions de datos reacabados por la policia sobre los crimines ocurridos',
      objetivo: 'Mostrar los regitros de crimenes cometidos en Nueva York'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas2']);
  }
  navigateToTarea3() {
    const tarea: Ejercicio = {
      id: 103,
      titulo: 'Tabla Json 3',
      descripcion: 'Demostracion de los fisicos mas famosos de la historia',
      objetivo: 'MUertes y nacimientos de los fisicos '
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas3']);
  }
  navigateToTarea4() {
    const tarea: Ejercicio = {
      id: 104,
      titulo: 'Tabla Ajax 4',
      descripcion: 'Demostracion de las sesiones de usuarios que se han logueado',
      objetivo: 'Se muestra los datos de usuarios en su inicio de sesion'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas4']);
  }
  navigateToTarea5() {
    const tarea: Ejercicio = {
      id: 105,
      titulo: 'Grafica  basica 1',
      descripcion: 'Agregacion de la grafica para la visualizacion de datos ',
      objetivo: 'Demostrar datos en una grafica de barras'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas5']);
  }
  navigateToTarea6() {
    const tarea: Ejercicio = {
      id: 106,
      titulo: 'Grafica options 2',
      descripcion: 'Grafica asignada por parte del profesor',
      objetivo: 'Implementar la grafica en el Manual de ejercicios'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas6']);
  }
  navigateToTarea7() {
    const tarea: Ejercicio = {
      id: 107,
      titulo: 'Grafica Json 3',
      descripcion: 'Mostrar en una grafica circular las distribucion de los crimenes',
      objetivo: 'Distribucion de los tipos de crimenes'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas7']);
  }
  navigateToTarea8() {
    const tarea: Ejercicio = {
      id: 108,
      titulo: 'Grafica 4',
      descripcion: 'Mostrar los datos recabados de las sesiones de usuarios',
      objetivo: 'Analisis de sesiones de usuarios'
    };
    this.ejercicioService.setEjercicio(tarea);
    this.router.navigate(['/tareas8']);
  }


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

    this.renderer.listen(window, 'click', () => {
      document.querySelectorAll('.dropdown-content.show').forEach((dropdown) => {
        dropdown.classList.remove('show');
      });
    });
  }
}
