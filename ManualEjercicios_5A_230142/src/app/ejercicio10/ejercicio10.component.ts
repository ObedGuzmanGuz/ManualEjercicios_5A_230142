import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio10',
  templateUrl: './ejercicio10.component.html',
  styleUrls: ['./ejercicio10.component.css']
})
export class Ejercicio10Component {
  showComments = false; // Estado para mostrar los comentarios
  isLoading = true; // Estado para simular la carga de comentarios

  ngOnInit() {
    // Simulamos la carga de los comentarios después de 2 segundos
    setTimeout(() => {
      this.isLoading = false; // Cambiamos el estado de carga
      this.showComments = true; // Mostramos los comentarios
    }, 2000);
  }
}
