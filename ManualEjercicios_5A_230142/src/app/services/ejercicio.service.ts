// src/app/services/ejercicio.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Define la interfaz para ejercicios/tareas
export interface Ejercicio {
  id: number;
  titulo: string;
  descripcion: string;
  objetivo: string;
}

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {
  // BehaviorSubject que almacena el elemento seleccionado (inicialmente null)
  private ejercicioSubject = new BehaviorSubject<Ejercicio | null>(null);
  // Observable al que se suscribe el sidebar
  ejercicio$ = this.ejercicioSubject.asObservable();

  constructor() { }

  // Método para actualizar el ejercicio/tarea seleccionado
  setEjercicio(ejercicio: Ejercicio) {
    this.ejercicioSubject.next(ejercicio);
  }
}
