import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio09',
  templateUrl: './ejercicio09.component.html',
  styleUrls: ['./ejercicio09.component.css']
})
export class Ejercicio09Component {
  item: string = ''; 

  addItem() {
    this.item = '👨‍🚀'; 
  }
}
