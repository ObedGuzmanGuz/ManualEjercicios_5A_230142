// breadcrumb.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { EjercicioService } from '../../services/ejercicio.service';
import { filter } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.css']
})
export class BreadcrumbComponent implements OnInit, OnDestroy {
  breadcrumbs: Array<{ label: string, url: string }> = [];
  private subscriptions: Subscription[] = [];

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private ejercicioService: EjercicioService
  ) {}

  ngOnInit() {
    this.buildBreadcrumbs();

    this.subscriptions.push(
      this.router.events.pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd)
      ).subscribe(() => {
        this.buildBreadcrumbs();
      })
    );

    this.subscriptions.push(
      this.ejercicioService.ejercicio$.subscribe(ejercicio => {
        if (ejercicio && this.breadcrumbs.length > 0) {
          this.breadcrumbs[this.breadcrumbs.length - 1].label = ejercicio.titulo;
        }
      })
    );
  }

  private buildBreadcrumbs() {
    const breadcrumbs: Array<{ label: string, url: string }> = [];
    let currentRoute = this.activatedRoute.root;
    let url = '';
    let foundRoute = true;
  
    while (foundRoute) {
      foundRoute = false;
      const children = currentRoute.children;
  
      children.forEach(route => {
        if (route.outlet === 'primary') {
          const routeSnapshot = route.snapshot;
          const breadcrumbLabel = routeSnapshot.data['breadcrumb'];
          if (breadcrumbLabel) {
            const pathSegments = routeSnapshot.url.map(segment => segment.path);
            url += '/' + pathSegments.join('/');
            breadcrumbs.push({ label: breadcrumbLabel, url });
          }
          currentRoute = route;
          foundRoute = true;
        }
      });
    }
  
    if (breadcrumbs.length === 0 || breadcrumbs[0].label !== 'Inicio') {
      breadcrumbs.unshift({ label: 'Inicio', url: '/' });
    }
  
    this.breadcrumbs = breadcrumbs;
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }
}