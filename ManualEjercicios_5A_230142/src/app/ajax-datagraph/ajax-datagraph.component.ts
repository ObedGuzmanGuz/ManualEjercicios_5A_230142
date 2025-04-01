import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-ajax-datagraph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ajax-datagraph.component.html',
  styleUrls: ['./ajax-datagraph.component.css']
})
export class AjaxDatagraphComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('sessionChart', { static: false }) chartRef!: ElementRef<HTMLCanvasElement>;
  sessions: Session[] = [];
  loading = true;
  private chart: Chart | null = null;
  private retryCount = 0;
  private readonly maxRetries = 3;
  private readonly retryDelay = 1000;

  ngOnInit(): void {
    this.fetchSessions();
  }

  ngAfterViewInit(): void {
    if (this.sessions.length > 0 && !this.chart) {
      this.createFunnelChart();
    }
  }

  ngOnDestroy(): void {
    this.destroyChart();
  }

  private async fetchSessions(): Promise<void> {
    try {
      const response = await fetch('http://localhost:3000/api/sessions');
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}`);
      }
      
      this.sessions = await response.json();
      setTimeout(() => this.createFunnelChart(), 0);
    } catch (error) {
      this.handleFetchError(error);
    } finally {
      this.loading = false;
    }
  }

  private handleFetchError(error: unknown): void {
    console.error('Error fetching sessions:', error);
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      setTimeout(() => this.fetchSessions(), this.retryDelay * this.retryCount);
    }
  }

  private createFunnelChart(): void {
    if (!this.canvasReady) {
      this.retryChartCreation();
      return;
    }

    this.destroyChart();

    const sessionData = this.processSessionData();
    const ctx = this.chartRef.nativeElement.getContext('2d');

    if (!ctx) {
      console.error('Could not get canvas context');
      return;
    }

    this.chart = new Chart(ctx, this.getChartConfig(sessionData));
  }

  private get canvasReady(): boolean {
    return !!this.chartRef?.nativeElement;
  }

  private retryChartCreation(): void {
    if (this.retryCount < this.maxRetries) {
      this.retryCount++;
      setTimeout(() => this.createFunnelChart(), this.retryDelay);
    } else {
      console.warn('Max retries reached for chart creation');
    }
  }

  private destroyChart(): void {
    if (this.chart) {
      this.chart.destroy();
      this.chart = null;
    }
  }

  private processSessionData(): SessionData {
    return {
      totalSessions: this.sessions.length,
      activeSessions: this.sessions.filter(s => this.getSessionDuration(s) > 5).length,
      longSessions: this.sessions.filter(s => this.getSessionDuration(s) > 30).length,
      inactiveSessions: this.sessions.filter(s => s.inactividad > 0).length
    };
  }

  private getChartConfig(data: SessionData): any {
    return {
      type: 'bar',
      data: {
        labels: ['Total Sesiones', 'Sesiones Activas', 'Sesiones Largas', 'Sesiones con Inactividad'],
        datasets: [{
          label: 'Distribución de Sesiones',
          data: [data.totalSessions, data.activeSessions, data.longSessions, data.inactiveSessions],
          backgroundColor: [
            'rgba(54, 162, 235, 0.7)',
            'rgba(75, 192, 192, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(255, 99, 132, 0.7)'
          ],
          borderWidth: 1
        }]
      },
      options: this.getChartOptions(data)
    };
  }

  private getChartOptions(data: SessionData): any {
    return {
      indexAxis: 'y',
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Análisis de Sesiones de Usuarios',
          font: { size: 16, weight: 'bold' }
        },
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (context: any) => {
              const label = context.label || '';
              const value = Number(context.raw);
              const percentage = (value / data.totalSessions * 100).toFixed(1);
              return `${label}: ${value} (${percentage}%)`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          title: { display: true, text: 'Número de Sesiones' }
        },
        y: {
          title: { display: true, text: 'Etapas' }
        }
      }
    };
  }

  getSessionDuration(session: Session): number {
    if (!session.inicio || !session.fin) return 0;
    const start = new Date(session.inicio).getTime();
    const end = new Date(session.fin).getTime();
    return (end - start) / (1000 * 60);
  }

  getAverageDuration(): string {
    if (!this.sessions.length) return '0';
    const total = this.sessions.reduce((sum, session) => sum + this.getSessionDuration(session), 0);
    return (total / this.sessions.length).toFixed(1);
  }

  getAverageInactivity(): string {
    if (!this.sessions.length) return '0';
    const total = this.sessions.reduce((sum, session) => sum + (session.inactividad || 0), 0);
    return (total / this.sessions.length).toFixed(1);
  }
}

interface Session {
  usuario: string;
  inicio: string | Date;
  fin: string | Date;
  inactividad: number;
  duracion?: number;
}

interface SessionData {
  totalSessions: number;
  activeSessions: number;
  longSessions: number;
  inactiveSessions: number;
}