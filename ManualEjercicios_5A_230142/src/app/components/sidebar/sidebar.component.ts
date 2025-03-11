import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  toggleAccordion(index: number) {
    const content = document.getElementById(`content-${index}`);
    const icon = document.getElementById(`icon-${index}`);

    if (!content || !icon) return;

    if (content.classList.contains("hidden")) {
      // Cerrar otros acordeones
      document.querySelectorAll('[id^="content-"]').forEach(el => el.classList.add("hidden"));
      document.querySelectorAll('[id^="icon-"]').forEach(el => el.classList.remove("rotate-180"));

      // Mostrar el acordeón seleccionado
      content.classList.remove("hidden");
      icon.classList.add("rotate-180");
    } else {
      // Ocultar el acordeón si ya está abierto
      content.classList.add("hidden");
      icon.classList.remove("rotate-180");
    }
  }
}
