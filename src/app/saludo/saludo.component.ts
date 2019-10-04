import { Component, OnInit } from '@angular/core';
import{SaludoService} from '../servicios/saludo.service';
@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css'],
  providers:[SaludoService]
})
export class SaludoComponent implements OnInit {
saludo:string;

  constructor(private miSaludo:SaludoService) {
    this.saludo=miSaludo.saludar();
   }

  ngOnInit() {
  }

}