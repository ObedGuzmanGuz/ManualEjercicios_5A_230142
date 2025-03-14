import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'; // Importamos NgOptimizedImage para optimización de imágenes

@Component({
  selector: 'app-ejercicio11',
  templateUrl: './ejercicio11.component.html',
  styleUrls: ['./ejercicio11.component.css'],
})
export class Ejercicio11Component {
  logoUrl = '/assets/tigrilloo.png'; 
  logoAlt = 'Tigrillo Utxj'; 
  username = 'Obed'; 

}
