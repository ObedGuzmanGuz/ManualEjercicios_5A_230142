import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio07',
  templateUrl: './ejercicio07.component.html',
  styleUrls: ['./ejercicio07.component.css']
})
export class Ejercicio07Component {
  message: string = ''; // Inicialmente el mensaje está vacío

  // Mostrar el mensaje cuando el ratón pasa sobre la sección
  onMouseOver() {
    this.message = 'Tigrillos xD'; // Mostrar el mensaje secreto
  }

  // Ocultar el mensaje cuando el ratón sale
  onMouseOut() {
    this.message = ''; // Eliminar el mensaje secreto
  }
}
