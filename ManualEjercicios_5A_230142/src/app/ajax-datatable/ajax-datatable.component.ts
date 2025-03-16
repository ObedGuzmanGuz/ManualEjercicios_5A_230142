import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ajax-datatable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ajax-datatable.component.html',
  styleUrls: ['./ajax-datatable.component.css']
})
export class AjaxDatatableComponent {
  sessions: any[] = [];

  ngOnInit(): void {
    fetch('http://localhost:3000/api/sessions')
      .then(response => response.json())
      .then(data => {
        this.sessions = data;
      })
      .catch(error => {
        console.error('Error al obtener las sesiones:', error);
      });
  }
}
