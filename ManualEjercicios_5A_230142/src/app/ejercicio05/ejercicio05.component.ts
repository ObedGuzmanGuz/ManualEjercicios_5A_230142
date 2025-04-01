import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio05',
  templateUrl: './ejercicio05.component.html',
  styleUrls: ['./ejercicio05.component.css']
})
export class Ejercicio05Component {
  users = [
    { id: 0, name: 'Obed' },
    { id: 1, name: 'Michelle' },
    { id: 2, name: 'Luis' },
    { id: 3, name: 'Jenny' },
    { id: 4, name: 'Matias' }
  ];
// Para permitir la edición del contenido
}
