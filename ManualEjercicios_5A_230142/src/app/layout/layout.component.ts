import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { FooterComponent } from '../components/footer/footer.component';
@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [FooterComponent], // Importa FooterComponent aquí
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {
  constructor(public authService: AuthService) {}
}