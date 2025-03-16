import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';  // Asegúrate de importar FormsModule

@Component({
  selector: 'app-json-datatable',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './json-datatable.component.html',
  styleUrls: ['./json-datatable.component.css']
})
export class JsonDatatableComponent implements OnInit {
  jsonData: any[] = [
    { "nombre": "Albert Einstein", "pais": "Alemania", "nacimiento": 1879, "muerte": 1955 },
    { "nombre": "Isaac Newton", "pais": "Inglaterra", "nacimiento": 1643, "muerte": 1727 },
    { "nombre": "Marie Curie", "pais": "Polonia", "nacimiento": 1867, "muerte": 1934 },
    { "nombre": "Stephen Hawking", "pais": "Reino Unido", "nacimiento": 1942, "muerte": 2018 },
    { "nombre": "Richard Feynman", "pais": "EE.UU.", "nacimiento": 1918, "muerte": 1988 },
    { "nombre": "Niels Bohr", "pais": "Dinamarca", "nacimiento": 1885, "muerte": 1962 },
    { "nombre": "Max Planck", "pais": "Alemania", "nacimiento": 1858, "muerte": 1947 },
    { "nombre": "Werner Heisenberg", "pais": "Alemania", "nacimiento": 1901, "muerte": 1976 },
    { "nombre": "Galileo Galilei", "pais": "Italia", "nacimiento": 1564, "muerte": 1642 },
    { "nombre": "James Clerk Maxwell", "pais": "Escocia", "nacimiento": 1831, "muerte": 1879 },
    { "nombre": "Paul Dirac", "pais": "Reino Unido", "nacimiento": 1902, "muerte": 1984 },
    { "nombre": "Enrico Fermi", "pais": "Italia", "nacimiento": 1901, "muerte": 1954 },
    { "nombre": "Erwin Schrödinger", "pais": "Austria", "nacimiento": 1887, "muerte": 1961 },
    { "nombre": "Robert Oppenheimer", "pais": "EE.UU.", "nacimiento": 1904, "muerte": 1967 },
    { "nombre": "Michael Faraday", "pais": "Reino Unido", "nacimiento": 1791, "muerte": 1867 },
    { "nombre": "Johannes Kepler", "pais": "Alemania", "nacimiento": 1571, "muerte": 1630 },
    { "nombre": "Carl Friedrich Gauss", "pais": "Alemania", "nacimiento": 1777, "muerte": 1855 },
    { "nombre": "Lise Meitner", "pais": "Austria", "nacimiento": 1878, "muerte": 1968 },
    { "nombre": "Murray Gell-Mann", "pais": "EE.UU.", "nacimiento": 1929, "muerte": 2019 },
    { "nombre": "Satyendra Nath Bose", "pais": "India", "nacimiento": 1894, "muerte": 1974 },
    { "nombre": "Hendrik Lorentz", "pais": "Países Bajos", "nacimiento": 1853, "muerte": 1928 },
    { "nombre": "Emmy Noether", "pais": "Alemania", "nacimiento": 1882, "muerte": 1935 },
    { "nombre": "William Thomson (Lord Kelvin)", "pais": "Reino Unido", "nacimiento": 1824, "muerte": 1907 },
    { "nombre": "Abdus Salam", "pais": "Pakistán", "nacimiento": 1926, "muerte": 1996 },
    { "nombre": "Luis Walter Alvarez", "pais": "EE.UU.", "nacimiento": 1911, "muerte": 1988 },
    { "nombre": "Edward Witten", "pais": "EE.UU.", "nacimiento": 1951, "muerte": null },
    { "nombre": "Leonard Susskind", "pais": "EE.UU.", "nacimiento": 1940, "muerte": null }
  ];
  keys: string[] = [];
  page: number = 1;
  itemsPerPage: number = 5;
  lengthMenu: number[] = [5,10,15,20];
  paginatedData: any[] = [];
  totalPages: number = 1;
  searchTerm: string = "";
  filteredData: any[] = [];

  ngOnInit(): void {
    if (this.jsonData.length > 0) {
      this.keys = Object.keys(this.jsonData[0]);
    }
    this.filteredData = [...this.jsonData];
    this.updatePagination();
  }

  updatePagination(): void {
    const start = (this.page - 1) * this.itemsPerPage;
    this.paginatedData = this.filteredData.slice(start, start + this.itemsPerPage);
    this.totalPages = Math.ceil(this.filteredData.length / this.itemsPerPage);
  }

  nextPage(): void {
    if (this.page < this.totalPages) {
      this.page++;
      this.updatePagination();
    }
  }

  prevPage(): void {
    if (this.page > 1) {
      this.page--;
      this.updatePagination();
    }
  }

  applySearch(): void {
    this.filteredData = this.jsonData.filter(item =>
      Object.values(item).some(value => {
        // Asegúrate de que 'value' es tratado como string
        const strValue = String(value);  // Convertir a string explícitamente
        return strValue.toLowerCase().includes(this.searchTerm.toLowerCase());
      })
    );
    this.page = 1; // Reiniciar a la primera página después de la búsqueda
    this.updatePagination();
  }
  
}