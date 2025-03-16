import { Component } from '@angular/core';
import {DataTablesModule} from 'angular-datatables';



@Component({
  selector: 'app-basic-datatable',
  imports: [DataTablesModule],
  templateUrl: './basic-datatable.component.html',
  styleUrl: './basic-datatable.component.css'
})
export class BasicDatatableComponent {

}
