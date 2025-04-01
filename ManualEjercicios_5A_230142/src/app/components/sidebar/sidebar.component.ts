// src/app/components/sidebar/sidebar.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { EjercicioService, Ejercicio } from '../../services/ejercicio.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule], // Agrega esto
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {
  ejercicioActual: Ejercicio | null = null;
  private subscription!: Subscription;

  constructor(private ejercicioService: EjercicioService) {}

  ngOnInit() {
    this.subscription = this.ejercicioService.ejercicio$.subscribe(
      (ejercicio) => {
        this.ejercicioActual = ejercicio;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
