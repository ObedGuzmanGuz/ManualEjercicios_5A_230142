import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router'; // Importar provideRouter
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import 'flowbite';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app/app.routes'; // Importar las rutas
import { provideHttpClient, withFetch } from '@angular/common/http'; // Proveedor con fetch

bootstrapApplication(AppComponent, {
  providers: [
    provideAnimations(),
    provideAnimationsAsync(),
    provideRouter(routes), // Configuración del enrutador
    provideHttpClient(withFetch()) // Usa fetch en HttpClient
  ]
})
.catch(err => console.error(err));
